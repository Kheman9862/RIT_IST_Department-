/**
 * This is the Footer which uses a special library called "ion-icons" to use them in the footer section.
 * This section was the most time consuming as I had to render the html part coming from api. Upon looking at the fixes i came up with
 * <div
          className={classes.copyright}
          dangerouslySetInnerHTML={{ __html: data?.copyright.html }}
        ></div>

        This can be further improved in future by using ReactDOM which can append the coming html code from the api.
 * 
*/

import { useState, useEffect, React, useRef } from "react";
import classes from "./Footer.module.scss";
import $ from "jquery";
import logo from "../../RIT_Logo.png";

export default function Footer() {
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

    myXhr({ path: "/footer/" }).done(function (json) {
      setData(json);
    });
  }, []);

  return (
    <div className={`${classes.footer_top}`}>
      <footer className={classes.footer} style={{ overflowX: "hidden" }}>
        <div className="row">
          <p className={classes.social_presence}>
            <img className={classes.logo} src={logo} alt="RIT" />
          </p>
        </div>
        <div className="row">
          <p className={classes.social_presence}>{data?.social.title}</p>
        </div>
        <ul className={classes.social_icon}>
          <li className={classes.social_icon__item}>
            <a
              className={classes.social_icon__link}
              href={data?.social.twitter}
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className={classes.social_icon__item}>
            <a
              className={classes.social_icon__link}
              href={data?.social.facebook}
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className={classes.menu}>
          {data?.quickLinks.map((a, i) => (
            <li className={classes.menu__item} key={i}>
              <a
                className={classes.menu__link}
                href={a.href}
                target="_blank"
                rel="noreferrer"
              >
                {a.title}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={classes.copyright}
          dangerouslySetInnerHTML={{ __html: data?.copyright.html }}
        ></div>
      </footer>
    </div>
  );
}
