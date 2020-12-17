import './App.css';
import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark" style = {{position: "fixed",
                                                                         top: "0",
                                                                         width: "100%",
                                                                         zIndex:"5"}}>
      <a class="navbar-brand" style = {{ color: "#5288DB" }} >KS</a>
      <a class="navbar-brand" style = {{ color: "#F5FAFA" }} >Kevin Su</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar" style={{
                                                                           flexDirection: "row",
                                                                           justifyContent: "flex-end",
                                                                           marginRight: "50px"
                                                                         }}>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" style = {{marginRight: "50px"}}>About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style = {{marginRight: "50px"}}>Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style = {{marginRight: "50px"}}>Work Experience</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
