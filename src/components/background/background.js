import * as React from "react";
import classes from "./background.module.scss";

// This gives one the background theme

export default function Background() {
  return (
    <div
      className={classes.image_box}
      style={{
        backgroundImage:
          "url(" +
          "https://petes-admin-tools-v.s3.us-east-1.amazonaws.com/cdn/profiles/10056407/945918a0-114c-4d5d-8a96-2081ab65828d" +
          ")",
      }}
    >
      <div>
        <h1 className={classes.main}>
          -Golisano College of Computing and Information Sciences-
        </h1>
      </div>

      <h3 className={classes.sub_main}>School of Information</h3>
    </div>
  );
}
