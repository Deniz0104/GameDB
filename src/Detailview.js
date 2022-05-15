import "./App.css";
import "./reset.css";
import "./constants/Globalstyle.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import { useState } from "react";
import { fetchJson } from "./methods/jsonMethods";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Ratings from "./detail_components/Ratings";
import PictureList from "./detail_components/PictureList";

function App() {
  const [game, setGame] = useState({ result: [] });
  const [pic, setPic] = useState({ result: { results: [] } });
  const [id, setId] = useState({});
  let params = useParams();
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
      <div className="sideBar">
      <SideBar location={useLocation()} />
      </div>
      <div className="main">
        <div
          className="contentbg"
          style={{
            backgroundImage: `radial-gradient( var(--color-semi-transparent-background) 40% ,var(--color-background),var(--color-background) ),url(${game.result.background_image})`,
          }}
        >
          <div className="nav">
            <NavigationBar />
          </div>
          <div>
            <div className="content">
              <TitleBar title={game.result.name} />
              <PictureList pics={pic.result.results} game={game.result.id} />
              <Ratings ratings={game.result.ratings} />
            </div>
          </div>
        </div>
      </div>
      <div className="rightspace" />
    </div>
  );
}

export default App;
