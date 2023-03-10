import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import FeaturedPets from '../../components/featuredPets/FeaturedPets'
import FeaturedPetsDayCare from '../../components/featuredPetsDayCare/FeaturedPetsDayCare'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PetList from '../../components/petList/PetList'
import "./home.css"
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import config from '../../config/config.js'


const Home = () => {
  const [searchParams] = useSearchParams();
  const { user, dispatch} = useContext(AuthContext)

  useEffect(()=>{
    const fetchUserInfo = async() => {
      dispatch({type: "LOGIN_START"})
      try {
        const response  = await axios.get(`${config.url}/api/auth/checkauth`)
        const userInfo = response.data.payload
        dispatch({type: "LOGIN_SUCCESS", payload: userInfo})
        
      } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error.message})
        console.log(error);
      }
    }
    if(searchParams.get('loginG') === 'success'){
      fetchUserInfo()
    }


  },[])


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