import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './register.css'

const Register = () => {
  return (
    <>
    <Navbar type='l/r'/>
    <div className="registerView">
        <div className="registerContainer">
            <form className="registerForm">
                <h1>Sign Up</h1>
                <div>
                <label className="rFormText">Usuario</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
                <div>
                <label className="rFormText">Contraseña</label>
                <input
                    type="password"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
                <div>
                <label className="rFormText">Confirmar contraseña</label>
                <input
                    type="password"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
                <div>
                <label className="rFormText">Email</label>
                <input
                    type="email"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
                <div>
                <label className="rFormText">Confirmar Email</label>
                <input
                    type="email"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
                <div>
                <label className="rFormText">Fecha de nacimiento</label>
                <input
                    type="date"
                    id="username"
                    name="username"
                    className="rFormInput "
                />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register