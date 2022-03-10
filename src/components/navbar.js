import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    

    return (
        <div style={{textAlign:"center"}}>
             <Link to="/user-profile" style={{display:"inline-block", margin:"10px"}}>Home</Link>
             <Link to="/login" style={{display:"inline-block", margin:"10px"}}>Login</Link>
             <Link to="/register" style={{display:"inline-block", margin:"10px"}}>Register</Link>
             <Link to="/logout" style={{display:"inline-block", margin:"10px"}}>Logout</Link>
             <Link to ="/game-setup" style={{display:"inline-block", margin:"10px"}}>New Game</Link>
             
        </div>
       
    )

}

export default Navbar