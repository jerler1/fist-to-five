import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  bread: {
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs(props) {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Sunday")} className={classes.icon}>
        Sunday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Monday")} className={classes.icon}>
        Monday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Tuesday")} className={classes.icon}>
        Tuesday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Wednesday")} className={classes.icon}>
        Wednesday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Thursday")} className={classes.icon}>
        Thursday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Friday")} className={classes.icon}>
        Friday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("Saturday")} className={classes.icon}>
        Saturday
      </Link>

    </Breadcrumbs>
  );
}
