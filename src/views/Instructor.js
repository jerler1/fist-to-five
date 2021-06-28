import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumb from "../components/BreadCrumb";
import InstructorActivityCard from "../components/InstructorActivityCard";
import MultiSelectChips from "../components/MultiSelectChips";

import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import api from "../api";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginLeft: theme.spacing(35),
    marginTop: theme.spacing(13),
    marginBottom: "5em",
    width: "70%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      spacing: theme.spacing(2),
      marginLeft: "3.5em",
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
}));

export default function Instructor() {
  const classes = useStyles();

  const [activities, setActivities] = React.useState([]);
  const [ratings, setRatings] = React.useState([]);
  const [filteredActivities, setFilteredActivities] = React.useState([]);
  const [selectedWeekday, setSelectedWeekday] = React.useState([]);
  const [activityAvg, setActivityAvg] = React.useState(0);
  const [formObject, setFormObject] = useState({})
  const [showUpdateForm, setShowUpdateForm] = React.useState(false);
 
  const [weekdayList, setWeekdayList] = React.useState(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']);


  useEffect(() => {
    loadActivities();
    loadRatings();
  }, []);

  function loadActivities() {
    api
      .getActivities()
      .then((res) => {
        if(res.data){
          console.log(res.data)
          setActivities(res.data);
          setFilteredActivities(res.data);
        }
      })
      .catch((err) => console.log(err));
  }

  function loadRatings() {
    api
      .getRatings()
      .then((res) => {
        if(res.data){
          console.log(res.data)
          setRatings(res.data);
        }
      })
      .catch((err) => console.log(err));
  }

  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };

  const removeActivity = (activity) => {
    const id = activity.id;
    api.deleteActivity(id).then(res => {
        if(res) {
           loadActivities()
        }
    }).catch(err => {
        console.log(err)
    });
}

  return (
    <div>
      <article>
        <div class="message-header">
          <p>INSTRUCTOR VIEW</p>
        </div>
        <Typography variant="h4" color="primary" className={classes.title} >
          Lesson Dashboard
        </Typography>
        <div class="message-body">
          <nav>
            <Button
              class="button is-success"
              component={Link}
              to={"/createActivity"}
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Add New Activity
            </Button>
          </nav>
        </div>
        <div>
        <MultiSelectChips options={weekdayList} title="Select Weekday" selectedOption={selectedWeekday} onOptionChange={handleWeekdayChange} />
        </div>
        <div class="message-body">
          <div class="columns">
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>PLANNED</p>
                </div>
              </article>
              {/* <InstructorActivityCard /> */}
              {filteredActivities?.map((activity) => {
                if(activity.status?.toString() === "PLANNED" && activity.weekday?.toString() === selectedWeekday?.[0]){
                  return <InstructorActivityCard info={activity}  removeMe={() => removeActivity(activity)} />
                }
                return null;
              })}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>IN PROGRESS</p>
                </div>
              </article>              
              {filteredActivities?.map((activity) => {
                if(activity.status?.toString() === "INPROGRESS" && activity.weekday?.toString() === selectedWeekday?.[0]){
                  return <InstructorActivityCard info={activity} removeMe={() => removeActivity(activity)} />
                }
                return null;
              })}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>COMPLETED</p>
                </div>
              </article>            
              {filteredActivities?.map((activity) => {
                if(activity.status?.toString() === "COMPLETED" && activity.weekday?.toString() === selectedWeekday?.[0]){
                  return <InstructorActivityCard info={activity} removeMe={() => removeActivity(activity)} />
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
