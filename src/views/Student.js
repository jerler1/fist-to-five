import React, { useState, useEffect } from "react";
import StudentActivityCard from "../components/StudentActivityCard";
import api from "../api";


export default function Student() {

  const [activities, setActivities] = React.useState([]);
  useEffect(() => {
    loadActivities();
  }, []);
  function loadActivities() {
    api
      .getActivities()
      .then((res) => {
        setActivities(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <article>
        <div class="message-header">
          <p>STUDENT VIEW</p>
        </div>
        <div class="message-body">
          <div class="columns">
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Sunday</p>
                </div>
              </article>
              {activities.map((activity) => {
                return (<StudentActivityCard info={activity} />);
              })}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Monday</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Tuesday</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Wednesday</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Thursday</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Friday</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>Saturday</p>
                </div>
              </article>{" "}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
