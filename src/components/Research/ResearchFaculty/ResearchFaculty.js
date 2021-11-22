import { useState, useEffect, React } from "react";
import classes from "./ResearchFaculty.module.scss";
import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";

export default function ResearchFaculty() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState("");
  const [searchText, setSearchText] = useState("All Faculty");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((data) => {
      return data.facultyName.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

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

    myXhr({ path: "/research/" }).done(function (json) {
      setData(json.byFaculty);
      setFilteredData(json.byFaculty);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div className="container-lg">
          <h1 className={classes.header}>Based on Faculty List</h1>
          <input
            className={classes.input_fac}
            type="text"
            placeholder=" Search By Faculty name"
            onChange={(event) => handleSearch(event)}
          />
          <h3 className={classes.results}>
            Showing Results for{" "}
            <span className={classes.text}>
              "{searchText === "" ? "All Faculty" : searchText}"
            </span>
          </h3>
          {filteredData?.map((a, i) => (
            <div className={`${classes.description} row`} key={i}>
              <div className="row">
                <h3>
                  Faculty Name:{" "}
                  <span>
                    {a.facultyName} ({a.username})
                  </span>
                </h3>
              </div>
              <div className="row">
                <h5>Citations:</h5>
              </div>
              <div className="row">
                {
                  <ul>
                    {a.citations.map((b, i) => (
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
