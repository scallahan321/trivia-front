import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './components/game_logic';
import FrontPage from './components/front_page';
import Logout from './components/logout';
import UserProfile from './components/user_profile';
import GameSetup from './components/game_setup';
import React from 'react';


function App(){


  
 return(
   <div className="main">
      <Router>
        
          <Routes>
              <Route path = "/game-setup" element={<GameSetup />}> </Route>
              <Route path = "/game" element={<Game />}> </Route>
              <Route path = "/logout" element={<Logout />}> </Route>
              <Route path = "/home" element={<UserProfile />}> </Route>
              <Route path = "/" element={<FrontPage />}> </Route> 
            
          </Routes>
        
      </Router>
    </div>
  
  );
}

export default App


