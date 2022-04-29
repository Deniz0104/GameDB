import "./App.css";
import "./reset.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Tilelist from "./components/Tilelist";
import TitleBar from "./components/h";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState({results:[]});

  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch(
      "https://api.rawg.io/api/games?key=07eaf5a4bce8434b85cf5c1f9f03a302",
      options
    )
      .then((response) => response.json())
      .then(setGames)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="main">
        <div className="nav">
          <NavigationBar />
        </div>
        <div>
          <div className="content">
            <TitleBar />
            <Tilelist parent={games} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
