import React, { Component } from "react";
import { fetchJson } from "../methods/jsonMethods";
import styles from "./NavigationBar.module.css";
import Suggestions from "./Suggestions";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBarValue: "",
      textBarLastUpdate: Date.now(),
      showText: "",
      result: { results: [] },
      showSuggestions: false,
      searching: false,
    };
    this.timeInterval = 500;
  }
  updateTextBarValue = (target) => {
    this.setState({
      textBarValue: target.value,
      textBarLastUpdate: Date.now(),
      searching: true,
    });
    setTimeout(() => {
      this.searchSuggestGames();
    }, this.timeInterval);
  };
  ineedtobecalled = () =>{
    alert("kljdf")
  }
  searchSuggestGames = () => {
    if (
      this.state.textBarLastUpdate < Date.now() - (this.timeInterval - 50) &&
      this.state.textBarLastUpdate > Date.now() - (this.timeInterval + 50) &&
      this.state.textBarValue !== ""
    ) {
      fetchJson(
        "GET",
        "https://api.rawg.io/api/games?page_size=6&page=1&search=" +
          this.state.textBarValue,
          this
      )
    }
    
  };

  createSuggestions() {
    if (this.state.showSuggestions) {
      return (
        <Suggestions
          suggestions={this.state.result.results}
          barvalue={this.state.textBarValue}
          searching={this.state.searching}
        />
      );
    }
    return <div />;
  }
  changeSuggestionsVisibility(show) {
    setTimeout(() => {
      if (this.state.showSuggestions !== show) {
        this.setState({ showSuggestions: show });
      }
    }, 99);
  }

  render() {
    return (
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Search for games"
          className={styles.searchbar}
          value={this.state.textBarValue}
          onChange={(target) => this.updateTextBarValue(target.target)}
          onFocus={() => this.changeSuggestionsVisibility(true)}
          onBlur={() => this.changeSuggestionsVisibility(false)}
        />
        {this.createSuggestions()}
      </div>
    );
  }
}
