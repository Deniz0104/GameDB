import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [["Home", "/"], ["All Games"], ["Top"]],
    };
    this.ref = React.createRef();
    this.button = React.createRef();
  }
  createoptions = (item, index) => {
    if (item[1] !== undefined) {
      if (item[1] !== this.props.location.pathname) {
        return (
          <li key={index}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "var(--color-text-primary)",
              }}
              to={item[1]}
            >
              {item[0]}
            </NavLink>
          </li>
        );
      }
    } else {
      return <li key={index}>{item[0]}</li>;
    }
  };
  createHeader = (arr) => {
    let output = "";
    arr.forEach((element) => {
      if (
        element[1] !== undefined &&
        element[1] === this.props.location.pathname
      ) {
        output = element[0];
      }
    });
    return (
      <div className={styles.currentLocation}>
        <h1>{output}</h1>
        {output !== "" ? <div className={styles.borderBottom} /> : ""}
      </div>
    );
  };
  createfield = (arr) => {
    return (
      <div>
        {this.createHeader(arr)}

        <ul className={styles.options}>{arr.map(this.createoptions)}</ul>
      </div>
    );
  };
  chnageSidebar = () => {
    const wrap = this.ref.current;
    wrap.classList.toggle(styles.show);

    this.button.current.classList.toggle(styles.verticalButton)
    console.log("click");
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navigationButton} ref={this.button} onClick={this.chnageSidebar}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </div>
        <div class={styles.SideBar} ref={this.ref}>
          {this.createfield(this.state.config)}
        </div>
      </div>
    );
  }
}
