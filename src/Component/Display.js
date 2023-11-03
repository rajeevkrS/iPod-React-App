import React from "react";
import '../css/display.css';
import Navbar from "./Navbar";
import Lockscreen from "./Lockscreen";

export default class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <Navbar />
        <Lockscreen />
      </div>
    );
  }
}
