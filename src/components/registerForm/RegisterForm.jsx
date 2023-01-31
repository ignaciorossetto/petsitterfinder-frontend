import React from "react";
import { useForm } from "react-hook-form";
import ThirdPartyBtns from "../thirdPartyBtns/ThirdPartyBtns";
import "./registerForm.css";

const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
      } = useForm({ });

  const onSubmit = (event, preventDefault_) => {
    console.log(event);
  };

  const checkEmail = () => {
    const email = watch('email')
    const confirmEmail = watch('confirmEmail')
    return email === confirmEmail
  }
  const checkPswd = () => {
    const password = watch('password')
    const confirmPswd = watch('confirmPswd')
    return password === confirmPswd
  }

  return (
    <div className="registerView">
      <div className="registerContainer">
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
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
                minLength: 7
              })} 
            type="password" name="password" className="rFormInput " />
          </div>
          {errors.password?.type === 'minLength' && <p style={{color: 'red'}}> Las contrasenas deben contener al menos 7 caracteres</p>}

          <div>
            <label className="rFormText">Confirmar contraseña</label>
            <input
            {...register("confirmPswd", {
                required: true,
                validate: checkPswd
              })}
             type="password" name="confirmPswd" className="rFormInput " />
          </div>
          {errors.confirmPswd?.type === 'validate' && <p style={{color: 'red'}}> Las contrasenas deben coincidir</p>}
          {errors.confirmPswd?.type === 'minLength' && <p style={{color: 'red'}}> Las contrasenas deben contener al menos 7 caracteres</p>}

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
          <div>
            <label className="rFormText">Confirmar Email</label>
            <input
              {...register("confirmEmail", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                validate: checkEmail
              })}
              type="email"
              name="confirmEmail"
              className="rFormInput "
            />
          </div>
          {errors.confirmEmail?.type === 'validate' && <p style={{color: 'red'}}> Los correos deben coincidir</p>}
        {errors.confirmEmail?.type === 'required' && <p style={{color: 'red'}}> Es obligatorio confirmar el mail</p>}
          <div className="regCheckbox">
            <input
            {...register("termsCheckBock", {
                required: true,
              })}
             type="checkbox" name="termsCheckBock" className="rFormInput  " />
            <label className="rFormText regCheckboxTxt">Declaro haber leido los terminos y condiciones de petSitterFinder</label>
          </div>
            {errors.termsCheckBock?.type === 'required' && <p style={{color: 'red'}}>Para registrarte debes aceptar terminos y condiciones!</p>}

          <div className="regCheckbox">
            <input
            {...register("newsCheckBox")}
             type="checkbox" name="newsCheckBox" className="rFormInput  " />
            <label className="rFormText regCheckboxTxt">Quiero recibir noticias y actualizaciones por email</label>
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
