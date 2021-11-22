/**
 * This is the navbar which uses a special library called  "react-router-hash-link" to get the scrolling in an actual single page.
 * This navigation will help in scrolling the contents
 *
 */

import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../RIT_Logo.png";
import classes from "./Navbar.module.scss";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className={classes.logo} src={logo} alt="RIT" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                smooth
                className="nav-link active"
                aria-current="page"
                to="/#about"
              >
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="/#degrees">
                Degrees
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="/#minors">
                Minors
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="/#people">
                Our People
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="/#employment">
                Employment
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="/#research">
                Research
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
