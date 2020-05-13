import React, { Component } from "react";
import Logo from "./images/MinchowLogo.png";
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        {/* <div className="home-logo">
          <a href="/">
            <img className="home-logo" src={Logo} alt="logo" />
          </a>
        </div> */}

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
            <a href="/product">Items</a>
          </li>
        </ul>
        <a href="/">
          <h1 className="navbar-item navbar-company">Minchow Dirt Bikes</h1>
        </a>
      </div>
    );
  }
}
