import './App.css';
import Game from './components/game';
import Home from './components/home';
import {BrowserRouter as Router, Routes, Route, Redirect, Link} from "react-router-dom";
import apiCall from './components/api_call';



function App(){
  
  return(
      

    <Router>
      <div>
      <Link to="/game">Game</Link>
      </div>

      <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game />}/>
      </Routes>

    </Router>
  );
}

export default App