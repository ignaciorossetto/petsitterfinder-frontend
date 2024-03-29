import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountManager from "../../components/accountManager/AccountManager";
import EmailSubs from "../../components/emailSubs/EmailSubs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth.js";

const Account = () => {
  const {authStatus, fetching}  = useAuth()

  return (
    <>
      <Navbar />
      {authStatus && 
      <AccountManager/>
      }
      <EmailSubs />
      <Footer />
    </>
  );
};

export default Account;
