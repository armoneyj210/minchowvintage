import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div className="services">
        <div className="services-title">
          <h1 className="services-header">
            {" "}
            <u> Services</u>
          </h1>
        </div>
        <div className="services-flex-container">
          <div className="services-item">
            <h2>Cylinder Head Rebuild</h2>
            <h4>$325 + parts</h4>
            <p>
              This service includes disassembly, cleaning up ports,pocket
              porting reassembly, and setting valve clearances. When we're done
              you will have a ready-to-run head.
            </p>
          </div>
          <div className="services-item">
            <h2>Cylinder Honing</h2>
            <h4>$35 to $65</h4>
            <p>
              At Most MotorSports we use a motorcycle specific approach for our
              honing on 2 or 4 stroke Nikasil and vintage steel sleeve
              cylinders.
            </p>
          </div>
          <div className="services-item">
            <h2>Engine Rebuild</h2>
            <h3>4 Stroke Single Cylinder + Cylinder</h3>
            <h4>$425 + parts</h4>
          </div>
          <div className="services-item">
            <h2>Suspension Rebuild</h2>
            <h3>Front</h3>
            <h4>$125 + parts</h4>
            <h3>Rear</h3>
            <h4>$125 + parts</h4>
          </div>
          <div className="service-item-rest services-item">
            <p>
              {" "}
              <span id="services-vintage-rest">
                {" "}
                Vintage Dirt Bike Restoration
              </span>
              <br />
              are welcome and we would love to talk with you about the
              restoration job before quoting you anything.
            </p>
            <p>
              <span className="services-harley">Harley Custom Builds</span>are
              also always welcome and once you get in contact with us we can
              start talking ideas, time frame i.e.
            </p>
          </div>
          <div className="services-item-talk services-item">
            <h3>
              A whole lot depends on both Harley Custom Builds and Vintage Dirt
              Bike Restorations.
            </h3>
            <ul>
              <li>Are we providing the bike?</li>
              <li>Are we picking up the bike?</li>
              <li>Are we delivering the bike?</li>
              <li>Are we rebuilding the engine?</li>
              <li>WHat performance mods are wanted?</li>
            </ul>
            <p>
              These are just some of the basic questions we'd like to get out of
              the way so we can start talking about the fun concepts and designs
              you are looking for!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
