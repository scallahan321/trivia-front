import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Navbar() {

    

    return (
        <div  style={{textAlign:"left"}}>
             <Link to="/home" className="text-secondary" style={{display:"inline-block", margin:"10px"}}>Home</Link>
             <Link to="/logout"  className="text-secondary" style={{display:"inline-block", margin:"10px"}}>Logout</Link>
             {/* <Link to ="/game-setup" className="text-secondary" style={{display:"inline-block", margin:"10px"}}>New Game</Link> */}
             
        </div>
       
    )

}

export default Navbar