import './App.css';
import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark" style = {{position: "fixed", top: "0", width: "100%", zIndex:"5", backgroundColor:"rgba(52, 52, 52, 0.8)", color:"white"
                                                                         }}>
      <a class="navbar-brand" style = {{ color: "white", marginLeft:"10%"}} >KS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar" style={{
                                                                           flexDirection: "row",
                                                                           justifyContent: "flex-end",
                                                                           marginRight: "5%"
                                                                         }}>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link navBarText" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navBarText" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navBarText" href="#exp">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navBarText" href="#con">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
