import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <h1 className="contact-head">
          {" "}
          <u> Contact</u>
        </h1>
        <div className="contact-container">
          <div className="contact-item">
            <img
              className="talon-img"
              src="https://i.imgur.com/nz7vN6i.jpg?1"
              alt="Talon"
            />
          </div>
          <div className="contact-item">
            <h3>Phone:702-449-2077</h3>

            <h3>
              Email:{" "}
              <a href="mailto: mostmotorsports@gmail.com">
                {" "}
                mostmotorsports@gmail.com
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
