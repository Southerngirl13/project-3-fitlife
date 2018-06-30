import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
   <img class="logo" src={logo} alt={"logo"} style={{ height: 90, flex: 1, width: null  }}/> 
      {/* Fit Life */}
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
            window.location.pathname === "/shop"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/signin"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/signup"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/signup" className="nav-link">
            Register
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/kjs"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/kjs" className="nav-link">
          Practice - KJS
          </Link>
        </li>

        {/*  What about this?  How do we add the glyphs?
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>    
*/}

      </ul>
    </div>
  </nav>
);

export default Navbar;
