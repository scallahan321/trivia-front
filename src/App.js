import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './components/game_logic';
import FrontPage from './components/front_page';
import LoginForm from './components/login';
import Logout from './components/logout';
import RegisterForm from './components/register';
import UserProfile from './components/user_profile';
import GameSetup from './components/game_setup';
import React from 'react';


function App(){


  
 return(
   
    <Router>
      <div className='main'></div>
    
      <Routes>
          <Route path = "/game-setup" element={<GameSetup />}> </Route>
          <Route path = "/game" element={<Game />}> </Route>
          <Route path = "/login" element={<LoginForm />}> </Route>
          <Route path = "/register" element={<RegisterForm />}> </Route>
          <Route path = "/logout" element={<Logout />}> </Route>
          <Route path = "/user-profile" element={<UserProfile />}> </Route>
          <Route path = "/" element={<FrontPage />}> </Route> 
          
        
      
      </Routes>
      <div className='main'></div>
  </Router>
  
  );
}

export default App


