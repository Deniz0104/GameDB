import React, { Component } from 'react'
import styles from './TitleBar.module.css'

export default class TitleBar extends Component {
    render() {
        return (
            <div className={styles.header}>
                Header of the List
            </div>
        )
    }
}