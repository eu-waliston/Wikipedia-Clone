import React from "react";
import "./User.scss";

import { useForm } from "react-hook-form";

const Recover = () => {
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
    <div className="Recover__Component">
      <div className="logo--cp">
        <img
          src="./Images/Wikipedia_affiliative_mark.png"
          alt="wikipedia logo"
          className="img-logo"
        />
      </div>
      <div className="form--cp">
        <h1>Digite abaixo o seu E-mail</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("exampleRequired", { required: true })}
            className="input"
            placeholder="Email"
            type="email"
          />

          {errors.exampleRequired && <p>Este campo é obrigatório</p>}

          <button className="btn" type="submit" to={"/"}>
            ENVIar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recover;
