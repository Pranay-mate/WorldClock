import React from "react";

import Dropdown from 'react-dropdown';
import "./css/dropdown.css"
import "./css/world_clock.css";
import { GiWorld } from "react-icons/gi";

function WorldClock(props) {
  return (
    <div id="world_clock" className="row">
      <div className="worldClockHeader col-xl-12 col-sm-12">
       <h1><GiWorld className="earth" /> WORLD CLOCK</h1>
      </div>
        <div id="date_time" className="col-sm-12">
        <div className='Select col-xl-12'>
        <Dropdown

        className='myClassName'
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select a location" />
        </div>

        <div className="col-xl-12">
        <button className="button" onClick={props.onClick} >
              Submit
        </button>
        </div>
              <div className="date_2 col-xl-12">
                <h1>{props.location}</h1>
                <h1>{props.dbDay}, {props.dbday_date} {props.months} {props.years}</h1>
              </div>
              <div className="time col-xl-12">
                <h1>{props.hours}:{props.minutes}<span>{props.seconds}</span></h1>
              </div>
        </div>
    </div>
  );
}

export default WorldClock;
