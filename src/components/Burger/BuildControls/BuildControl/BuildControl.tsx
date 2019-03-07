import React, { Component } from "react";
import "./BuildControl.css";

interface BuildControlProps {
  label: string;
  added: () => void
}

const BuildControl: React.SFC<BuildControlProps> = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less">Less</button>
      <button className="More" onClick={props.added}>More</button>
    </div>
  );
};

export default BuildControl;
