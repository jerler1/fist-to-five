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
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);

  const onSubmit = async (data) => {
    try {
      console.log("Hitting submit.");
      console.log(data);
      reset();
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleCreateAccountButtonClick = () => {
    console.log("Changing to new form!");
    setIsCreateAccountActive(!isCreateAccountActive);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        {isCreateAccountActive ? (
          <div className="createAccountForm">
            <div className="accountSelection">
              <div className="field">
                <label className="label">Account Type</label>
                <div className="control">
                  <input
                    type="radio"
                    name="choice"
                    value="instructor"
                    checked={selectedRadioButton === "instructor"}
                    onClick={() => setSelectedRadioButton("instructor")}
                  />
                  Instructor
                </div>
                <div className="control">
                  <input
                    type="radio"
                    name="choice"
                    value="student"
                    checked={selectedRadioButton === "student"}
                    onClick={() => setSelectedRadioButton("student")}
                  />
                  Student
                </div>
              </div>
            </div>
            {selectedRadioButton === "instructor" ? (
              <form
                className="instructorForm"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
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
                <button onClick={handleCreateAccountButtonClick}>Login</button>
              </form>
            ) : (
              <form
                className="studentForm"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
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
                  <label className="label">Student Background</label>
                  <div className="control">
                    <input type="text" />
                  </div>
                </div>
                <button>Create your account</button>
                <button onClick={handleCreateAccountButtonClick}>
                  Back to Login
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="loginForm">
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
              <button onClick={handleCreateAccountButtonClick}>
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
