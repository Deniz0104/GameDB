import React, { Component } from "react";
import { fetchJson } from "../methods/jsonMethods";
import styles from "./PictureList.module.css";

export default class PictureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      selected: 0,
    };
  }
  
  showPicture = (pic) => {
    let length = this.props.pics.length;
    let prev;
    let next;
    if (pic === length - 1) {
      prev = pic - 1;
      next = 0;
    } else if (pic === 0) {
      prev = length - 1;
      next = pic + 1;
    } else {
      prev = pic - 1;
      next = pic + 1;
    }
    if (length !== 0) {
      return (
        <div>
          <div
            className={styles.prev}
            style={{
              backgroundImage: `url(${this.props.pics[prev].image})`,
            }}
            onClick={() => {
              this.changeSelected(prev);
            }}
          />
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${this.props.pics[pic].image})`,
            }}
          />
          <div
            className={styles.next}
            style={{
              backgroundImage: `url(${this.props.pics[next].image})`,
            }}
            onClick={() => {
              this.changeSelected(next);
            }}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div className={styles.container}>
        {this.showPicture(this.state.selected)}
      </div>
    );
  }
}
