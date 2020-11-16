import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <div className="snow-img">
            <img
              className="boyslife-img"
              src="https://books.google.com/books/content?id=PaoDbR61vOoC&amp;pg=PA1&amp;img=1&amp;zoom=3&amp;hl=en&amp;sig=ACfU3U3ZZuRRni45iMuYzukPcDAHg1r6kQ&amp;w=1280"
              alt=""
            ></img>
          </div>
          <div className="about-text">
            <p className="about-words">
              Owner/Chief Mechanic Bert Minchow has been around a while. Ask
              anyone around his home of Las Vegas, Nevada and they will tell you
              he is a stand up guy with fair prices and honest work. Whether he
              is warming himself with the steam of a hot spring on a snowmobile
              traverse of Yellowstone or desinging and restoring Harleys, Bert
              Minchow is a pioneer in customization and concept. He'd enjoy
              hearing from you about new builds or restorations of Street, Dirt,
              and Modern bikes.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
