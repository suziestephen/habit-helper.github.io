import React from "react";

function GratitudeDisplay(props) {
  return (
    <div>
      <div className="display-container">
        <div className="title">
          Grateful For: {props.gratefulFor}
        </div>
        <div className="date">
            Date: {props.dayOf}
        </div>
      </div>
    </div>
  );
}

export default GratitudeDisplay;