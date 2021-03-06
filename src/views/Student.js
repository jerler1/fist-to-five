import React, { useState, useEffect } from "react";
import StudentActivityCard from "../components/StudentActivityCard";
import api from "../api";

export default function Student() {
  const [activities, setActivities] = React.useState([]);

  useEffect(() => {
    loadActivities();
  }, []);

  function loadActivities() {
    console.log("Getting Activities");
    api
      .getActivities()
      .then((res) => {
        setActivities(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function ratingOnClick(e) {
    console.log(e.target);
  }

  return (
    <div>
      <article>
        <div className="message-header">
          <p>STUDENT VIEW</p>
        </div>
        <div className="message-body">
          <div className="columns">
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Sunday</p>
                </div>
              </article>

              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "SUNDAY"){
                return (<StudentActivityCard info={activity} onRatingClick={ratingOnClick}/>);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Monday</p>
                </div>
              </article>              
              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "MONDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Tuesday</p>
                </div>
              </article>
              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "TUESDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Wednesday</p>
                </div>
              </article>              
              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "WEDNESDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Thursday</p>
                </div>
              </article>              
              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "THURSDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Friday</p>
                </div>
              </article>

              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "FRIDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
            <div className="column">
              <article className="message is-info">
                <div className="message-header">
                  <p>Saturday</p>
                </div>
              </article>              
              {activities?.map((activity) => {
                if(activity.weekday?.toString() === "SATURDAY"){
                return (<StudentActivityCard info={activity} />);
              }
              return null; 
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
