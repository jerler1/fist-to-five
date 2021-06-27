import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import ActivityForm from "../components/ActivityForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InstructorActivityCard(props) {
  const classes = useStyles();

  const [editFormActive, setEditFormActive] = React.useState(false);


  const bull = <span className={classes.bullet}>•</span>;
  const activity = props.info.id;

  return (
    <Card className={classes.root}>
  {editFormActive ? <ActivityForm /> : 
        <CardContent>
            <Typography variant="h5" component="h2">
              Activity: {props.info.activityName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              File Path: {props.info.filePath}
            </Typography>
            <Typography variant="body2" component="p">
              Description: {props.info.activityDescription}
            </Typography>
            <Typography variant="body2" component="p">
              Weekday: {props.info.weekday}
            </Typography>
        </CardContent>}
      <CardActions>
        <Button size="small" onClick={props.updateMe} >Update</Button>
        <Button size="small" onClick={props.removeMe} >Delete</Button>
        <div class="field">
          <p class="control has-icons-left"></p>
        </div>
      </CardActions>
    </Card>
  );
}