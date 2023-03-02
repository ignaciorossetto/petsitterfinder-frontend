import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import EmailSubs from "../../../components/emailSubs/EmailSubs";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Skeleton from "../../../components/skeleton/Skeleton";
import { AuthContext } from "../../../context/AuthContext";
import "./petInfo.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Switch from "../../../components/switch/Switch";
import PetManagerCard from "../../../components/petManagerCard/PetManagerCard";
import config from "../../../config/config.js";

axios.defaults.withCredentials = true;

const PetInfo = () => {
  const { user, loading, dispatch } = useContext(AuthContext);
  const [fetching, setFetching] = useState(true);
  const [updater, setUpdater] = useState(1);
  const navigate = useNavigate();
  const [openCalendar, setOpenCalendar] = useState(false);
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

  const fetchAuth = async () => {
    setFetching(true);
    try {
      dispatch({ type: "LOGIN_START" });
      const response = await axios.get(
        `${config.url}/api/auth/checkauth`
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.payload });
      setFetching(false);
      return;
    } catch (error) {
      console.log("error");
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      setFetching(false);
      navigate("/error", { state: { error: "No iniciaste sesion" } });
      return;
    }
  };

  useEffect(() => {
    fetchAuth();
  }, [updater]);

  return (
    <>
      <Navbar />
      <div className="petInfoContainer">
        <div className="petInfo">
          <div className="petInfoBtns">
            <button
              onClick={() => navigate("/user/pets/addpet")}
              to="#"
              className="petInfoBtn"
            >
              Agregar Mascota
            </button>
          </div>
          {loading ? (
            <Skeleton type={'feed'} counter={1} />
          ) : (
            <div className="petInfoDetails">
              <h2>Mascotas</h2>
              {!user ? (
                "Loading..."
              ) : user.pets?.length === 0 ? (
                <div>Todavia no agregaste ninguna mascota!</div>
              ) : (
                user.pets?.map((pet) => {
                  return <PetManagerCard pet={pet} />
                })
              )}
            </div>
          )}
        </div>
      </div>
      <EmailSubs />
      <Footer />
    </>
  );
};

export default PetInfo;
