import React from "react";

function ExerciseDisplay(props) {
  return (
    <div className="text-center">
      <h3>Exercise: {props.exercise}</h3>
      <h3>Located: {props.located}</h3>
      <h3>Date: {props.dayOf}</h3>
    </div>
  );
}

export default ExerciseDisplay;
