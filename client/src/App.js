import React, {Component} from 'react';
import { BrowserRouter } from "react-browser-router";
import Navba from "./navbar";
import DateTime from "./date-time";
import WorldClock from "./world_clock";
import Header from "./header";
import Footer from "./footer";
const axios = require('axios');

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      data: null,
      hrs: null,
      min: null,
      sec: null,
      day_week:null,
      day: null,
      month:null,
      year: null,
      loc:null,
    }
    this.state={
      location:null,
      hours:["hr"],
      minutes:["min"],
      seconds:["Sec"],
      dbDay:["Todays"],
      months:null,
      years:["Date"],
      dbday_date:null,
    }
  };
  state = {
    selectedOption: null,
  };

  componentDidMount(){
    //fetch list of all location from node server
    fetch("http://localhost:5000/")
    .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({data: data})
        })

setInterval(() =>
//fetch date and time of INDIA/KOlKATA from node server
        fetch("http://localhost:5000/india")
        .then(response => {
              return response.json();
            })
        .then(data => {
          this.setState({loc: data.location})
          this.setState({hrs: data.hours})
          this.setState({min: data.minutes})
          this.setState({sec: data.seconds})
          this.setState({day_week: data.dbDay})
          this.setState({day: data.dbDayDate})
          this.setState({month: data.dbMonth})
          this.setState({year: data.dbyear})
  })
, 1000);
  };
//handle selection of an location
    handleChange = selectedOption => {
      this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
      );
    };

//handle selected location from Selector
    handleClick = () => {
  //    console.log('this is:', this.state.selectedOption);
setInterval(() =>
//fetch date and time from node server by using selected location
      axios.post("http://localhost:5000/world", {
      selected: this.state.selectedOption,
    })
    .then((response) =>{
    this.setState({location: response.data.location})
    this.setState({hours: response.data.hours})
    this.setState({minutes: response.data.minutes})
    this.setState({seconds: response.data.seconds})
    this.setState({dbDay: response.data.dbDay})
    this.setState({months: response.data.dbMonth})
    this.setState({years: response.data.dbyear})
    this.setState({dbday_date: response.data.dbDayDate})
    })
    .catch(function (error) {
      console.log(error);
    })
, 1000);
  };

  render(){
    const { selectedOption } = this.state;
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navba />
      <DateTime
      location={this.state.loc}
      day_week={this.state.day_week}
      day={this.state.day}
      month={this.state.month}
      year={this.state.year}
      hrs={this.state.hrs}
      min={this.state.min}
      sec={this.state.sec}
       />

       <WorldClock
       location={this.state.location}
       dbDay={this.state.dbDay}
       dbday_date={this.state.dbday_date}
       months={this.state.months}
       years={this.state.years}
       hours={this.state.hours}
       minutes={this.state.minutes}
       seconds={this.state.seconds}

       options={this.state.data}
       onChange={this.handleChange}
       value={selectedOption}
       onClick={this.handleClick}
       />

      <Footer />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
