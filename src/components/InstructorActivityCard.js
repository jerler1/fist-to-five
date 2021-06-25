import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function InstructorActivityCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          spring-security-tutorial
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Module 4, Day 3, Activity 2
        </Typography>
        <Typography variant="body2" component="p">
        This tutorial shows you how to control access to a Spring Boot web service using 
        Spring Security authentication and role based access control (authorization). You will need: MySQL, MySQL Workbench, 
        Spring Initializr (start.spring.io), and IntelliJ IDEA Community Edition
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
        <div class="field">
  <p class="control has-icons-left">
  </p>
</div>
      </CardActions>
    </Card>
  );
}