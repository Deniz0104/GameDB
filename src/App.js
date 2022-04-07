import './App.css';
import './reset.css';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import Tilelist from './components/Tilelist';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <div className='main1'>
        <div className='sideBar'>
          <SideBar />
        </div>
      </div>
      <div className='main2'>
        <div className='nav'>
          <NavigationBar />
        </div>
        <div>
          <div className='content'>
            <TitleBar />
            <Tilelist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
