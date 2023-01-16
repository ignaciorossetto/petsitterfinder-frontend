import React from 'react'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import FeaturedPets from '../../components/featuredPets/FeaturedPets'
import FeaturedPetsDayCare from '../../components/featuredPetsDayCare/FeaturedPetsDayCare'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PetList from '../../components/petList/PetList'
import Steps from '../../components/steps/Steps'
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <FeaturedPets/>
          <PetList/>
          <FeaturedPetsDayCare/>
          <EmailSubs/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home