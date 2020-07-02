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
              <a class="link-1" href="#">
                Home
              </a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p> Most Motor Sports &copy; 2015</p>
          </div>
        </footer>
      </div>
    );
  }
}