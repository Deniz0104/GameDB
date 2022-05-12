import React, { Component } from "react";
import Tile from "./Tile";
import styles from "./Tilelist.module.css";


export default class Tilelist extends Component {
  render() {
    return (
      <div className={styles.list}>
        {this.props.parent.results.map(createTiles)}
      </div>
    );
  }
}

function createTiles(item, index) {
  return (
    <li key={index} className={styles.listItems} style={{listStyleType: "none"}}>
      <Tile id={item.id} background={item.background_image} platforms={item.parent_platforms} name={item.name} metacritic={item.metacritic} />
    </li>
  );
}
