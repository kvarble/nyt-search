import React from "react";
import "./SearchForm.css";


const SearchForm = props =>( 

  
  <form className="search">
  <div className="form-group">
    <label htmlFor="topic">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="topic"
      type="text"
      placeholder="Search by topic"
      id="topic"
      {...props}
    />

    <label htmlFor="start">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="start"
      type="text"
      placeholder="start"
      id="start"
      {...props}

    />

    <label htmlFor="end">Search:</label>
    <input className="form-control"
      onChange={props.handleInputChange}
      value={props.value}
      name="end"
      type="text"
      placeholder="end"
      id="end"
      {...props}

    />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>

  </div>
  </form>
)
;

export default SearchForm;