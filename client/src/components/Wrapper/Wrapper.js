import React from "react";


const Wrapper = props => (
  <div className={`wrapper${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default Wrapper;