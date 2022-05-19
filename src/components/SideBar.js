import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [["Home", "/"], ["All Games"], ["Top"]],
    };
    this.ref = props.cRef;
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
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.SideBar} >
          {this.createfield(this.state.config)}
        </div>
      </div>
    );
  }
}
