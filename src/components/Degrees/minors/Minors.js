import { useState, useEffect, React } from "react";
import AccBox from "../accordion/AccBox";
import classes from "../Degrees.module.scss";
import $ from "jquery";

export default function Minors() {
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

    myXhr({ path: "/minors/" }).done(function (json) {
      setData(json);
    });
  }, []);

  return (
    <div className="container-lg" id="minors">
      <div className={`row ${classes.grad_list}`}>
        <h1>Minors and Immersions</h1>
      </div>
      <div className="row">
        <AccBox accData={data?.UgMinors}></AccBox>
      </div>
    </div>
  );
}
