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
    };
    this.timeInterval = 500;
  }
  updateTextBarValue = (target) => {
    this.setState({
      textBarValue: target.value,
      textBarLastUpdate: Date.now(),
    });
    setTimeout(() => {
      this.searchSuggestGames();
    }, this.timeInterval);
  };
  
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
        "result",
        this
      );
    }
  };

  createSuggestions() {
    if (this.state.showSuggestions) {
      return (
        <Suggestions
          suggestions={this.state.result.results}
          barvalue={this.state.textBarValue}
          parent={this}
        />
      );
    }
    return <div />;
  }
  changeSuggestionsVisibility(show) {
    if (this.state.showSuggestions !== show) {
      this.setState({ showSuggestions: show });
    }
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
