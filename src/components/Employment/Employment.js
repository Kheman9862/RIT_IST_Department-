/***
 * This section is about the employment and coop rate at RIT. It is using one really nice thing which is map of the places where students got their co-op.
 *
 * */

import { useState, useEffect, React } from "react";
import classes from "./Employment.module.scss";
import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";
import MapFrame from "./Map/MapFrame";

export default function Employment() {
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

    myXhr({ path: "/employment" }).done(function (json) {
      setData(json);
      setLoading(false);
    });
  }, []);

  return (
    <div id="employment">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div className={`container-fluid ${classes.container_fix}`}>
          <h1 className={classes.text}>Employment and Co-op</h1>
          <div className={`row ${classes.container_row}`}>
            {data?.degreeStatistics.statistics.map((a, i) => (
              <div className="col-3" key={i}>
                <div className="row">
                  <div className={`col ${classes.col_number}`}>
                    <p>{a.value}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>{a.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`row ${classes.container_jobs}`}>
            <p>
              {" "}
              Job titles: <span>{data?.careers.careerNames.join(", ")}</span>
            </p>
          </div>

          <div className={`row ${classes.container_map}`}>
            <MapFrame></MapFrame>
          </div>
        </div>
      )}
    </div>
  );
}
