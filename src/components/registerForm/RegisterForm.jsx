import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ThirdPartyBtns from "../thirdPartyBtns/ThirdPartyBtns";
import "./registerForm.css";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../config/config.js";
import AddressGoogleMapInput from "../addressGoogleMapInput/AddressGoogleMapInput";
import { useLoadScript } from "@react-google-maps/api";
const libr = ['places']



const RegisterForm = ({type}) => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: libr,
    mapId:'a97afa9e56a87dc9'
})
  const {
    register,
    formState,
    reset,
    setError,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState();
  const [address, setAddress] = useState()

  const onSubmit = async (event, preventDefault_) => {
    const url = type === 'sitter' ? `${config.url}/api/auth/sitter-register` : `${config.url}/api/auth/register`
    try {
      console.log(event)
      event.fullAddress = {...address}
      console.log(event)
      await axios.post(url, event);
      setSubmittedData(event);
      reset(event);
      navigate(type === 'sitter' ? '/login-sitter' : '/login')
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Registered successfully'
      })
    } catch (error) {
      const errors = error.response.data
      errors.email = ' '
      if (errors.email) {
        setError('email', {
          type: "server",
          message: errors.error,
        });
      }
    }
  };

  const checkEmail = () => {
    const email = watch("email");
    const confirmEmail = watch("confirmEmail");
    return email === confirmEmail;
  };
  const checkPswd = () => {
    const password = watch("password");
    const confirmPswd = watch("confirmPswd");
    return password === confirmPswd;
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ something: "" });
    }
  }, [formState, submittedData, reset]);

  return (
    <div className="registerView">
      <div className="registerContainer">
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          {type==='sitter' ? <h1>Sitter Sign Up</h1>: <h1>Sign Up</h1>}
          <div>
          
            <label className="rFormText">Nombre completo</label>
            <input
              {...register("username", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              type="text"
              name="username"
              className="rFormInput "
              placeholder="Ejemplo: Juan Perez"
            />
          </div>
          {errors.username?.type === "required" && (
            <p style={{ color: "red" }}>Debe ingresar nombre y apellido</p>
          )}
          {errors.username?.type === "minLength" && (
            <p style={{ color: "red" }}>Debe ingresar un usuario</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p style={{ color: "red" }}>Campo muy largo</p>
          )}
          <div>
            <label className="rFormText">Contraseña</label>
            <input
              {...register("password", {
                required: true,
                minLength: 7,
              })}
              type="password"
              name="password"
              className="rFormInput "
            />
          </div>
          {errors.password?.type === "minLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Las contrasenas deben contener al menos 7 caracteres
            </p>
          )}

          <div>
            <label className="rFormText">Confirmar contraseña</label>
            <input
              {...register("confirmPswd", {
                required: true,
                minLength: 7,
                validate: checkPswd,
              })}
              type="password"
              name="confirmPswd"
              className="rFormInput "
            />
          </div>
          {errors.confirmPswd?.type === "validate" && (
            <p style={{ color: "red" }}> Las contrasenas deben coincidir</p>
          )}
          {errors.confirmPswd?.type === "minLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Las contrasenas deben contener al menos 7 caracteres
            </p>
          )}
          <div>
          <label className="rFormText">Domicilio</label>
          {
            isLoaded &&
            <AddressGoogleMapInput 
            setAddress={setAddress}
            register={register}
            errors={errors}
            />
          }
          </div>
          <div>
            <label className="rFormText">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              type="email"
              name="email"
              className="rFormInput "
              placeholder="Ejemplo: juanperez@hotmail.com"
            />
          </div>
          {errors.email && (
            <p style={{ color: "red" }}> {errors.email.message}</p>
          )  }
          <div>
            <label className="rFormText">Confirmar Email</label>
            <input
              {...register("confirmEmail", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                validate: checkEmail,
              })}
              type="email"
              name="confirmEmail"
              className="rFormInput "
            />
          </div>
          {errors.confirmEmail?.type === "validate" && (
            <p style={{ color: "red" }}> Los correos deben coincidir</p>
          )}
          {errors.confirmEmail?.type === "pattern" && (
            <p style={{ color: "red" }}> Debe ser un email valido</p>
          )}
          {errors.confirmEmail?.type === "required" && (
            <p style={{ color: "red" }}> Es obligatorio confirmar el mail</p>
          )}
          <div className="regCheckbox">
            <input
              {...register("termsCheckBock", {
                required: true,
              })}
              type="checkbox"
              name="termsCheckBock"
              className="rFormInput  "
            />
            <label className="rFormText regCheckboxTxt">
              Declaro haber leido los terminos y condiciones de petSitterFinder
            </label>
          </div>
          {errors.termsCheckBock?.type === "required" && (
            <p style={{ color: "red" }}>
              Para registrarte debes aceptar terminos y condiciones!
            </p>
          )}

          <div className="regCheckbox">
            <input
              {...register("newsCheckBox")}
              type="checkbox"
              name="newsCheckBox"
              className="rFormInput  "
            />
            <label className="rFormText regCheckboxTxt">
              Quiero recibir noticias y actualizaciones por email
            </label>
          </div>
          <div>
            <input
              type="submit"
              className="rFormInput rSubBtn"
              value="Crear usuario"
            />
          </div>
        </form>
        <div className="tpCont">
          <ThirdPartyBtns />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
