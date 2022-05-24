import "./App.css";
import "./reset.css";
import "./constants/Globalstyle.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import React,{ useState } from "react";
import { fetchJson } from "./methods/jsonMethods";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Ratings from "./detail_components/Ratings";
import PictureList from "./detail_components/PictureList";
import Description from "./detail_components/Description";
import NavigationButton from "./components/NavigationButton";

function Detailview() {
  const [game, setGame] = useState({ result: [] });
  const [pic, setPic] = useState({ result: { results: [] } });
  const [id, setId] = useState({});
  let params = useParams();
  let sideBar = React.createRef();
  if (params.id !== id) {
    setId(params.id);
    fetchJson("GET", "https://api.rawg.io/api/games/" + params.id, setGame);
    fetchJson(
      "GET",
      `https://api.rawg.io/api/games/${params.id}/screenshots`,
      setPic
    );
  }

  return (
    <div className="App">
      <div className="leftSpace">
      
      <div className="sideBar" ref={sideBar}>
        
        <SideBar location={useLocation()} cRef={sideBar} />
        
      </div>
      
    </div>
      <div className="dmain">
        <div
          className="contentbg"
          style={{
            backgroundImage: `radial-gradient( var(--color-semi-transparent-background) 40% ,var(--color-background),var(--color-background) ),url(${game.result.background_image})`,
          }}
        >
          <NavigationButton target={sideBar}/>
          <div className="nav">
            <NavigationBar />
          </div>
          <div>
            <div className="content">
              <TitleBar title={game.result.name} />
              <PictureList pics={pic.result.results} game={game.result.id} />
              <Ratings ratings={game.result.ratings} />
              <Description description={game.result.description}/>
            </div>
          </div>
        </div>
      </div>
      <div className="rightspace" />
    </div>
  );
}

export default Detailview;
