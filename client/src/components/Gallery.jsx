import React, { Component } from "react";
import "../../src/Gallery.css";
export default class Gallery extends Component {
  render() {
    return (
      <div>
        <a href="#img1">
          <img
            classList="thumb"
            src="client/src/components/images/MInchowMaico.jpg"
          />
        </a>

        <div classList="lightbox" id="img1">
          <a href="#img3" classList="light-btn btn-prev">
            prev
          </a>
          <a href="/" classList="btn-close">
            X
          </a>
          <img src="client/src/components/images/MinchowMaico2.jpg" />
          <a href="#img2" classList="light-btn btn-next">
            next
          </a>
        </div>
      </div>
    );
  }
}
