import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


export default class Navbar extends React.Component  {
   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
   // document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  //  document.getElementById("main").style.marginLeft= "0";
  }
  render(){
  return (
    <nav className="navbar">
      
                   <p aling="left"> <button className="openbtn" onClick={this.openNav}>☰ Menu</button> </p>   
      <h2>EduLearn</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/Registration">Sign up</Link>       
      </div>

      <div id="mySidebar" className="sidebar">
            <Button  className="closebtn" onClick={this.closeNav}>×</Button>
            <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/Registration">Sign up</Link>       
          </div>

    </nav>
  );
}
}
