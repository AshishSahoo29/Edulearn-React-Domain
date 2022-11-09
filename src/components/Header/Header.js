import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>EduLearn</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/Registration">Sign up</Link>       
      </div>
    </nav>
  );
}
 
export default Navbar;