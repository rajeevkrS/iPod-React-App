import React from "react";
import '../css/music.css'

export default class Music extends React.Component {
  render() {
    const { musicItems, active } = this.props;

    return (
      <div className="music">
        <ul>
          {musicItems.map((element, index) => {
            return active === index ? (
              <li key={index} className="active">
                &nbsp; {element}
              </li>
            ) : (
              <li key={index}>&nbsp; {element}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
