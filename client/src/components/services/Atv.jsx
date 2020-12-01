import React, { Component } from "react";

export default class Atv extends Component {
  render() {
    return (
      <div className="services">
        <div className="services-title">
          <h1 className="services-header">
            {" "}
            <u> ATV</u>
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
            <h3>4 Stroke Single Cylinder </h3>
            <h4>$425 + parts</h4>
            <h3>2 Stroke</h3>
            <h4>325$ + parts</h4>
          </div>
          <div className="services-item">
            <h3>
              For any suspension work please contact us so we can get more
              information on the ATV!
            </h3>
          </div>
          <div className="services-item">
            <h2>Carburetors</h2>
            <h3>All prices are "off the bike"</h3>
            <h4>1 carb</h4>
            <h5>65$ + parts</h5>
            <h4>2 carbs</h4>
            <h5>125$ + parts</h5>
            <h4>3 carbs</h4>
            <h5>225$ + parts</h5>
            <h4>4 carbs</h4>
            <h5>300$ + parts</h5>
            <h4>Remove old paint</h4>
            <h5>25$ per carb</h5>
            <p>This process will include:</p>

            <p> Total disassembly of all components</p>

            <p>
              Full internal/external cleaning(Media Blast all applicable
              components)
            </p>
            <p>Ultra Sonic Clean all components</p>

            <p>
              Reassemble the carburetors, replace all worn or irregular jets,
              diaphragms, o'rings, gaskets, etc.
            </p>
            <p>Reset Float Levels</p>

            <p>
              All replacement parts used are OEM replacement, or manufactured by
              the carburetor company.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
