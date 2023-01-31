import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThirdPartyBtns from '../thirdPartyBtns/ThirdPartyBtns'
import './loginForm.css'

const LoginForm = () => {


  return (
    <div className="loginView">
        <div className="loginContainer">
          <h1>Bienvenido!</h1>
          <form className="loginForm" action='' method='post'>
            <div>
              <label className="formText">Usuario</label>
              <input
                type="text"
                name="username"
                className="formInput formUsername"
              />
            </div>
            <div>
              <label className="formText">Contrasena</label>
              <input
                type="password"
                name="password"
                className="formInput formPassword"
              />
            </div>
            <div className="formBtns">
              <button className="loginbtns">Ingresar</button>
            </div>
          </form>
          <span className="notRegYet">
            No estas registrado? <Link to="/register">Registrate aca</Link>{" "}
          </span>
          <br />
          <ThirdPartyBtns type="login" />
        </div>
      </div>
  )
}

export default LoginForm