import React, { Component } from "react";
import styles from "./Ratings.module.css";

export default class Ratings extends Component {
  constructor(props) {
    super(props);
  }
  style = (rating) => {
    let color;
    switch (rating.title) {
      case "exceptional":
        color = "green";
        break;
      case "recommended":
        color = " lightgreen";
        break;
      case "meh":
        color = "orange";
        break;
      case "skip":
        color = "red";
        break;
    }
    return {
      width: rating.percent + "%",
      backgroundColor: color,
      height: "30px",
    };
  };
  stats = (index) => {
    return this.props.ratings[index].title + ": " + this.props.ratings[index].count;
  };
  render() {
    if (this.props.ratings !== undefined) {
      let ratings = this.props.ratings;
      return (
        <div className={styles.container}>
          <div
            className={styles.ratingcontainer}
            style={{
              position: "relativ",
              display: "flex",
              width: "70%",
              margin: "0px auto",
            }}
          >
            <div className={styles.ratings} style={this.style(ratings[0])}>
              <div/>
              <div>{this.stats(0)}</div>
            </div>
            <div
              className={styles.ratings}
              style={this.style(ratings[1])}
            ><div/>
            <div>{this.stats(1)}</div>
          </div>
            <div className={styles.ratings} style={this.style(ratings[2])} ><div/>
              <div>{this.stats(2)}</div>
            </div>
            <div className={styles.ratings} style={this.style(ratings[3])} ><div/>
              <div>{this.stats(3)}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}