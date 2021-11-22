/**
 *
 * This one take the about api and render it to the page. This one is beautifuy develioped where it shows an image on the left side and text column on right
 *
 */

import { useState, useEffect, React } from "react";
import classes from "./About.module.scss";
import $ from "jquery";

export default function About() {
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

    myXhr({ path: "/about/" }).done(function (json) {
      setData(json);
    });
  }, []);

  return (
    <div id="about">
      <div className={classes.about}>
        <h1>Overview</h1>
      </div>
      <div className={classes.about_section}>
        <div className={classes.inner_container}>
          <h1>About Us</h1>
          <p className={classes.text}>{data?.description}</p>
          <div>
            <blockquote>
              {data?.quote}
              <span>{data?.quoteAuthor}</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
