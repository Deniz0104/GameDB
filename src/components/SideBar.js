import React, { Component } from "react";
import styles from "./SideBar.module.css";

export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Test nsd</h1>
      </div>
    );
  }
}
