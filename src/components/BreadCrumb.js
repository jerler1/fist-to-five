import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

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



export default function IconBreadcrumbs(props) {
  const classes = useStyles();
  console.log(props)
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
      <Link color="textPrimary" onClick={() => props.selectAWeekday()} className={classes.icon}>
        Sunday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday()} className={classes.icon}>
        Monday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday()} className={classes.icon}>
        Tuesday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("WEDNESDAY")} className={classes.icon}>
        Wednesday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("THURSDAY")} className={classes.icon}>
        Thursday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("FRIDAY")} className={classes.icon}>
        Friday
      </Link>
      <Link color="textPrimary" onClick={() => props.selectAWeekday("SATURDAY")} className={classes.icon}>
        Saturday
      </Link>

    </Breadcrumbs>
  );
}
