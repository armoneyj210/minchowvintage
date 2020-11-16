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
            <h3>Phone:702-449-2077</h3>
            <h3>
              Email:{" "}
              <a href="mailto: wendyminchow@cox.net"> wendyminchow@cox.net</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
