import React from "react";

function ReadingDisplay(props) {
  return (
    <div>
    <div className="display-container">
        <div className="title">
          Book: {props.book}
        </div>

        <div className="sub-title">
          Pages: {props.pages}
        </div>

        <div className="date">
          Date: {props.dayOf}
        </div>
    </div>
  </div>
  );
}

export default ReadingDisplay;