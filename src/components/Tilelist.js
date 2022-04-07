import React, { Component } from 'react'
import Tile from './Tile';
import styles from "./Tilelist.module.css";

export default class Tilelist extends Component {
    render() {
        return (
            <div className={styles.list}>
                <Tile />
                <Tile />
            </div>
        )
    }
}