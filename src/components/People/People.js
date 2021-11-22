/**
 * This section contains the component that will be display some of the faculty and staff to get more you can click on the link  which will further take to the list of faculty or staff.
 *
 * This component is the high level component it is further divided in two other components faculty list and staf list which shows all the columns
 *
 *
 */

import { useState, useEffect, React } from "react";
import classes from "./People.module.scss";
import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";
import Faculty from "./Faculty/Faculty";
import Staff from "./Staff/Staff";

export default function People() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

    myXhr({ path: "/people/" }).done(function (json) {
      setData(json);
      setLoading(false);
    });
  }, []);

  return (
    <div id="people">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className={classes.people}>
            <h1>{data?.title}</h1>
          </div>
          <Faculty faculty={data} />
          <Staff staff={data} />
        </>
      )}
    </div>
  );
}
