import React, { Component } from "react";
import Tile from "./Tile";
import styles from "./Tilelist.module.css";
export default class Tilelist extends Component {
  render() {
    return (
      <div className={styles.list}>
        {this.props.parent.result.results.map(createTiles)}
      </div>
    );
  }
}
function createTiles(item, index) {
  return (
    <li key={index} className={styles.listItems}>
      <Tile id={item.id} background={item.background_image} name={item.name} metacritic={item.metacritic} />
    </li>
  );
}
