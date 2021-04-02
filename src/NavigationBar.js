import './App.css';
import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light" style = {{position: "fixed",
                                                                         top: "0",
                                                                         width: "100%",
                                                                         zIndex:"5"}}>
      <a class="navbar-brand" style = {{ color: "#c85349", marginLeft:"10%"}} >KS</a>
      <a class="navbar-brand" style = {{ color: "black", fontWeight:"bold" }} >Kevin Su</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style = {{color:"black"}}>
        <span class="navbar-toggler-icon" style = {{textcolor:"black"}}></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar" style={{
                                                                           flexDirection: "row",
                                                                           justifyContent: "flex-end",
                                                                           marginRight: "5%",
                                                                           color: "black"
                                                                         }}>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about" style = {{marginRight: "40px", color: "black", fontWeight:"bold"}}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects" style = {{marginRight: "40px", color: "black", fontWeight:"bold"}}>Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#exp" style = {{marginRight: "40px", color: "black", fontWeight:"bold"}}>Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#con" style = {{marginRight: "40px", color: "black", fontWeight:"bold"}}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
