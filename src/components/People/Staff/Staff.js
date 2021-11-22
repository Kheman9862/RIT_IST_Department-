import { useState, useEffect, React } from "react";
import classes from "../People.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import {
  Person,
  Mailbox,
  Facebook,
  Twitter,
  Phone,
  ArrowRight,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Staff(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.staff) {
      setData(props.staff);
      setLoading(false);
    }
  }, [props.staff]);

  return loading ? (
    <Spinner animation="border" />
  ) : (
    <div className={`container-lg ${classes.staff_gap}`}>
      <h3>Staff</h3>
      <Link to="/staff" className={classes.directory_col}>
        View School Directory{" "}
        <span>
          <ArrowRight />
        </span>
      </Link>
      <div className="row">
        {data?.staff.slice(0, 3).map((a, i) => (
          <div className="col-4" key={i}>
            <Card style={{ maxWidth: "18rem" }}>
              <Card.Img
                className={classes.card_img_help}
                variant="top"
                src={a.imagePath}
              />
              <Card.Body>
                <Card.Title className={classes.name_col}>
                  {a?.name} ({a?.username})
                </Card.Title>
                <Card.Text>{a?.title}</Card.Text>
                <div className="row">
                  {a?.website === "" ? null : (
                    <div className="col-2">
                      <Card.Text>
                        <a
                          className="text-primary p-2"
                          href={a.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Person />
                        </a>
                      </Card.Text>
                    </div>
                  )}

                  {a?.phone === "" ? null : (
                    <div className="col-2">
                      <Card.Text>
                        <a
                          className="text-primary p-2"
                          href={"tel:" + a.phone}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Phone />
                        </a>
                      </Card.Text>
                    </div>
                  )}

                  {a?.email === "" ? null : (
                    <div className="col-2">
                      <Card.Text>
                        <a
                          className="text-primary p-2"
                          href={"mailto:" + a.email}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Mailbox />
                        </a>
                      </Card.Text>
                    </div>
                  )}

                  {a?.twitter === "" ? null : (
                    <div className="col-2">
                      <Card.Text>
                        <a
                          className="text-primary p-2"
                          href={a.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Twitter />
                        </a>
                      </Card.Text>
                    </div>
                  )}

                  {a?.facebook === "" ? null : (
                    <div className="col-2">
                      <Card.Text>
                        <a
                          className="text-primary p-2"
                          href={a.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Facebook />
                        </a>
                      </Card.Text>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
