import { React } from "react";
import classes from "./MapFrame.module.scss";
import Iframe from "react-iframe";

export default function MapFrame() {
  return (
    <Iframe
      url="http://ist.rit.edu/api/map.php"
      width="800px"
      height="600px"
      className={classes.iframe_fix}
      position="relative"
      display="block"
      allowFullScreen="true"
    />
  );
}
