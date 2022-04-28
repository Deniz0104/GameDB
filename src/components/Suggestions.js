import React from "react";
import styles from "./Suggestions.module.css";
import jsonData from "../data/platform.json";

export default function Suggestions(props) {
  if (props.barvalue === "") {
    return;
  }else if(props.searching){
    return (<div className={styles.container}><div className={styles.ldsdefault}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
  } 
  else if (props.suggestions.length !== 0 && props.suggestions.length !==1) {
    return (
      <div>
        <ul className={styles.container}>
          {props.suggestions.map(displaySuggestions)}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className={styles.container}>
          <li key="0" className={styles.list}>
            <div className={styles.suggestion}>No suggestions</div>
          </li>
        </ul>
      </div>
    );
  }
}

function displaySuggestions(item, index, arr) {
  if (index !== 0) {
    return (
      <li key={index} className={styles.list}>
        <div name={item.name} className={styles.suggestion}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.background_image})`,
            }}
          />
          <div className={styles.information}>
            <div className={styles.name}>
              {item.name}
              <div
                className={styles.svg}
                dangerouslySetInnerHTML={{
                  __html: jsonData.platforms[0].svg,
                }}
              />
            </div>
            <div className={styles.score}>Rating: {item.rating}/5</div>
          </div>
        </div>
      </li>
    );
  }
  return;
}
