import React from 'react'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import RegisterForm from '../../components/registerForm/RegisterForm'
import ThirdPartyBtns from '../../components/thirdPartyBtns/ThirdPartyBtns'
import './register.css'

const Register = () => {
  return (
    <>
    <Navbar type='l/r'/>
    <RegisterForm/>
    <EmailSubs/>
    <Footer/>
    </>
  )
}

export default Register