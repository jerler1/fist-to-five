import React from "react";
import "./Login.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

import React from 'react';

const Login = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Hitting submit.");
      console.log(data);
      reset();
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="loginContainer">
      
    </div>
  );
};

export default Login;
