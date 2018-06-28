import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

/* This is code that was original to 20.11 Book App or Project 3 Front End Boilerplate */

/*const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <a className="navbar-brand" href="/">
      React Reading List
    </a>
  </nav>
);
*/

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Fit Life
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>

         <li
          className={
            window.location.pathname === "/SignIn-Register"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Sign-In/Register
          </Link>
        </li>

         <li
          className={
            window.location.pathname === "/Contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default Nav;
