import React, { Component } from "react";
import styles from "./NavigationBar.module.css";
import Suggestions from "./Suggestions";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBarValue: "",
      textBarLastUpdate: Date.now(),
      showText: "",
      result:{results:[]}
    };
    this.timeInterval = 500;
    this.exportData = this.exportData.bind(this)
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
  exportData(data){
    console.log(data.results);
    this.setState({result:data});
    
  };
  searchSuggestGames = () => {
    if (
      this.state.textBarLastUpdate < Date.now() - (this.timeInterval - 50) &&
      this.state.textBarLastUpdate > Date.now() - (this.timeInterval + 50) &&
      this.state.textBarValue !== ""
    ) {
      const options = {
        method: "GET",
      };
      fetch(
        "https://api.rawg.io/api/games?page_size=6&page=1&key=07eaf5a4bce8434b85cf5c1f9f03a302&search=" +
          this.state.textBarValue,
        options
      )
        .then((responsev) => responsev.json())
        .then(this.exportData)
        .catch((err) => console.log(err));
      this.setState({
        showText: this.state.textBarValue,
      });
      
    }
  };
  

  render() {
    return (
      <div className={styles.container}>
        <input
          type="text"
          className={styles.testBar}
          value={this.state.textBarValue}
          onChange={(target) => this.updateTextBarValue(target.target)}
        />
        <Suggestions suggestions={this.state.result.results}/>
      </div>
    );
  }
}
