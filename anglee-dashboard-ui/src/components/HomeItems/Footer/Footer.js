import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faWineGlassAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "./Footer.module.css";
const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <ul>
        <li>this site for my dear Renee</li>
        <li>Renee is the best!</li>
        <li>
          <FontAwesomeIcon
            icon={faCoffee}
            style={{ margin: "0 0.5em 0 0.5em" }}
          />
          <FontAwesomeIcon
            icon={faFilm}
            style={{ margin: "0 0.5em 0 0.5em" }}
          />
          <FontAwesomeIcon
            icon={faWineGlassAlt}
            style={{ margin: "0 0.5em 0 0.5em" }}
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
