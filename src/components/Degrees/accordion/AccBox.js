import { useState, useEffect, React } from "react";
import classes from "../Degrees.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function AccBox(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.accData) {
      setData(props.accData);
      setLoading(false);
    }
  }, [props.accData]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        data.map((a, i) => (
          <div key={i}>
            <Accordion flush>
              <Accordion.Item eventKey="{i}" className={classes.acc_item}>
                {a.title ? (
                  <>
                    <Accordion.Header>{a.title}</Accordion.Header>
                    <Accordion.Body>{a.description}</Accordion.Body>
                    {a.concentrations ? (
                      <Accordion.Body>
                        <span className={classes.learn}>Concentrations: </span>
                        {a.concentrations.join(", ")}
                      </Accordion.Body>
                    ) : (
                      <>
                        <Accordion.Body>
                          <span className={classes.learn}>Courses: </span>
                          {a.courses.join(", ")}
                        </Accordion.Body>
                        <Accordion.Body>
                          <span className={classes.learn2}>Note: </span>
                          {a.note}
                        </Accordion.Body>
                      </>
                    )}
                    <Accordion.Body
                      className={classes.learn}
                      style={{ fontWeight: "bold" }}
                    >
                      <Link
                        to={
                          "/courses/" + (a.degreeName ? a.degreeName : a.name)
                        }
                      >
                        Learn more about the program <ArrowRight />
                      </Link>
                    </Accordion.Body>
                  </>
                ) : (
                  <>
                    <Accordion.Header>
                      {a.degreeName.charAt(0).toUpperCase() +
                        a.degreeName.slice(1)}
                    </Accordion.Header>
                    <Accordion.Body
                      className={classes.learn}
                      style={{ fontWeight: "bold" }}
                    >
                      <Link
                        to={
                          "/courses/" + (a.degreeName ? a.degreeName : a.name)
                        }
                      >
                        Learn more about the program <ArrowRight />
                      </Link>
                    </Accordion.Body>
                  </>
                )}
              </Accordion.Item>
            </Accordion>
          </div>
        ))
      )}
    </div>
  );
}
