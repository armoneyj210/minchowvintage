import React, { Component } from "react";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home-flex-container">
        <div className="logo home-flex-item">
          <img src="#" alt="" />
        </div>
        <div className="home-flex-item home-font-up">
          <h1 className="home-vintage">All Modern and Vintage Restoration</h1>
        </div>
        ||
        <div className="home-flex-item home-font-up">
          <h1>Harley Builds</h1>
        </div>
        ||
        <div className="home-flex-item">
          <h3>Engines</h3>
          <h3>Suspension</h3>
          <h3>Carburetors</h3>h oh
          <h3>EFI Fuel Injections</h3>
        </div>
        ||
        <div className="home-flex-item">
          <h3 className="home-vegas"> Nevada</h3>
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
