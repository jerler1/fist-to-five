import { useForm } from "react-hook-form";
import api from "../api/index";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ActivityForm(props) {
  const { activityDescription, activityName, filePath, status, weekday, id } =
    props.activityInfo.info;

  const [formName, setFormName] = useState("");
  const [formValues, setFormValues] = useState({
    id: "",
    activityDescription: "",
    activityName: "",
    filePath: "",
    status: "",
    weekday: "",
  });

  let history = useHistory();

  // const onChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log("hi this is onchange")
  //   setFormValues({...formValues, [name]: value})
  // };

  useEffect(() => {
    setFormValues({
      id,
      activityDescription,
      activityName,
      filePath,
      status,
      weekday,
    });
  }, [id, activityDescription, activityName, filePath, status, weekday]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const updatingActivity = async (data) => {
    const newData = { ...data, id };
    try {
      console.log("This is the activity data: ", newData);
      api.updateActivity(id, newData).then((data) => {
        console.log("This is update axios", data);
      });
      reset();
      history.push("/instructor")
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <article class="message is-info">
      <div class="message-header">
        <p>Enter Activity Details</p>
      </div>
      <div class="message-body">
        <form
          className="instructorForm"
          onSubmit={handleSubmit(updatingActivity)}
          noValidate
        >
          <div className="field">
            <label className="label">Activity Name:</label>
            <div className="control">
              <input
                defaultValue={formValues.activityName}
                type="text"
                {...register("activityName", { required: true })}
                className="input is-normal is-primary"
                // onChange={onChange}
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
                defaultValue={formValues.filePath}
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
                defaultValue={formValues.activityDescription}
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
                defaultValue={formValues.weekday}
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
                defaultValue={formValues.status}
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
          <button class="button is-success" type="submit">
            {activityName ? "Update Activity" : "Create Activity"}
          </button>
        </form>
      </div>
    </article>
  );
}
