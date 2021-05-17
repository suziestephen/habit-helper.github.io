import React from "react";

function ExerciseDisplay(props) {
  return ( 
  <div>
    <div className="display-container">
        <div className="title">
          Exercise: {props.exercise}
        </div>

        <div className="sub-title">
          Located: {props.located}
        </div>

        <div className="date">
          Date: {props.dayOf}
        </div>
    </div>
  </div>
  );
}

export default ExerciseDisplay;
