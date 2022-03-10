import './App.css';
import Game from './components/game_logic';
import Home from './components/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from './components/login';
import Logout from './components/logout';
import RegisterForm from './components/register';
import UserProfile from './components/user_profile';
import GameSetup from './components/game_setup';

function App(){
  
  return(
    <Router>
      
      <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/setup" element={<GameSetup />}/>
          <Route path="/game" element={<Game />}/>
          <Route path = "/login" element={<LoginForm />}/>
          <Route path = "/logout" element={<Logout />}/>
          <Route path = "/register" element={<RegisterForm />}/>
          <Route path = "/setup" element = {<GameSetup />}/>
          <Route path="/user-profile" element={<UserProfile />}/>
          
      </Routes>

    </Router>
  );
}

export default App

/*<div>
      <Link to="/game">Game</Link>
      </div>*/