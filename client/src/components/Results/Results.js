import React from "react";

export const Results = ({ props }) => {
    return (
        <div>
            <div className="panel-heading">Results</div>
            <ul className="list-group">
            </ul>
            <li className="list-group-item">
                <h3>Title: {props.Title}</h3>
                <h3>Date: {props.Date}</h3>
                <h3>URL: {props.URL}</h3>
                <button className="save-btn">SAVE</button>
                </li>
        </div>
    )
}