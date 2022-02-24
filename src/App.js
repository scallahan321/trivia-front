import './App.css';
import Game from './components/game_logic';
import Home from './components/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App(){
  
  return(
      

    <Router>
      
      <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game />}/>
      </Routes>

    </Router>
  );
}

export default App

/*<div>
      <Link to="/game">Game</Link>
      </div>*/