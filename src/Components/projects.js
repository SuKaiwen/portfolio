import React from 'react';

import data from './data';

import snipsnok from '../img/snipsnok.jpg';
import world2 from '../img/world2.jpg';
import brain from '../img/brain.jpg';
import travel3 from '../img/travel3.jpg';
import weather from '../img/weather.jpg';
import artica from '../img/artica.jpg';
import watch from '../img/watch.jpg';
import portfolio from '../img/portfolio.jpg';
import osrs from '../img/osrs.jpg';

const Projects = () => {
    return (
        <div style={{backgroundColor:"#00000d", width:"100%"}}>       
            <div class = "row" style = {{minHeight:"100px", marginBottom:"80px"}} id = "projects">
                <div class = "row80" style = {{color:"white", marginTop:"150px"}} >
                    <div class = "column" style={{textAlign:"left"}}>
                        <h5 className="numbering">03 | 05</h5>
                        <h5 className="subHeader">PROJECTS</h5>
                        <h5 className="projectsText">A showcase containing some of the many projects I have developed</h5>
                    </div>
                </div>
            </div>
            <div class = "row center">
                <div class="grid">
                    {data.map((x) => {
                        return (
                            <div class = "card-alt">
                                <img src={x.image} alt="Logo" style = {{width:"100%"}}/>
                                <div class = "card-text">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <p className="projectsText">{x.name}</p>
                                        <p className="projectsText">{x.date}</p>
                                        <a target="_blank" href={x.link}><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                                    </div>
                                    <div>
                                        {x.tags.map((tag) => {
                                            return (
                                                <p className="projectsSmall badge badge-success">{tag}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="projectsSmall">{x.desc}</p>
                                
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div class = "row" style = {{backgroundColor:"#00000d", height:"100px"}}>
            </div>
        </div>
    );
}

export default Projects;