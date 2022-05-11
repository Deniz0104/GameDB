import "./App.css";
import "./reset.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import { useState } from "react";
import { fetchJson } from "./methods/jsonMethods";
import { useParams } from "react-router-dom";
import Ratings from "./detail_components/Ratings";
import PictureList from "./detail_components/PictureList";

function App() {
  const [game, setGame] = useState({ result: [] });
  const [pic, setPic] = useState({ result: {results:[]} });
  const [id, setId] = useState({});
  let params = useParams();
  if(params.id !== id){
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
      <div
        className="contentbg"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(10, 10, 10, 0.6),rgba(10, 10, 10, 1)),url(${game.result.background_image})`,
        }}
      >
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="main">
          <div className="nav">
            <NavigationBar />
          </div>
          <div>
            <div className="content">
              <TitleBar title={game.result.name} />
              <Ratings ratings={game.result.ratings}/>
              {console.log(pic.result)}
              <PictureList pics={pic.result.results} game={game.result.id} />
            </div>
          </div>
        </div>
        <div className="rightspace"/>
      </div>
    </div>
  );
}

export default App;
