import React from "react";
import "../css/navbar.css";
import BatImg from "../static/battery.png";

export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      time: this.getCurrentTime(),
    };
  }

  // Time Function - 24 hrs
  getCurrentTime() {
    const Today = new Date();
    var time = Today.getHours() + ":" + Today.getMinutes();

    // if minutes is < 10, then showing 0 with minutes (:02)
    if (Today.getMinutes() < 10) {
      time = Today.getHours() + ":0" + Today.getMinutes();
    }
    return time;
  }

  render() {
    const { time } = this.state;

    return (
      <div className="bar">

        <h5 className="heading">iPod</h5>
        <h3 className="time">{time}</h3>
        <div className="right-container-nav">
          <img className="battery" src={BatImg} alt="battery" />
        </div>
        
      </div>
    );
  }
}
