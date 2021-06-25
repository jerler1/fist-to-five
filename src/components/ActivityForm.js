import React from 'react';
import "bulma/css/bulma.min.css";


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
  <button class="button is-success">Create Activity</button>
  <button class="button is-danger">Cancel</button>

  </div>
</article>
  );
}