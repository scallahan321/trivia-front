import './App.css';
import Game from './components/game_logic';
import Home from './components/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TestToken from './components/test_token';
import LoginForm from './components/login';




function App(){
  
  return(
    <Router>
      
      <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game />}/>
          <Route path = "/login" element={<LoginForm />}/>
          
          <Route path="/test-token" element={<TestToken />}/>
          
      </Routes>

    </Router>
  );
}

export default App

/*<div>
      <Link to="/game">Game</Link>
      </div>*/