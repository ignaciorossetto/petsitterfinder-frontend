import React, { useEffect, useState } from 'react'
import './confirmAccount.css'
import axios from 'axios'
import config from '../../../config/config.js'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const ConfirmAccount = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const [verifyError, setVerifyError] = useState(false)
    const token = searchParams.get('token')
    const email = searchParams.get('email')
    useEffect(()=> {
        const checkToken = async() => {
            setLoading(true)
            try {
                const response = await axios.post(config.url + '/api/auth/checkAccount', {
                    token: token,
                    email: email
                })
                setLoading(false)
            } catch (error) {   
                setLoading(false)
                setVerifyError(true)
                return error.message
            }
        }
        checkToken()
        
    },[])

    const handleResendConfirmation = async() => {
        console.log('hitted')
    }


  return (
    <>
    <Navbar/>
    <div className='confirmAccount'>
        {loading ? 
        <div className='confirmAccountContianer'>
            <h1>Verificando cuenta....</h1>
            <div class="loader"></div>
        </div> :
        !loading && !verifyError ?
        <div className='confirmAccountContianer'>
            <h1><FontAwesomeIcon icon={faCircleCheck} color='green'/> Felicitaciones!</h1>    
            <h2> Tu cuenta fue verificada con éxito!</h2>
            <h3>Logeate <strong><Link to='/login'>HACIENDO CLICK ACÁ</Link></strong></h3>
        </div> : 
        <div className='confirmAccountContianer'>
            <h1><FontAwesomeIcon icon={faCircleXmark} color='red'/> Error en la verificacion </h1>
            <h3>Recorda que el token dura 15 minutos.</h3>
            <h5 className='confirmAccountResendClick' onClick={()=> handleResendConfirmation()}>Click aca para enviar otro mail de verificacion.</h5>
        </div>
    }
    </div>
    <Footer/>
    </>
  )
}

export default ConfirmAccount