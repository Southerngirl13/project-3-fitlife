import React from "react";
import "./Herodash.css";

const Herodash = props => (
  <div className="herodash text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Herodash;
