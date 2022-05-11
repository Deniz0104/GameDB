import React, { Component } from "react";
import { fetchJson } from "../methods/jsonMethods";
// import styles from "./PictureList.module.css";

export default class PictureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      result: [],
      selected: 0,
    };
  }
  showPicture = (pic) => {
      let prev;
      let next;
      if (this.state.result.length !== 0){
    return (
      <div >
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${item.background_image})`,
          }}
        />
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${item.background_image})`,
          }}
        />
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${item.background_image})`,
          }}
        />
      </div>
    );
}
  };

  render() {
    if (this.props.game !== undefined) {
      if (this.state.id !== this.props.game) {
        this.setState(this.props.game);
        fetchJson(
          "GET",
          `https://api.rawg.io/api/games/${this.props.game}/screenshots`,
          this
        );
      }
      return (
        <div className={styles.container}>{this.showPicture(this.state.result[this.state.selected])}</div>
      );
    }
  }
}
