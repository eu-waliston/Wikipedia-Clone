import React from "react";
import "./User.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));

  return (
    <div className="Login__Component">
      <div className="logo--cp">
        <img
          src="./Images/Wikipedia_affiliative_mark.png"
          alt="wikipedia logo"
          className="img-logo"
        />
      </div>
      <div className="form--cp">
        <h1>Olá Seja Ben-vindo(a)</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("example")}
            className="input"
            placeholder="Usuário"
          />

          <input
            {...register("exampleRequired", { required: true })}
            className="input"
            placeholder="Senha"
          />

          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <button className="btn" type="submit" to={"/"}>
            ENTRAR
          </button>
          <h5>ainda não é usuário ? <Link to={"/register"} >Cadastre-se</Link></h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
