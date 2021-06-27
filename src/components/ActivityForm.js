
import { useForm } from "react-hook-form";
import api from "../api/index";
import React, { useState } from "react";

export default function ActivityForm() {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const createActivity = async (data) => {
    try {
      console.log("This is the activity data: ", data);
      api.createActivity(data).then((data) => {
        console.log("This is post axios", data);
      });
      reset();
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
<article class="message is-info">
  <div class="message-header">
    <p>Enter Activity Details</p>
  </div>
  {/* {isCreateAccountActive ? ( */}
  <div class="message-body">
    <form className="instructorForm" onSubmit={handleSubmit(createActivity)} noValidate>
      <div className="field">
        <label className="label">Activity Name:</label>
          <div className="control">
            <input
                type="text"
                {...register("activityName", { required: true })}
                className="input is-normal is-primary"
                />
                {errors.activityName && (
                  <span className="errorMessage">
                    Please enter a valid activity name.
                  </span>
                )}
          </div>
      </div>
      <div className="field">
        <label className="label">File Path:</label>
          <div className="control">
            <input
                type="text"
                {...register("filePath", { required: true })}
                className="input is-normal is-primary"
                />
                {errors.filePath && (
                  <span className="errorMessage">
                    Please enter a valid file path.
                  </span>
                )}
          </div>
      </div>
      <div className="field">
        <label className="label">Activity Description:</label>
          <div className="control">
            <input
                type="text"
                {...register("activityDescription", { required: true })}
                className="input is-normal is-primary"
                />
                {errors.activityDescription && (
                  <span className="errorMessage">
                    Please enter a valid activity description.
                  </span>
                )}
          </div>
      </div>
      <p class="control has-icons-left">
        <span class="select">
          <select>
            <option selected>Assign Day of the Week</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
      </p>
      <div class="field">
        <p class="control has-icons-left">
          <span class="select">
            <select>
              <option selected>Set Status</option>
              <option>Planned</option>
              <option>In Progress</option>
              <option>Complete</option>
            </select>
          </span>
          <span class="icon is-small is-left">
            <i class="fas fa-globe"></i>
          </span>
        </p>
      </div>
      <button class="button is-success" type="submit">Create Activity</button>
      {/* {props.activityName ? <button class="button is-success" onClick={handleCreateActivityButtonClick}>Update Activity</button> : <button class="button is-success" onClick={props.createMe}>Create Activity</button> } */}
    </form>
  </div>
</article>
  );
}