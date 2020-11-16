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
            <a href="#">
              {" "}
              <h1>Street</h1>
            </a>
          </div>
          <div className="service-box-item">
            <a href="#">
              {" "}
              <h1>Dirt Bike</h1>
            </a>
          </div>
          <div className="service-box-item">
            <a href="#">
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
            <a href="/atvservices">
              <h1> ATV</h1>
            </a>
          </div>{" "}
        </div>
      </div>
    );
  }
}
