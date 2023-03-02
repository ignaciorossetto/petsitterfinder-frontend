import React from "react";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/loginForm/LoginForm";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";

const Login = ({type}) => {
  return (
    <>
      <Navbar type={"l/r"} />
      <LoginForm type={type}/>
      <EmailSubs />
      <Footer />
    </>
  );
};

export default Login;
