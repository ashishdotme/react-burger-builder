import React from "react";

interface BackdropProps {
  clicked: () => void;
  show: boolean;
}
const Backdrop: React.SFC<BackdropProps> = props => {
  return (
    <div>
      {props.show ? (
        <div className="Backdrop" onClick={props.clicked}>
          s
        </div>
      ) : null}
    </div>
  );
};

export default Backdrop;
