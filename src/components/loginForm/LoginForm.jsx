import React, {  useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThirdPartyBtns from '../thirdPartyBtns/ThirdPartyBtns'
import './loginForm.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'
import config from "../../config/config.js";
axios.defaults.withCredentials = true


const LoginForm = ({type, background}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const {user, dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleInputs = (e) => {
    setCredentials(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  const handleLoginClick = async(e) =>{
    dispatch({type:'LOGIN_START'})
    e.preventDefault();
    const url = type === 'sitter' ? `${config.url}/api/auth/sitter-login` : `${config.url}/api/auth/login`
    try {
      const response = await axios.post(url, credentials)
      setCredentials({
        email: '',
        password: ''
      })

      if (response) {  
        dispatch({type:'LOGIN_SUCCESS', payload: response.data.payload})
        navigate('/?login_status=succes')
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Signed in successfully'
        })
      }
      return
      
    } catch (error) {
      dispatch({type:'LOGIN_FAILURE', payload: error.message})
      setError(error)
      setErrorMsg(error.response.data.error)
      return
    }
  }

  return (
    <div className="loginView">
        <div className="loginContainer" style={{backgroundColor: background}}>
          {
            type === 'sitter' ? <h1>Bienvenido Sitter!</h1> :
          <h1>Bienvenido!</h1>
          }
          <form className="loginForm" action='' method='post'>
            <div>
              <label className="formText">Usuario</label>
              <input
              onChange={handleInputs}
                type="text"
                name="email"
                className="formInput formUsername"
                value={credentials.email}
              />
            </div>
            <div>
              <label className="formText">Contrasena</label>
              <input
              onChange={handleInputs}
                type="password"
                name="password"
                className="formInput formPassword"
                value={credentials.password}
              />
            </div>
            {error && <span>{errorMsg}</span>}
            <div className="formBtns">
              <button onClick={handleLoginClick} className="loginbtns">Ingresar</button>
            </div>
          </form>
          <span className="notRegYet">
            No estas registrado? <Link to={type==='sitter' ? "/sitter-register": "/register"}>Registrate aca</Link>{" "}
          </span>
          <br />
          {type !== 'sitter' &&
          <ThirdPartyBtns type="login" />
          }
        </div>
      </div>
  )
}

export default LoginForm