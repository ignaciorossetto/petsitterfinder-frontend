import React from 'react'
import { useLocation } from 'react-router-dom'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './error.css'

const Error = () => {
    const location = useLocation()
  return (
    <>
      <Navbar />
      <div className='errorContainer'>
        <h1>Upss...</h1>
        <h2>{location.state.error}</h2>
      </div>
      <EmailSubs />
      <Footer />
    </>
  )
}

export default Error