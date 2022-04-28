import React, { Component } from "react";
import styles from "./SideBar.module.css";

export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>
        <h1 className={styles.header}>All Games</h1>
        <h1 className={styles.header}>Top</h1>
      </div>
    );
  }
}
