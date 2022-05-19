import "./App.css";
import "./reset.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Tilelist from "./components/Tilelist";
import TitleBar from "./components/TitleBar";
import React,{ useEffect, useState } from "react";
import { fetchJson } from "./methods/jsonMethods";
import { useLocation } from "react-router-dom";
import NavigationButton from "./components/NavigationButton";

function App() {
  const [games, setGames] = useState({ result: { results: [] } });
  let sideBar = React.createRef();
  useEffect(() => {
    fetchJson("GET", "https://api.rawg.io/api/games", setGames);
  }, []);

  return (
    <div className="App">
      <div className="leftSpace">
      
        <div className="sideBar" ref={sideBar}>
          
          <SideBar location={useLocation()} cRef={sideBar} />
          
        </div>
        
      </div>
      <div className="main">
      <NavigationButton target={sideBar}/>
        <div className="nav">
          <NavigationBar title="Games" />
        </div>
        <div>
          <div className="content">
            <TitleBar title="Games" />
            <Tilelist parent={games.result} />
          </div>
        </div>
      </div>
      <div className="rightspace" />
    </div>
  );
}

export default App;
