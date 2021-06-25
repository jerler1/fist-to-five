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
  const [isCreateInstructorActive, setIsCreateInstructorActive] =
    useState(true);

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
    setIsCreateAccountActive(!isCreateAccountActive);
  };

  const formSelectionOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        {isCreateAccountActive ? (
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
        ) : (
          <div className="createAccountForm">
            <div className="accountSelection">
              <div className="field" onChange={formSelectionOnChange}>
                <label className="label">Account Type</label>
                <div className="control">
                  <input type="radio" name="instructor" value="instructor" />
                  Instructor
                </div>
                <div className="control">
                  <input type="radio" name="student" value="student" />
                  Student
                </div>
              </div>
            </div>
            {isCreateInstructorActive ? (
              <form className="instructorForm">
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
            ) : (
              <form className="studentForm">
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
                <button>Login</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
