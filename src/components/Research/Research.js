/**
 * This section contains the component that will be display the main research component which will further take to two other options on clicking the buttons mentinoned below.
 */

import { React } from "react";
import classes from "./Research.module.scss";
import { Link } from "react-router-dom";
export default function Research() {
  return (
    <div id="research">
      <div className={classes.about}>
        <h1>Research</h1>
      </div>
      <div className={classes.about_section}>
        <div className={classes.inner_container}>
          <h1>Research @RIT</h1>
          <p className={classes.text}>
            The world needs collaborative thinkers who seek pressing problems
            and propose innovative, game-changing solutions. RIT’s researchers
            explore galaxies and help set the pace for a future in photonics.
            They are the creativity behind discoveries to sustain the planet;
            they provide medical technologies designed to help individuals
            overcome obstacles. They are solving some of the current challenges
            in cybersecurity and imaging to protect people and organizations.
            Through research, RIT is making an impact.
          </p>
          <div>
            <div className={`row ${classes.basis}`}>
              <div className="col-6">
                <Link className="btn btn-outline-light" to="/researchInterest">
                  Based on Interest Area
                </Link>
              </div>
              <div className="col-6">
                <Link className="btn btn-outline-light" to="/researchFaculty">
                  Based on Faculty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
