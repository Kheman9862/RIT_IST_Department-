import * as React from "react";
import AccBox from "../accordion/AccBox";
import classes from "../Degrees.module.scss";

export default function Graduate(props) {
  return (
    <div className="container-lg">
      <div className={`row ${classes.grad_list}`}>
        <h1>Graduate Programs</h1>
        <p className={classes.para}>
          A Master of Science Degree from the School of Information provides an
          opportunity for in-depth study to prepare for today’s high-demand
          computing careers. Big data is not just high transaction volumes; it
          is also data in various formats, with high velocity change, and
          increasing complexity and information delivery must be immediate and
          on demand.
        </p>
      </div>
      <div className="row">
        <AccBox accData={props?.grad}></AccBox>
      </div>
    </div>
  );
}
