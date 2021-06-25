import React, { useState } from "react";
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

  const [isCreateAccountActive, setIsCreateAccountActive] = useState(false);

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
        <form>
          <h3>What type of account are you making?</h3>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="radio" name="instructor" />
              Instructor
            </div>
            <div className="control">
              <input type="radio" name="instructor" />
              Student
            </div>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Class Name</label>
            <div className="control">
              <input type="text" />
            </div>
          </div>
          <button>Create your account</button>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
