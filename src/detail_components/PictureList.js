import React, { Component } from "react";
import styles from "./PictureList.module.css";

export default class PictureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  changeSelected = (sel) => {
    this.setState({selected: sel})
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
        <div className={styles.container}>
          <div
            className={styles.prev}
            style={{
              backgroundImage: `linear-gradient(to left,transparent,var(--color-background)),url(${this.props.pics[prev].image})`,
            }}
            onClick={() => {
              this.changeSelected(prev);
            }}
          >{"<"}</div>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${this.props.pics[pic].image})`,
            }}
          />
          <div
            className={styles.next}
            style={{
              backgroundImage: `linear-gradient(to right,transparent,var(--color-background)),url(${this.props.pics[next].image})`,
            }}
            onClick={() => {
              this.changeSelected(next);
            }}
          >{">"}</div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showPicture(this.state.selected)}
      </div>
    );
  }
}
