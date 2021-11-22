import { React } from "react";
import classes from "./ContactUs.module.scss";
import Iframe from "react-iframe";

//This is a simple contact us page extracted in the form of Iframe......

export default function ContactUs() {
  return (
    <Iframe
      url="http://ist.rit.edu/api/contactForm.php"
      width="1000px"
      height="600px"
      className={classes.iframe_fix}
      position="relative"
      display="block"
      allowFullScreen="true"
    />
  );
}
