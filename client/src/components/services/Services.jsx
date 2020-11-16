import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="service-groups">
            {" "}
            <u> Service Groups</u>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box-item">
            <a href="/street-services">
              {" "}
              <h1>Street</h1>
            </a>
          </div>
          <div className="service-box-item">
            <a href="/dirt-services">
              {" "}
              <h1>Dirt Bike</h1>
            </a>
          </div>
          <div className="service-box-item">
            <a href="/sidebyside-services">
              {" "}
              <h1>Side By Side</h1>
            </a>
          </div>
          <div className="service-box-item">
            <a href="#">
              {" "}
              <h1>For Sale</h1>
            </a>
          </div>
          <div className="service-box-item atv">
            <a href="/atv-services">
              <h1> ATV</h1>
            </a>
          </div>{" "}
          <div className="service-box-item">
            <p>Track days are available for tuning Road and Dirt bikes!</p>{" "}
          </div>
        </div>
      </div>
    );
  }
}
