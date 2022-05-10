import React, { Component } from 'react'
import styles from "./Tile.module.css";
import { returnPicture } from "../methods/jsonMethods";

export default class Tile extends Component {
    render() {
        return (
            <div className={styles.tileBox}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${this.props.background})`,
                    }}
                />

                <div className={styles.tileContent}>
                    <div className={styles.topContent}>
                        <div
                            className={styles.svg}
                            style={{ display: "flex" }}
                            dangerouslySetInnerHTML={{
                                __html: returnPicture(this.props.platforms)
                            }}
                        />
                        {this.props.metacritic !== null ? <div className={styles.metaScore}>{this.props.metacritic}</div> : ""}
                    </div>
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        )
    }
}
