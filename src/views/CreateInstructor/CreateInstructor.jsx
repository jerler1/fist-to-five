import React, { useState } from "react";
// import "../Login/Login.scss";
import { useForm } from "react-hook-form";
import api from "../../api/index";

const CreateInstructor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const createInstructor = async (data) => {
    try {
      console.log("This is the instructor data: ", data);
      api.createInstructor(data).then((data) => {
        console.log("This is post axios", data);
      });
      reset();
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="instructorForm">
      <form
        className="instructorForm"
        onSubmit={handleSubmit(createInstructor)}
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
              {...register("lastName", { required: true })}
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
            {errors.className && (
              <span className="errorMessage">
                Please enter a valid class name.
              </span>
            )}
          </div>
        </div>
        <button
          className="button is-fullwidth is-info instructorButton"
          type="submit"
        >
          Create your instructor account
        </button>
      </form>
    </div>
  );
};

export default CreateInstructor;
