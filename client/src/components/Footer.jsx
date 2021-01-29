import React, { Component } from "react";
import "../Footer.css";

import ReactDOM from "react-dom";
import { FaFacebookSquare } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer-wrapper">
          <div class="footer-right">
            <a href="https://www.facebook.com/MostMotorsports/">
              <FaFacebookSquare />
            </a>
          </div>

          <div class="footer-left">
            <p class="footer-links">
              <a class="link-1" href="/">
                Home
              </a>

              <a href="/about">About</a>

              <a href="/tips">Tips</a>

              <a href=" /contact">Contact</a>
              <p>(702)-449-2077</p>
              <p>mostmotorsports@gmail.com</p>
            </p>
            <p>
              <a href="/terms">Terms of Service</a>
            </p>
            <p> Most MotorSports &copy; 2015</p>
          </div>
        </footer>
      </div>
    );
  }
}
