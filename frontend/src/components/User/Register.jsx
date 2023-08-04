import React from "react";
import "./User.scss";

import { useForm } from "react-hook-form";

const Register = () => {
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
    <div className="Register__Component">
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

          <input
            {...register("example")}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <input {...register("example")} type="date" className="input" />

          <button className="btn" type="submit" to={"/"}>
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
