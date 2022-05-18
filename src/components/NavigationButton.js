import React, { useEffect, useState } from "react";
import styles from "./NavigationButton.module.css";

export default function NavigationButton(props) {
  const {state, setState} = useState({
    sideBarShows:true,
    animation : false
})

     
  

  
  
    return (
      <div className={styles.container} onClick={() => click(state, setState)} style={{ animationPlayState: state.animation ? "running" : "paused" }}>
        <div className={styles.bar}/>
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    );
  
}
function click(state, setState) {
  setState({animation :true})
  useEffect(() =>{
    setState({animation : false})
  },200)
    if (state.sideBarShows){
        
        
    }else{
      
    }
  
}