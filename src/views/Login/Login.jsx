import React from "react";
import "./Login.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

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
      <div className="loginWrapper">
        <h3>Login</h3>
        <form
          className="loginForm"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="password" />
            </div>
          </div>
          <button>Login</button>
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
