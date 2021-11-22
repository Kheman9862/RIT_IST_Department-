import * as React from "react";
import AccBox from "../accordion/AccBox";
import classes from "../Degrees.module.scss";

export default function Undergraduate(props) {
  return (
    <div className="container-lg">
      <div className="row">
        <h1>Undergraduate Programs</h1>
        <p className={classes.para}>
          Home to the college’s Bachelor of Science degrees in computing and
          information technologies, human-centered computing, and web and mobile
          computing, the iSchool comprises the “full stack” computing knowledge
          that prepares professionals working on both the front- and back-end of
          the user experience.
        </p>
      </div>
      <div className="row">
        <AccBox accData={props?.undergrad}></AccBox>
      </div>
    </div>
  );
}
