import React from "react";

export default function Content() {
  return (
    <div className="content">
      <h1>Fun facts about React</h1>

      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprises apps, including mobile apps</li>
      </ul>
      <div className="content__backimage">
        <img src="./img/reacthalflogo.png" alt="big logo of react" />
      </div>
    </div>
  );
}
