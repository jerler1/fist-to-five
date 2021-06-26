import React from 'react';

export default function ActivityForm() {

  return (
<article class="message is-info">
  <div class="message-header">
    <p>Enter Activity Details</p>
  </div>
  <div class="message-body">
  <input class="input is-primary" type="text" placeholder="Activity Name"></input>
  <input class="input is-primary" type="text" placeholder="File Path"></input>
  <textarea class="textarea is-primary" placeholder="Description"></textarea>
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
  <button class="button is-success">Create Activity</button>
  <button class="button is-danger">Cancel</button>

  </div>
</article>
  );
}