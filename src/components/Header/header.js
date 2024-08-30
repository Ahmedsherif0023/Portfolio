import React from "react";
import { Link, NavLink } from "react-router-dom";
const Haeder = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1 className="xxx">SHEFO</h1>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/aboutShefo">
              About
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/myBlog">
              My Blog
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              Contact
            </NavLink>
          </li>

          
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1 className="xxx">SHEFO</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <ul>
          <li className="main-list">
            <NavLink className="main-link x" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/aboutShefo">
              About
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/services">
              Services
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/myBlog">
              My Blog
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link x" to="/contact">
              Contact
            </NavLink>
          </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Haeder;
