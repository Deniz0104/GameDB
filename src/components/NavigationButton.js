import React, { Component } from "react";
import styles from "./NavigationButton.module.css";

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarShows: true,
      animation: false,
    };
    this.wrapperRef = React.createRef
  }
 
  click = () => {
    if (!this.state.animation) {
      setTimeout(() => {
        this.setState({ animation: false });
      }, 200);
      this.setState({ animation: true });
    }
      

    if (this.state.sideBarShows) {
    } else {
    }
  };
  render() {
    return (
      <div
        className={styles.container}
        onClick={this.click}
      >
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    );
  }
}
