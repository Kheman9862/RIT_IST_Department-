import { useState, useEffect, React } from "react";
import classes from "./Courses.module.scss";
import $ from "jquery";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function Courses(props) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState("");
  const [loading, setLoading] = useState(true);

  const params = useParams();

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

    myXhr({ path: "/courses/" }).done(function (json) {
      setData(json);
      let filter = params.id;
      let filter2 = "bachelors";
      let filter3 = "master";
      if (filter.includes("-")) filter = filter.replace("-", "");
      if (filter.length === 3) {
        filter2 = "bs" + filter;
        filter3 = "ms" + filter;
      }
      filter = filter.toLowerCase();
      filter2 = filter2.toLowerCase();
      filter3 = filter3.toLowerCase();

      let result = [];
      result = json.filter((data) => {
        if (data.degreeName.toLowerCase() === filter)
          return data.degreeName.toLowerCase();
        else if (data.degreeName.toLowerCase() === filter2)
          return data.degreeName.toLowerCase();
        else if (data.degreeName.toLowerCase() === filter3)
          return data.degreeName.toLowerCase();
      });
      setFilteredData(result);
      console.log(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.courses_gap}>
      {loading ? (
        <Spinner animation="border" />
      ) : filteredData.length < 1 ? (
        <h1>No Data to display</h1>
      ) : (
        <div className="container-lg">
          <h1 className={classes.header}>Based on Faculty List</h1>

          <h3 className={classes.results}>
            Showing Results for{" "}
            {filteredData?.map((a, i) => (
              <span key={i}>{a.degreeName}</span>
            ))}
          </h3>
          {filteredData?.map((a, i) => (
            <div className={`${classes.description} row`} key={i}>
              <div className="row">
                <h3>Semester Name: {a.semester}</h3>
              </div>
              <div className="row">
                <h5>Citations:</h5>
              </div>
              <div className="row">
                {
                  <ul>
                    {a.courses.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
