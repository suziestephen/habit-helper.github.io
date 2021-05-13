import React from "react";

function EntryDetail(props) {
  return (
    <div className="text-center">
      <h3>Grateful For: {props.gratefulFor}</h3>
      <h3>Date: {props.dayOf}</h3>
    </div>
  );
}

export default EntryDetail;
