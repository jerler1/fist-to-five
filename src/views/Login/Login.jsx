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

  const handleCreateAccountButtonClick = (event) => {
    event.preventDefault();
    console.log("Changing to new form!");
    reset();
    setIsCreateAccountActive(!isCreateAccountActive);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        {isCreateAccountActive ? (
          <div className="createAccountForm">
            <div className="accountSelection">
              <div className="field accountTypeSelection">
                <h3>Account Type</h3>
                <div className="radioButtonsWrapper">
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="choice"
                        value="instructor"
                        checked={selectedRadioButton === "instructor"}
                        onChange={() => setSelectedRadioButton("instructor")}
                      />
                      Instructor
                    </label>
                  </div>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        name="choice"
                        value="student"
                        checked={selectedRadioButton === "student"}
                        onChange={() => setSelectedRadioButton("student")}
                      />
                      Student
                    </label>
                  </div>
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
                  <label className="label">First Name:</label>
                  <div className="control">
                    <input
                      type="text"
                      {...register("firstName", { required: true })}
                      className="input is-normal is-primary"
                    />
                    {errors.firstName && (
                      <span className="errorMessage">
                        Please enter a valid first name.
                      </span>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last Name:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-normal is-primary"
                      {...register("firstName", { required: true })}
                    />
                    {errors.lastName && (
                      <span className="errorMessage">
                        Please enter a valid last name.
                      </span>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Class Name:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-normal is-primary"
                      {...register("className", { required: true })}
                    />
                    {errors.lastName && (
                      <span className="errorMessage">
                        Please enter a valid class name.
                      </span>
                    )}
                  </div>
                </div>
                <button className="button is-fullwidth is-info" type="submit">
                  Create your account
                </button>
                <button
                  className="button is-fullwidth is-danger is-light"
                  onClick={handleCreateAccountButtonClick}
                >
                  Back To Login
                </button>
              </form>
            ) : (
              <form
                className="studentForm"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="field">
                  <label className="label">First Name:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-normal is-primary"
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && (
                      <span className="errorMessage">
                        Please enter a valid first name.
                      </span>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last Name:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-normal is-primary"
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && (
                      <span className="errorMessage">
                        Please enter a valid class name.
                      </span>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Student Background:</label>
                  <div className="control">
                    <textarea
                      type="text"
                      className="textarea is-normal is-primary"
                      {...register("studentBackground", { required: true })}
                    />
                    {errors.studentBackground && (
                      <span className="errorMessage">
                        Please enter a student background.
                      </span>
                    )}
                  </div>
                </div>
                <button className="button is-fullwidth is-info" type="submit">
                  Create your account
                </button>
                <button
                  className="button is-fullwidth is-danger is-light"
                  onClick={handleCreateAccountButtonClick}
                >
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
                <label className="label">Username:</label>
                <div className="control">
                  <input
                    type="text"
                    className="input is-normal is-primary"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="errorMessage">
                      Please enter a valid username.
                    </span>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password:</label>
                <div className="control">
                  <input
                    type="password"
                    className="input is-normal is-primary"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="errorMessage">
                      Please enter a valid password.
                    </span>
                  )}
                </div>
              </div>
              <button className="button is-fullwidth is-info" type="submit">
                Login
              </button>
              <button
                className="button is-fullwidth is-danger is-light"
                onClick={handleCreateAccountButtonClick}
              >
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
