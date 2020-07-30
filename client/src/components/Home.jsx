import React, { Component } from "react";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home-flex-container">
        <div className="home-flex-item home-font-up">
          <h1>Vintage Dirt Bike Restoration</h1>
        </div>
        ||
        <div className="home-flex-item home-font-up">
          <h1>Harley Builds</h1>
        </div>
        ||
        <div className="home-flex-item">
          <h5>Suspension</h5>
        </div>
        ||
        <div className="home-flex-item">
          <h3 className="home-vegas">Las Vegas, Nevada</h3>
        </div>
        <div className="home-flex-btn-cont">
          <a href="/photo">
            <button className="home-flex-btn">Come on in!</button>
          </a>
        </div>
      </div>
    );
  }
}
