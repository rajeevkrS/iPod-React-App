import React from "react";
import '../css/theme.css';

export default class wheelColor extends React.Component {
  render() {
    const { active } = this.props;

    return (
      <div className="wheelColor">
        <h2>Select Wheel Color</h2>

        <ul>
          {["Black", "White", "Brown"].map(
            (element, index) => {
              return active === index ? (
                <li key={index} className="active theme-li">
                  &nbsp; {element}
                </li>
              ) : (
                <li key={index} className="theme-li">
                  &nbsp; {element}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
