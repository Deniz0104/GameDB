import React, { Component } from "react";
import styles from "./NavigationButton.module.css";

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarShows: true,
      animation: false,
    };
    this.button = React.createRef();
  }

  changeSidebar = () => {
    const wrap = this.props.target.current;
    wrap.classList.toggle("show");

    this.button.current.classList.toggle(styles.verticalButton);
    console.log("click");
  };
  render() {
    return (
      <div className={styles.navigationButton} onClick={this.changeSidebar} ref={this.button}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    );
  }
}
