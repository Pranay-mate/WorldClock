import React from "react";
import "./css/date-time.css";

function DateTime(props) {
  return (
    <div id="date_time" className="row">
    <div className="date col-sm-12" >
      <h1>{props.location}</h1>
      <h1>{props.day_week}, {props.day} {props.month} {props.year}</h1>
    </div>
    <div className="time col-sm-12">
    <div className='container'>
      <h1 className=''>{props.hrs}:{props.min}<span>{props.sec}</span></h1>
      </div>
    </div>
    </div>
  );
}

export default DateTime;
