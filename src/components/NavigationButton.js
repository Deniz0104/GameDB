import React, { Component, useEffect } from "react";
import styles from "./NavigationButton.module.css";

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sideBarShows:true,
        animation : false
    };
     
  }

  click = () =>{
    this.setState({animation :true})
    useEffect(() =>{
      this.setState({animation : false})
    },200)
      if (this.state.sideBarShows){
          
          
      }else{
        
      }
    
  }
  render() {
    return (
      <div className={styles.container} onClick={this.click} style={{ animationPlayState: this.state.animation ? "running" : "paused" }}>
        <div className={styles.bar}/>
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    );
  }
}
