import React, { Component } from 'react'
import Tile from './Tile';
import styles from "./Tilelist.module.css";
export default class Tilelist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }

    loadGames() {
        const options = {
            method: 'GET',
        };
        fetch('https://api.rawg.io/api/games?key=5883b2a467c542c49c286b9a0a6ea754', options)
            .then(response => response.json())
            .then(
                data => this.outputTileName(data)
            )
            .catch(err => console.error(err));  
    }
    outputTileName(data) {
        this.setState({
            games: data.results
        })
    }

    render() {
        this.loadGames();
        return (
            <div className={styles.list}>
                {
                this.state.games.map(createTiles)}
            </div>
        )
 
    }
}
function createTiles(item, index) {
    return (
    <li key={index} className={styles.list}><Tile name={item.name}/></li>
    )
}


