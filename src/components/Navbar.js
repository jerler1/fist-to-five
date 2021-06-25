import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography id="title" variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            FIST TO FIVE
          </Typography>
          <nav>
            <Button id="pricing" component={Link} to={'/instructor'} variant="button" color="textPrimary" className={classes.link}>
              INSTRUCTOR VIEW
            </Button>
            <Button id="contact" component={Link} to={'/student'} variant="button" color="textPrimary" href="#" className={classes.link}>
              STUDENT VIEW
            </Button>
            <Button id="about" component={Link} to={'/login'} variant="button" color="textPrimary" href="#" className={classes.link}>
              LOGIN VIEW
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
  );
}