import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        justifyContent: "space-evenly",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "70%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    },
}))

export default function Instructor(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item align="center" style={{marginBottom: "1em"}} direction="column">
                    <Typography variant="h2" color="primary">Fist to Five</Typography>
                    <Typography variant="h5" color="secondary">Student View</Typography>
                    <Divider />
            </Grid>
        </Grid>
    )
}