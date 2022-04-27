import React, { Component } from 'react'
import styles from "./Tile.module.css";

export default class Tile extends Component {
    render() {
        return (
            <div className={styles.tileBox} id="APIOutput">
                <img src={this.props.background} alt="Failed to load" width="300px" height="200px"></img> 
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
