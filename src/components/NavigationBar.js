import React, { Component } from "react";
import styles from "./NavigationBar.module.css";

export default class NavigationBar extends Component {
  constructor(props) {
      super(props);
    this.state = {
      textBarValue: "",
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
          onChange={(target) => this.updateTextBarValue(target.target)}
        />
        <h1 value={this.state.textBarValue}></h1>
      </div>
    );
  }
}
