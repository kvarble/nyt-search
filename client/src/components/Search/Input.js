import React from "react";

export const Input = props => (
  <div className="form-group">
    <label htmlFor="topic">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="topic"
      type="text"
      placeholder="Search by topic"
      id="topic"
    />

    <label htmlFor="beginningYear">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="beginning-year"
      type="text"
      placeholder="beginning-year"
      id="beginning-year"
    />

    <label htmlFor="endingYear">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="ending-year"
      type="text"
      placeholder="ending-year"
      id="ending-year"
    />
  </div>
);
