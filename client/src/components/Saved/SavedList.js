import React from "react";

export const ListItem = props => (
  <li className="panel-body">
    {props.children}
    <div class="panel-footer">{props.children}</div>
  </li>
);
