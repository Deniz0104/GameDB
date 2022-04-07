import React, { Component } from "react";
import styles from "./NavigationBar.module.css";

export default class NavigationBar extends Component {
  constructor(props) {
      super(props);
    this.state = {
      textBarValue: "Test",
    };
  }
  updateTextBarValue = (target) => {
    this.setState({ textBarValue: target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className={styles.testBar}
          value={this.state.textBarValue}
          onChange={(target) => this.updateTextBarValue(target.target)}
        />
        <h1>{this.state.textBarValue}</h1>
      </div>
    );
  }
}
