import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./img/logoSmall.png" alt="Logo" />
        <h3>React Facts</h3>
      </div>
      <div className="navbar__projectname">
        <span>Project 1</span>
      </div>
    </nav>
  );
}
