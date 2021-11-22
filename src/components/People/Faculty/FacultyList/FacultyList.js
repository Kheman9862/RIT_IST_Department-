import { useState, useEffect, React } from "react";
import classes from "./FacultyList.module.scss";
import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";

export default function FacultyList(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState("");
  const [searchText, setSearchText] = useState("Information, School of");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.faculty.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
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

    myXhr({ path: "/people/" }).done(function (json) {
      setData(json);
      setFilteredData(json.faculty);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Spinner animation="border" />
  ) : (
    <div className="container-lg">
      <h1 className={classes.header}>Faculty List</h1>
      <input
        className={classes.input_fac}
        type="text"
        placeholder="  Search By Faculty's name"
        onChange={(event) => handleSearch(event)}
      />
      <h3 className={classes.results}>
        Showing Results for{" "}
        <span className={classes.text}>
          "{searchText === "" ? "Information, School of" : searchText}"
        </span>
      </h3>
      <div>
        {filteredData?.map((a, i) => {
          return (
            <div className={`${classes.description} row`} key={i}>
              <div className="col-6">
                <div className="row">
                  <div className="col-5">
                    <img
                      className={classes.img_edit}
                      src={a.imagePath}
                      alt="Image not found"
                    />
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <div className="col">
                        <h3 className={classes.name}>{a.name}</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>{a.title}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <span className={classes.text}>
                            Interested Areas:{" "}
                          </span>
                          {a.interestArea.split(" ").join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes.fix_email} col-6`}>
                <div className="row">
                  <div className="col">
                    <p className={classes.text}>{a.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>{a.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
