import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {

  
  return (
  
      <div className="nav">
        <div className="app-logo">
          <p>APP LOGO</p>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>DASHBOARD</Link></li>
            <li><Link to='/createads'>CREATE ADS</Link></li>
          </ul>
        </div>
      </div>
      
    
  );
};

export default Navbar;
