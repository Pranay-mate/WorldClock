import React from "react";
import "./css/date-time.css";

function DateTime(props) {
  return (
    <div id="date_time" className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div className="date mb-auto" >
      <h1>{props.location}</h1>
      <h1>{props.day_week}, {props.day} {props.month} {props.year}</h1>
    </div>
    <div className="time mb-auto">
      <h1 className="mb-auto ms-auto">{props.hrs}:{props.min}<span>{props.sec}</span></h1>
    </div>
    </div>
  );
}

export default DateTime;
