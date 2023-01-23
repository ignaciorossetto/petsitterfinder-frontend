import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./pet.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pet = () => {
  const location = useLocation();
  const [pet, setPet] = useState(location.state);
  console.log(pet.category);
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="petContainer">
        <div className="petDetails">
          <Link to={`/pets/${pet.category}`} className="arrowBack " state={{pet: pet.category}}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <img src={pet.thumbnail} alt="" className="petImg" />
          <div className="descContainer">
            <h1>Nombre: {pet.name}</h1>
            <h2>Edad: {pet.age}</h2>
            {pet.breed !== "-" && <h2>Tamaño: {pet.size}</h2>}
            <h2>Sexo: {pet.gender}</h2>
            {pet.breed !== "-" && <h2>Raza: {pet.breed}</h2>}
            <h2>
              Fechas: {pet.start_date} - {pet.end_date}
            </h2>
            <div className="petDescription">{pet.description}</div>

            <button className="itemBtn">Chatea con Juan</button>
          </div>
        </div>
      </div>
      <EmailSubs />
      <Footer />
    </div>
  );
};

export default Pet;
