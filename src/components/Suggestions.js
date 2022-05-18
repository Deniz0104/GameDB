import React from "react";
import styles from "./Suggestions.module.css";
import { NavLink } from "react-router-dom";
import { returnPicture } from "../methods/jsonMethods";

export default function Suggestions(props) {
  if (props.barvalue === "") {
    return;
  } else if(props.searching) {
    return (
      <div className={styles.container}>
        <div style={{textAlign: "center"}}>
        <div className={styles.ldsdefault}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        </div>
      </div>
    );
  } else if (props.suggestions.length !== 0 && props.suggestions.length !== 1) {
    return (
      <div
        style={{ display: props.visibility ? "inline" : "none" }}
        className={styles.container}
        onClick={props.clearbarvalue}
      >
        {props.suggestions.map(displaySuggestions)}
      </div>
    );
  } else {
    return (
      <div
        style={{ display: props.visibility ? "inline" : "none" }}
        className={styles.container}
        onClick={props.clearbarvalue}
      >
        <div style={{textAlign: "center", margin:"auto 10px"}}>No suggestions</div>
      </div>
    );
  }
}
function displayPicture(item) {
  let html="";
  returnPicture(item.parent_platforms).map(x => html += x)
  return html;
}

function displaySuggestions(item, index, arr) {
    return (
      <NavLink
        to={`/Detailview/${item.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div name={item.name} className={styles.suggestion}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.background_image})`,
            }}
          />
          <div className={styles.information}>
            <div
              className={styles.svg}
              style={{ display: "flex" }}
              dangerouslySetInnerHTML={{
                __html: displayPicture(item),
              }}
            />
            <div className={styles.name}>{item.name}</div>
            <div className={styles.score}>Rating: {item.rating}/5</div>
          </div>
        </div>
      </NavLink>
    );
}
