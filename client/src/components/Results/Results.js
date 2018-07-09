import React from "react";

const Results = props => 
    (
        <div>
            <div className="panel-heading">Results</div>
            <ul className="list-group search-results">
                    <li className="list-group-item">
                        <h3>Title:{props.Title} </h3>
                        <h3>Date: {props.Date}</h3>
                        <h3>URL: {props.URL}</h3>
                        <button className="save-btn">SAVE</button>
                    </li>
            </ul>
        </div>
    )
export default Results;