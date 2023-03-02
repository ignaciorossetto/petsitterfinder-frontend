import React from 'react'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import RegisterForm from '../../components/registerForm/RegisterForm'


const SitterRegister = () => {
  return (
    <>
        <Navbar type={'l/r'} />
        <RegisterForm type={'sitter'}/>
        <EmailSubs/>
        <Footer/>
    </>

  )
}

export default SitterRegister