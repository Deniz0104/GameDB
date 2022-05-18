import React, { Component } from "react";
import Tile from "./Tile";
import styles from "./Tilelist.module.css";
import Moment from 'moment';

export default class Tilelist extends Component {
  render() {
    return (
      <div className={styles.list}>
        {this.props.parent.results.map(createTiles)}
      </div>
    );
  }
}

function createTiles(item) {
  return (
    <li style={{listStyleType: "none"}}>
      <Tile 
      id={item.id} 
      background={item.background_image} 
      platforms={item.parent_platforms} 
      name={item.name} 
      metacritic={item.metacritic}
      releaseDate={Moment(item.released).format('D. MMM, YYYY')}
      genre={item.genres}/>
    </li>
  );
}
