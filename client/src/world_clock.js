import React from "react";

import Dropdown from 'react-dropdown';
import "./css/dropdown.css"
import "./css/world_clock.css";
import { GiWorld } from "react-icons/gi";

function WorldClock(props) {
  return (
    <div id="world_clock" className="cover-container d-flex mx-auto flex-column">
      <div className="worldClockHeader mb-auto">
       <h1><GiWorld className="earth" /> WORLD CLOCK</h1>
      </div>
        <div id="date_time" className="mb-auto">
        <Dropdown
        arrowClassName='myArrowClassName'
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select a location" />
        <button className="button" onClick={props.onClick} >
              Submit
        </button>
              <div className="date_2">
                <h1 className="location">{props.location}</h1>
                <h1>{props.dbDay}, {props.dbday_date} {props.months} {props.years}</h1>
              </div>
              <div className="time">
                <h1>{props.hours}:{props.minutes}<span>{props.seconds}</span></h1>
              </div>
        </div>
    </div>
  );
}

export default WorldClock;
