import './App.css';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import Tilelist from './components/Tilelist';

function App() {
  return (
    <div className="App">
      <div className='nav'>
      <NavigationBar/>
      </div>
      <div className='sideBar'>
      <SideBar/>
      </div>
      <div className='header'>
      <tileBar/>
      </div>
      <div className='content'>
      <Tilelist/>
      </div>
    </div>
  );
}

export default App;
