import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './components/game_logic';
import FrontPage from './components/front_page';
import Logout from './components/logout';
import UserProfile from './components/user_profile';
import FullStats from './components/full_stats';


function App(){


 return(
    <div className="vh-100">
      <Router>
          <Routes>
              <Route path = "/game" element={<Game />}> </Route>
              <Route path = "/logout" element={<Logout />}> </Route>
              <Route path = "/home" element={<UserProfile />}> </Route>
              <Route path = "/" element={<FrontPage />}> </Route> 
              <Route path = "/fullstats" element={<FullStats />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App