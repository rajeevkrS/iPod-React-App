import React from "react";
import '../css/lockscreen.css';

export default class Lockscreen extends React.Component {
  render() {
    return (
      <>
        <div className="bottom-div-lock">
          <h3>Press center button to unlock!</h3>
        </div>
      </>
    );
  }
}
