import React from "react";
import "../styles/TopBar.css";

const TopBar = ({ onSelectPage }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="brand-name">Super Cleaner</h1>
      </div>
      <div className="topbar-right">
        <ul className="nav-links">
          <li>
            <a onClick={() => onSelectPage("home")} href="#a">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => onSelectPage("about")} href="#a">
              About
            </a>
          </li>
          <li>
            <a onClick={() => onSelectPage("services")} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => onSelectPage("contact")} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
