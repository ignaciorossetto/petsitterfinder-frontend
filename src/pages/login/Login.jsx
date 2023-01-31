import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";

const Login = () => {
  return (
    <>
      <Navbar type={"l/r"} />
      <div className="loginView">
        <div className="loginContainer">
            <h1>Bienvenido!</h1>
          <form className="loginForm">
            <div>
              <label className="formText">Usuario</label>
              <input
                type="text"
                id="username"
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
          </form>
          <div className="formBtns">
            <button className="loginbtns">Ingresar</button>
            <button className="loginbtns">Registrate</button>
          </div>
          <span className="otherLoginSpan">  </span>
          <div className="tploginContainer">
            <FontAwesomeIcon className="tploginContainerIcon" icon={faGoogle}/>
            <span>Ingresa con Google</span>
          </div>
          <div className="tploginContainer">
            <FontAwesomeIcon className="tploginContainerIcon" icon={faFacebook}/>
            <span>Ingresa con Facebook</span>
          </div>
        </div>
      </div>
      <EmailSubs/>
      <Footer/>
    </>
  );
};

export default Login;
