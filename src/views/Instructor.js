import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import StudentActivityCard from "../components/StudentActivityCard";
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
}));

export default function Instructor() {
  const classes = useStyles();

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
          <p>INSTRUCTOR VIEW</p>
        </div>
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
                return <InstructorActivityCard info={activity} />;
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
