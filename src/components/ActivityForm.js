import React from 'react';
import "bulma/css/bulma.min.css";


export default function ActivityForm(props) {

  return (
<article class="message is-info">
  <div class="message-header">
    <p>Enter Activity Details</p>
  </div>
  <div class="message-body">
  <input class="input is-primary" type="text" placeholder="Activity Name" value={props.activityName}></input>
  <input class="input is-primary" type="text" placeholder="File Path" value={props.filePath}></input>
  <textarea class="textarea is-primary" placeholder="Description" value={props.activityDescription}></textarea>
  <div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Assign Day of the Week</option>
        <option>Sunday</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Set Status</option>
        <option>Planned</option>
        <option>In Progress</option>
        <option>Complete</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
{props.activityName ? <button class="button is-success" onClick={props.updateMe}>Update Activity</button> : <button class="button is-success" onClick={props.createMe}>Create Activity</button> }
  
  {/* <button class="button is-danger">Cancel</button> */}

  </div>
</article>
  );
}