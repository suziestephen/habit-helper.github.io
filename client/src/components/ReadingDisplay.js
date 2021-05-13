import React from "react";

function ReadingDisplay(props) {
  return (
    <div className="text-center">
      <h3>Book: {props.book}</h3>
      <h4>Pages: {props.pages}</h4>
      <h5>Date: {props.dayOf}</h5>
    </div>
  );
}

export default ReadingDisplay;