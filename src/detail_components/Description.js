import React, { Component } from "react";
import styles from "./Description.module.css";

export default function Description(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
    </div>
  );
}
