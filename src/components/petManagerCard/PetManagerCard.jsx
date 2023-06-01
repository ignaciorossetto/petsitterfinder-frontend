import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'
import Switch from '../switch/Switch'
import './petManagerCard.css'
import config from "../../config/config.js";
import { format } from "date-fns";



const PetManagerCard = ({pet}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const { user, loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [updater, setUpdater] = useState(1);

    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDeletePetClick = async (id, pid) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No se puede revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#44ad36",
      confirmButtonText: "Si, borrar mascota!",
      cancelButtonText: "No borrar mascota!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        try {
          await axios.delete(`${config.url}/api/pets/${id}/${pid}`);
          await axios.get(`${config.url}/api/auth/updateUser`);
          setUpdater((prev) => prev + 1);
        } catch (error) {
          navigate("/error", {
            state: { error: "Ocurrio un error, intenta mas tarde" },
          });
        }
      }
    });
  };
  const handlePublishPet = async (id, pid) => {
    Swal.fire({
      title: "Aceptando, publicaras tu mascota en PetSitterFinder?",
      text: "Puedes poner tu mascota en modo `No disponible` desde el panel de mascotas",
      showCancelButton: true,
      confirmButtonColor: "#44ad36",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, publicar mascota!",
      cancelButtonText: "No publicar mascota!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Modificacion exitosa!", "Tu mascota ha sido publicada.", "success");
        try {
          const dates = [format(date[0].startDate, "dd/MM/yyyy" ), format(date[0].endDate, "dd/MM/yyyy" )]
          const milisecondsDates = Number(date[0].startDate)
          const obj = {
            dates,
            milisecondsDates,
            available: true
          }
          await axios.put(`${config.url}/api/users/${id}/pets/${pid}`, obj);
          await axios.get(`${config.url}/api/auth/updateUser`);
          setUpdater((prev) => prev + 1);
        } catch (error) {
          navigate("/error", {
            state: { error: "Ocurrio un error, intenta mas tarde" },
          });
        }
      }
    });
  };

  return (
    <>
                      <div key={pet._id} className="ownedPetContainer">
                        <div className="ownedPet">
                          <div className="imgContainer">
                            <img src={pet.images[0]} alt="pet" />
                          </div>
                          <div className="ownedPetInfo">
                            <div className="ownedPetInfoSpan">
                              <h3>Nombre: {pet.name}</h3>
                              <span>
                                Mascota:{" "}
                                {pet.type === "cat"
                                  ? "Gato"
                                  : pet.type === "dog"
                                  ? "Perro"
                                  : "Pecera"}
                              </span>
                              <span>Tamano: {pet.size}</span>
                              {pet.breed.length > 0 && (
                                <span>Raza: {pet.breed}</span>
                              )}
                              <span>
                                Promocionado:{" "}
                                {pet.featured === true ? "Si" : "No"}
                              </span>
                              <span>
                                Agregado: {pet.createdAt.split("T")[0]}
                              </span>
                            </div>
                            <div className="ownedPetBtns">
                            <button
                                className="publishOwnedPetBtn"
                                onClick={() => setOpenCalendar(!openCalendar)}
                              >
                                <FontAwesomeIcon icon={faCalendarDays} />{" "}
                                Publicar mascota
                              </button>
                              {openCalendar && (
                                <>
                                <DateRange
                                  onChange={(item) => setDate([item.selection])}
                                  editableDateInputs={true}
                                  moveRangeOnFirstSelection={false}
                                  minDate={new Date()}
                                  ranges={date}
                                  className="datePetInfo"
                                  >
                                </DateRange>
                                  <button className="datePetInfoCloseBtn" onClick={()=> setOpenCalendar(!openCalendar)}>X</button>
                                  <button className="datePetInfoConfirmBtn" onClick={()=> {
                                    setOpenCalendar(!openCalendar)
                                    handlePublishPet(user._id, pet._id)
                                    }}>Publicar!</button>
                                  </>
                                )}
                                {
                                  pet.milisecondsDates > Number(new Date()) && <Switch state={pet.available} petId={pet._id} userId={user._id}  />
                                }
                                
                            </div>
                            <div className="ownedPetBtns">
                              
                              <button>Modificar mascota</button>
                              <button
                                className="deleteOwnedPetBtn"
                                onClick={() =>
                                  handleDeletePetClick(user._id, pet._id)
                                }
                              >
                                Eliminar mascota
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
  )
}

export default PetManagerCard