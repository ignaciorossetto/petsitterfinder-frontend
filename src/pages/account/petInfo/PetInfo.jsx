
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import EmailSubs from "../../../components/emailSubs/EmailSubs";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Skeleton from "../../../components/skeleton/Skeleton";
import { AuthContext } from "../../../context/AuthContext";
import "./petInfo.css";
import PetManagerCard from "../../../components/petManagerCard/PetManagerCard";
import config from "../../../config/config.js";

axios.defaults.withCredentials = true;

const PetInfo = () => {
  const { user, loading, dispatch } = useContext(AuthContext);
  const [fetching, setFetching] = useState(true);
  const [updater, setUpdater] = useState(1);
  const navigate = useNavigate();



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
