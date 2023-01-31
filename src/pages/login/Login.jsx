import React from "react";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/loginForm/LoginForm";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";

const Login = () => {
  return (
    <>
      <Navbar type={"l/r"} />
      <LoginForm/>
      <EmailSubs />
      <Footer />
    </>
  );
};

export default Login;
