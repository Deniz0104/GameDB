import React, { Component } from 'react'
import styles from "./Tile.module.css";

export default class Tile extends Component {
    render() {
        return (
            <div className={styles.tileBox}> 
                Game 
            </div>
        )
    }
}