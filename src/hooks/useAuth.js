import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import config from "../config/config.js";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [fetching, setFetching] = useState(false)
    const { user, loading, dispatch } = useContext(AuthContext);
    const [authStatus, setAuthStatus] = useState(false)
    const navigate = useNavigate();

    const fetchAuth = async () => {
        setFetching(true);
        try {
          dispatch({ type: "LOGIN_START" });
          const response = await axios.get(
            `${config.url}/api/auth/checkauth`
          );
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data.payload });
          setAuthStatus(true)
          setFetching(false);
          return;
        } catch (error) {
          dispatch({ type: "LOGIN_FAILURE", payload: error.message });
          setFetching(false);
          setAuthStatus(false)
          navigate("/error", { state: { error: "No iniciaste sesion" } });
          return;
        }
      };

      useEffect(()=> {
        fetchAuth()
      }, [])

      return {authStatus, fetching}
}


export default useAuth
