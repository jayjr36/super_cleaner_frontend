// src/components/Sidebar.js
//import PropTypes from 'prop-types';
import "../styles/Sidebar.css";
import React from "react";

const Sidebar = ({ onSelectPage }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <button onClick={() => onSelectPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => onSelectPage("about")}>About</button>
        </li>
        <li>
          <button onClick={() => onSelectPage("services")}>Services</button>
        </li>
        <li>
          <button onClick={() => onSelectPage("contact")}>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
