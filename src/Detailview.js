import "./App.css";
import "./reset.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Tilelist from "./components/Tilelist";
import TitleBar from "./components/TitleBar";
import { useEffect, useState } from "react";
import { fetchJson } from "./methods/jsonMethods";
import { useParams } from "react-router-dom";

function App() {
  const [game, setGame] = useState({ result: [] });
  let params = useParams();
  useEffect(() => {
    fetchJson("GET", "https://api.rawg.io/api/games/" + params.id, setGame);
  }, []);

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
