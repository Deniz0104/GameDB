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
  const [games, setGames] = useState({results:[]});
  let params = useParams();
  useEffect(() => {
    fetchJson("GET","https://api.rawg.io/api/games/"+params.id,setGames)
  }, []);

  return (
    <div className="App">
        
        Test Complete
      {games.result.name}
    </div>
  );
}

export default App;
