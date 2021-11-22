/***
 * This section is consits of the tye of degrees and also MINORS. Since minor has the same UI so i buitlt ut similar to degress all of the are using same reusable components.
 *
 * Then further i am sending the data to next page where i am sending just the degree id in order to filter the course id.
 *
 * Check out the accordian class which consists most of the heavy logic that is done for this section.
 *
 * */

import { useState, useEffect, React } from "react";
import classes from "./Degrees.module.scss";
import Graduate from "./graduate/Graduate";
import Undergraduate from "./undergrad/Undergrad";
import $ from "jquery";
import Minors from "./minors/Minors";

export default function Degrees() {
  //fetching data here for both the degrees and sending it to child to minimize the api calls
  const [data, setData] = useState(null);

  useEffect(() => {
    function myXhr(path) {
      return $.ajax({
        type: "GET",
        url: "http://serenity.ist.rit.edu/~plgics/proxy.php",
        data: path,
        cache: false,
        async: true,
        dataType: "json",
      });
    }

    myXhr({ path: "/degrees/" }).done(function (json) {
      setData(json);
    });
  }, []);

  return (
    <div id="degrees">
      <div className={classes.degree}>
        <h1>Degrees</h1>
      </div>
      <div className={classes.degree_list}>
        <Undergraduate undergrad={data?.undergraduate}></Undergraduate>
        <Graduate grad={data?.graduate}></Graduate>
        <Minors></Minors>
      </div>
    </div>
  );
}
