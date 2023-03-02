import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Skeleton from "../../components/skeleton/Skeleton";




import "./pet.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import config from "../../config/config.js";


const Pet = () => {
  const location = useLocation();
  const [pet, setPet] = useState(location.state);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()
  const {user} = useContext(AuthContext)

useEffect(()=>{
  const fetchPet = async() => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${config.url}}/api/pets/find/${params.id}`)
      setPet(response.data)
      setIsLoading(false)
    } 
     catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }
  fetchPet()
},[])



  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      {isLoading ? <div className="skeletonPetContainer">
        <div className="skeletonPet">
        <Skeleton type={'feed'} counter={1}/>
        </div>
      </div> :
      <div className="petContainer">
        <div className="petDetails">
          <Link to={`/pets/${pet.type}`} className="arrowBack " state={{pet: pet.type}}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <ImageSlider images={pet.images} />
          <div className="descContainer">
            <h1>Nombre: {pet.name}</h1>
            <h2>Tamaño: {pet.size}</h2>
            <h2>Sexo: {pet.sex}</h2>
            {pet.breed !== "-" && <h2>Raza: {pet.breed}</h2>}
            <h2>
              Fechas: {pet.dates.start_date} - {pet.dates.end_date}
            </h2>
            <div className="petDescription">{pet.desc}</div>
            <Link to='/'>
            <button className="itemBtn chatBtn" >{user ? `Chatea con ${pet.ownerName}` : `Logeate para chatear con el dueño`}</button>
            </Link>

            
          </div>
        </div>
      </div>
      }
      <EmailSubs />
      <Footer />
    </div>
  );
};

export default Pet;
