import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StudentActivityCard(props) {
  const classes = useStyles();

  const activity = props.info.id;
  console.log(activity);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.info.activityName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.info.filePath}
        </Typography>
        <Typography variant="body2" component="p">
          {props.info.activityDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update Rating</Button>
        <div className="field">
          <p className="control has-icons-left">
            <span className="select">
              <select>
                <option defaultValue>Rating</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </span>
          </p>
        </div>
      </CardActions>
    </Card>
  );
}
