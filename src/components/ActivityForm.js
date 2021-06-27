
import { useForm } from "react-hook-form";
import api from "../api/index";
import React, { useState } from "react";
import MultiSelectChips from "../components/MultiSelectChips";

export default function ActivityForm() {

  const [selectedWeekday, setSelectedWeekday] = React.useState([]);
  const [selectedStatus, setSelectedStatus] = React.useState([]);
  const [weekdayList, setWeekdayList] = React.useState(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']);
  const [statusList, setStatusList] = React.useState(['PLANNED', 'IN PROGRESS', 'COMPLETED']);

  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const createActivity = async (data) => {
    console.log(data)
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
      <div className="field">
        <label className="label">Weekday:</label>
          <div className="control">
            <input
                type="text"
                {...register("weekday", { required: true })}
                className="input is-normal is-primary"
                />
                {errors.activityDescription && (
                  <span className="errorMessage">
                    Please enter a valid weekday.
                  </span>
                )}
          </div>
      </div>
      <div className="field">
        <label className="label">Status:</label>
          <div className="control">
            <input
                type="text"
                {...register("status", { required: true })}
                className="input is-normal is-primary"
                />
                {errors.activityDescription && (
                  <span className="errorMessage">
                    Please enter an activity status.
                  </span>
                )}
          </div>
      </div>
      <button class="button is-success" type="submit">Create Activity</button>
      {/* {props.activityName ? <button class="button is-success" onClick={handleCreateActivityButtonClick}>Update Activity</button> : <button class="button is-success" onClick={props.createMe}>Create Activity</button> } */}
    </form>
  </div>
</article>
  );
}