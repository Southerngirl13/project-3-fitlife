import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Fit Life
    </a>
    <ol class="breadcrumb">
      <li><a href="/">Home</a></li>
      {/* <li><a href="/">Private</a></li>
    <li><a href="/">Pictures</a></li>
    <li class="active">Vacation</li>         */}
    </ol>
    <a href="signin">Sign In</a>
    <a href="signup" >Sign Up</a>
  </nav>
);

export default Nav;
