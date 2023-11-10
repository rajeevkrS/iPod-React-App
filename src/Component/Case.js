import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";

export default class Case extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}
