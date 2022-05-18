import React, { Component } from "react";
import styles from "./NavigationButton.module.css";

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sideBarShows:true,
        animation : {animationPlayState: "paused",
    animationDirection: "alternate"}
    };
     
  }

  click = () =>{
      if (this.state.sideBarShows){
          this.setState({animation : {animationPlayState: "running"}})
      }else{
        this.setState({animation : {animationPlayState: "running"}})
      }
    
  }
  render() {
    return (
      <div className={styles.container} onClick={this.click} style={this.state.animation}>
        <div className={styles.bar}/>
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    );
  }
}
