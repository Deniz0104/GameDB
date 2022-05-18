import React, { Component } from "react";
import styles from "./Tile.module.css";
import { returnPicture } from "../methods/jsonMethods";
import { NavLink } from "react-router-dom";

export default class Tile extends Component {
  render() {

    return (
      <NavLink
        to={`Detailview/${this.props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.tileBox}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${this.props.background})`,
            }}
          />

          <div className={styles.tileContent}>
            <div className={styles.topContent}>
              <div
                className={styles.svg}
                style={{ display: "flex" }}
                dangerouslySetInnerHTML={{
                  __html: returnPicture(this.props.platforms),
                }}
              />
              {this.props.metacritic !== null ? (
                <div className={styles.metaScore}>{this.props.metacritic}</div>
              ) : (
                ""
              )}
            </div>
            <h1>{this.props.name}</h1>
            <div className={styles.showDetailedContent}>
              <div className={styles.releaseDateContent}>
                <div className={styles.releaseDateContentFirst}>Release Date:</div>
                <div className={styles.releaseDateContentSecond}>{this.props.releaseDate}</div>
              </div>
              <div className={styles.genreContent}></div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
