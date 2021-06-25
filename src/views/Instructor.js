import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import StudentActivityCard from "../components/StudentActivityCard";
import InstructorActivityCard from '../components/InstructorActivityCard';
import "bulma/css/bulma.min.css";

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

  return (
    <div>
      <article>
        <div class="message-header">
          <p>INSTRUCTOR VIEW</p>
        </div>
        <div class="message-body">
          <div class="columns">
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>PLANNED</p>
                </div>
                <div class="message-body">
                  <button class="button is-success">Add New Activity</button>
                </div>
              </article>
              <InstructorActivityCard />
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>IN PROGRESS</p>
                </div>
                <div class="message-body">
                  <button class="button is-success">Add New Activity</button>
                </div>
              </article>{" "}
            </div>
            <div class="column">
              <article class="message is-info">
                <div class="message-header">
                  <p>COMPLETED</p>
                </div>
                <div class="message-body">
                  <button class="button is-success">Add New Activity</button>
                </div>
              </article>{" "}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
