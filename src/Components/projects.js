import React from 'react';

import snipsnok from '../img/snipsnok.jpg';
import world2 from '../img/world2.jpg';
import brain from '../img/brain.jpg';
import travel3 from '../img/travel3.jpg';
import news1 from '../img/news1.jpg';
import bookstore1 from '../img/bookstore1.jpg';
import weather from '../img/weather.jpg';
import profileJpg from '../img/Profile.jpg';
import artica from '../img/artica.jpg';
import watch from '../img/watch.jpg';
import portfolio from '../img/portfolio.jpg';
import osrs from '../img/osrs.jpg';

const Projects = () => {
    return (
        <div style={{backgroundColor:"#00000d"}}>
            
            <div class = "row" style = {{minHeight:"100px", marginBottom:"80px"}} id = "projects">
                <div class = "row80" style = {{color:"white", marginTop:"150px"}} >
                    <div class = "column" style={{textAlign:"left"}}>
                        <h5 className="numbering">03 | 05</h5>
                        <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px", marginTop:"30px"}}>PROJECTS</h5>
                        <h5 className="projectsText">A showcase containing some of the many projects I have developed</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row80" style={{textAlign:"left"}}>
                    <div class="col-md-4">
                        <img src={snipsnok} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">SnipSnok</p>
                            <p className="projectsText">2020</p>
                            <a href="https://github.com/SuKaiwen/SnipSnok"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">Hibernate</p>
                            <p className="projectsSmall badge badge-success">MySQL</p>
                            <p className="projectsSmall badge badge-success">Java</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">Spring</p>
                            <p className="projectsSmall badge badge-success">Axios</p>
                        </div>
                        <p className="projectsSmall">Developed alongside team members, SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</p>
                        <br />
                        <img src={artica} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Artica</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/Artica"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">Artica is a fake interior modelling and furniture design website. It features multiple pages with a cart functionality. Users are able to browse items and add multiple items to cart.</p>
                        <br />
                        <img src={brain} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Track my Brain</p>
                            <p className="projectsText">2019</p>
                            <a href="https://bitbucket.org/peterliang/usyd19p38/src/master/"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Algorithms</p>
                        </div>
                        <p className="projectsSmall">Our team developed a Chrome extension under a request of a client at a major telecommunication company that tracks activities on the Chrome browser, which allows the user to see what they've spent their time browsing on.</p>
                        <br />
                    </div>
                    <div class="col-md-4">
                        <img src={world2} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Countries of the World</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/WorldCountries"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">API Handling</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">Countries of the World takes
                       country data an external API and displayed on a React frontend. 
                       Users can view countries via continent or search for them. Users can also filter results by alphabetical order 
                       or population.</p>
                       <br />
                       <img src={watch} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Regal</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/Watchsite"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">Regal is a fake watch website I decided to make after seeing how nice Rolex's site is. React/CSS is fully coded by me (with the help of libraries). The UI/UX design is inspired by Rolex.</p>
                        <br />
                       <img src={weather} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Weather</p>
                            <p className="projectsText">2019</p>
                            <a href="https://github.com/SuKaiwen/weather"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">API Handling</p>
                        </div>
                        <p className="projectsSmall">Developed an application that displays the weather information for cities around the world. It fetches the information using OpenWeatherAPI and formats it in a dynamic and readable way using React components.</p>
                        
                    </div>
                    <div class="col-md-4">
                        <img src={travel3} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">Travel Companion</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/TravelCompanion"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Axios</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">Travel Companion is a travel assistance application that helps users identify various restaurants and hotels within
                       their local area or a place upon lookup. The users are able to filter result by rating (stars) and price ($$$).</p>
                       <br />
                       <img src={portfolio} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">My Portfolio</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/Portfolio"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">Created this portfolio to showcase my projects and let you get to know a little more about myself. This portfolio is hosted on AWS S3. The majority of the CSS is done by hand and there is minimal library usage.</p>
                        <br />
                       <img src={osrs} alt="Logo" style = {{width:"100%"}}/>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p className="projectsText">OSRS Beastiary</p>
                            <p className="projectsText">2021</p>
                            <a href="https://github.com/SuKaiwen/Old-School-Runescape-App"><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                        </div>
                        <div>
                            <p className="projectsSmall badge badge-success">HTML/CSS</p>
                            <p className="projectsSmall badge badge-success">React</p>
                            <p className="projectsSmall badge badge-success">JS</p>
                            <p className="projectsSmall badge badge-success">Bootstrap CSS</p>
                        </div>
                        <p className="projectsSmall">OSRS Beastiary is an application that pulls monster data from osrs-api.

Search and see the stats for over 2700 monsters in the game. Check the aggressive, defensive, slayer info as well as a DPS calculator. See their droptable with multiple sorting options.</p>
                    
                    </div>
                </div>
            </div>
        
            
            <div class = "row" style = {{backgroundColor:"#00000d", height:"100px"}}>
            </div>
        </div>
    );
}

export default Projects;