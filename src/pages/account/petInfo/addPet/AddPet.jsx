import React, { useContext, useState } from "react";
import EmailSubs from "../../../../components/emailSubs/EmailSubs";
import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import "./addPet.css";
import {  useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../../../context/AuthContext";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import config from "../../../../config/config.js";


const AddPet = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [datesCheckbox, setDateCheckBox] = useState(true);

  const onSubmit = async (e, preventDefault_) => {

    try {

    const addPetForm = document.getElementById("addPetForm")
    const formData = new FormData(addPetForm);
    const dates = datesCheckbox ? [format(date[0].startDate, "dd/MM/yyyy" ), format(date[0].endDate, "dd/MM/yyyy" )] : null
    const milisecondDate = datesCheckbox ? Number(date[0].startDate) : null
    if (dates){
      formData.append("dates", JSON.stringify(dates));
      formData.append("milisecondsDates", milisecondDate);
      formData.append("available", true);
    }

    formData.append("ownerId", user._id);
    formData.append("ownerName", user.username);

    await axios.post(
      `${config.url}/api/pets`,
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      }
    );
    await axios.get(`${config.url}/api/auth/updateUser`)
    navigate('/user/pets')

  } catch (error) {
      
  }
  };

  return (
    <>
      <Navbar />
      <div className="addPetContainer">
        <div className="addPet">
          <form
            className="addPetForm"
            onSubmit={handleSubmit(onSubmit)}
            id="addPetForm"
          >
            <h1>Nueva Mascota</h1>
            <label className="addPetFormLabel">Nombre</label>
            <input
              {...register("name", {
                required: true,
                minLength: 2
              })}
              name="name"
              className="addPetFormInput"
              type="text"
            />
            {errors.name?.type === "required" && (
            <p style={{ color: "red" }}>Debe ingresar nombre de mascota!</p>
          )}
            {errors.name?.type === "minLength" && (
            <p style={{ color: "red" }}>Nombre de mascota muy corto!</p>
          )}
            <label className="addPetFormLabel">Tipo de Mascota</label>
            <select
              {...register("type", {
                required:true
              })}
              name="type"
              className="addPetFormInput"
            >
              <option value="" disabled hidden selected>
                -
              </option>
              <option value="dog">Perro</option>
              <option value="cat">Gato</option>
              <option value="fish">Pecera</option>
            </select>
            {errors.type?.type === "required" && (
            <p style={{ color: "red" }}>Debes elegir el tipo de mascota!</p>
          )}
            <label className="addPetFormLabel">Edad</label>
            <select
              {...register("age", {
                required:true
              })}
              name="age"
              className="addPetFormInput"
            >
              <option value="" disabled hidden selected>
                -
              </option>
              <option value="very-young">Pequeño/a (menor a un año)</option>
              <option value="young">Joven (entre 1 y 3 años)</option>
              <option value="adult">Adult/a (entre 3 y 10 años)</option>
              <option value="elder">Anciano/a (mayor a 10 años)</option>
            </select>
            {errors.type?.age === "required" && (
            <p style={{ color: "red" }}>Debes elegir la edad de la mascota!</p>
          )}
            <label className="addPetFormLabel">Sexo</label>
            <select
              {...register("sex", {
                required:true
              })}
              name="sex"
              className="addPetFormInput"
            >
              <option value="" disabled hidden selected>
                -
              </option>
              <option value="male">Masculino</option>
              <option value="female">Femenino </option>
            </select>
            {errors.type?.sex === "required" && (
            <p style={{ color: "red" }}>Debes elegir el sexo de la mascota!</p>
          )}
            <label className="addPetFormLabel">Tamano</label>
            <select
              {...register("size",{
                required: true
              })}
              name="size"
              className="addPetFormInput"
            >
              <option value="" disabled hidden selected>
                -
              </option>
              <option value="S">Pequeno</option>
              <option value="M">Mediano</option>
              <option value="L">Grande</option>
            </select>
            {errors.size?.type === "required" && (
            <p style={{ color: "red" }}>Debes elegir el tamano de mascota!</p>
          )}
            <label className="addPetFormLabel">
              Fechas
              <input
                {...register("dates")}
                name="dates"
                onChange={() => setDateCheckBox(!datesCheckbox)}
                checked={datesCheckbox}
                type="checkbox"
              />
            </label>
            <div className=" dateInput">
              {datesCheckbox ? (
                <>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    className=" "
                    onClick={() => setOpenCalendar(!openCalendar)}
                  >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}</span>
                  {openCalendar && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      minDate={new Date()}
                      ranges={date}
                      className="dateAddPet"
                    />
                  )}
                </>
              ) : (
                <span className="checkDateFalseSpan">
                  No quiero publicar mi mascota aun!
                </span>
              )}
            </div>
            <label className="addPetFormLabel">Imagenes</label>
            <input
              {...register("images",{
                required: true
              })}
              name="images"
              className="addPetFormInput"
              type="file"
              accept="image/*"
              capture
              multiple
            />
            {errors.images?.type === "required" && (
            <p style={{ color: "red" }}>Debes elegir al menos una imagen!</p>
          )}
            <label className="addPetFormLabel">Raza</label>
            <input
              {...register("breed")}
              name="breed"
              className="addPetFormInput"
              type="text"
            />
            <label className="addPetFormLabel">Descripcion</label>
            <textarea
              {...register("desc", {
                required: true,
              })}
              name="desc"
              className="addPetFormInput"
            />
            {errors.desc?.type === "required" && (
            <p style={{ color: "red" }}>Debe ingresar una breve descripcion de la mascota!</p>
          )}
            <input
              className="addPetFormSub"
              value="Agregar Mascota!"
              type="submit"
            />
          </form>
        </div>
      </div>
      <EmailSubs />
      <Footer />
    </>
  );
};

export default AddPet;
