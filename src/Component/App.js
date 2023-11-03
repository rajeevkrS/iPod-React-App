import React from "react";
import Wheel from "./Wheel";
import Display from "./Display";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}
