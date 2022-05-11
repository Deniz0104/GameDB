import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Tile.module.css";

export default class Tile extends Component {
  render() {
    return (
      <NavLink
        to={`Detailview/${this.props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.tileBox}>
          <div className={styles.imageArea}>
            <img src={this.props.background}></img>
          </div>
          <div className={styles.tileContent}>
            <div className={styles.metaScore}>{this.props.metacritic}</div>
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </NavLink>
    );
  }
}
