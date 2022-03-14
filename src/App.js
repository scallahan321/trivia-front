import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './components/game_logic';
import FrontPage from './components/front_page';
import Logout from './components/logout';
import UserProfile from './components/user_profile';
import GameSetup from './components/game_setup';
import Results from './components/results';
import React from 'react';
import DetailResults from './components/detail_results';


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
              <Route path = "/results" element={<Results />}> </Route>
              <Route path = "/detailresults" element={<DetailResults />}></Route>
            
          </Routes>
        
      </Router>
    </div>
  
  );
}

export default App


