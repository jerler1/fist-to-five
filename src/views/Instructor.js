import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumb from "../components/BreadCrumb";
import InstructorActivityCard from "../components/InstructorActivityCard";
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
  const [selectedWeekday, setSelectedWeekday] = React.useState('SUNDAY');
  const [activityAvg, setActivityAvg] = React.useState(0);
  const [formObject, setFormObject] = useState({})


  useEffect(() => {
    loadActivities();
  }, []);

// write function to calculate average 

  function loadActivities() {
    api
      .getActivities()
      .then((res) => {
        const filteredActivities = res.data
        filteredActivities.filter( (activity) => {
          let day = activity.weekday.toString()
          if (day !== selectedWeekday) {
            return false; 
          }
        return true; 
        })
        console.log(filteredActivities)
        setActivities(filteredActivities);
      })
      .catch((err) => console.log(err));
  }

  const updateWeekday = (weekDay) => {
    setSelectedWeekday(weekDay);
    // loadActivities()
  }

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

const updateActivity = (activity) => {
  const id = activity.id;
  // api.updateActivity(id).then(res => {
  //     if(res) {
  //        console.log(res)
  //        loadActivities()
  //     }
  // }).catch(err => {
  //     console.log(err)
  // });
}
  // // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  //   // When the form is submitted, use the API.createActivity method to save the book data

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.activityName && formObject.filePath && activityDescription) {
  //     api.createActivity({
  //       activityName: formObject.title,
  //       filePath: formObject.author,
  //       activityDescription: formObject.synopsis
  //     })
  //       .then(res => loadActivities())
  //       .catch(err => console.log(err));
  //   }
  // };

  return (
    <div>
      <article>
        <div class="message-header">
          <p>INSTRUCTOR VIEW</p>
        </div>
        <Typography variant="h4" color="primary" className={classes.title} >
          {`Lessons for ${selectedWeekday}`}
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
          <Breadcrumb selectAWeekday={() => updateWeekday(selectedWeekday)} />
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
              {activities.map((activity) => {
                return (<InstructorActivityCard info={activity} updateMe={() => updateActivity(activity)}  removeMe={() => removeActivity(activity)} />);
              })}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>IN PROGRESS</p>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>COMPLETED</p>
                </div>
              </article>{" "}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
