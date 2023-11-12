import React from "react";

export default class Songs extends React.Component {
  render() {
    const { songItems, active } = this.props;

    return (
      <div className="song">
        <h3>Songs</h3>

        <ul>
          {songItems.map((element, index) => {
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
