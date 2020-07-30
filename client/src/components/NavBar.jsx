import React, { Component } from "react";
import Logo from "./images/MinchowLogo.png";
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul className="navbar">
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/photo">Gallery</a>
          </li>
          ||
          <li className="navbar-item">
            <a href="/product">Services</a>
          </li>
          <li>
            <a href="/">
              <h1 className="navbar-item navbar-company ">Most MotorSports</h1>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
{
  /* <div className="home-logo">
          <a href="/">
            <img className="home-logo" src={Logo} alt="logo" />
          </a>
        </div> */
}
