import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import FeaturedPets from '../../components/featuredPets/FeaturedPets'
import FeaturedPetsDayCare from '../../components/featuredPetsDayCare/FeaturedPetsDayCare'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Steps from '../../components/steps/Steps'
import PetList from '../../components/petList/PetList'
import LoginForm from '../../components/loginForm/LoginForm'
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

        <>
        {/*BLURRED LOGIN, IS NOT 100% SAFE*/}
          {/* {!user && <div className='blurredContainer'>
              <div className="blurredCardContainer">
                  <LoginForm background={'white'}/>
              </div>
            </div>} */}
        <div className={`homeContainer ${{/*!user && 'blurred'*/}}`}>
            {/*ENDS BLURRED LOGIN, IS NOT 100% SAFE*/}
          <Header type='list'/>
          {/* <FeaturedPets/> */}
          {/* <PetList/> */}
          <Steps/>
          <FeaturedPetsDayCare/>
          <EmailSubs/>
        </div>
        </> 
        
        <Footer/>
    </div>
  )
}

export default Home