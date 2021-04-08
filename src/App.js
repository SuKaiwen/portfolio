import './App.css';
import profileImg from './img/link.jpg';
import profileJpg from './img/Profile.jpg';
import snipsnok from './img/snipsnok.jpg';
import snipsnok2 from './img/snipsnok2.jpg';
import snipsnok3 from './img/snipsnok3.jpg';
import snipsnok4 from './img/snipsnok4.jpg';
import snipsnok5 from './img/snipsnok5.jpg';
import snipsnok6 from './img/snipsnok6.jpg';
import snipsnok7 from './img/snipsnok7.jpg';
import snipsnok8 from './img/snipsnok8.jpg';
import snipsnok9 from './img/snipsnok9.jpg';
import snipsnok10 from './img/snipsnok10.jpg';
import snipsnok11 from './img/snipsnok11.jpg';
import snipsnok12 from './img/snipsnok12.jpg';

import cat from './img/coot.jpg';
import bounce from './img/bounce.jpg';
import weather from './img/weather.jpg';
import work from './img/work.jpg';
import me from './img/me.jpg';
import udemy from './img/udemy.jpg';
import youtube from './img/youtube.jpg';
import freecodecamp from './img/freecodecamp.jpg';
import w3school from './img/w3school.jpg';

import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
        <div class = "row">
            <div class = "column" style = {{height:"100vh"}}>
                <div class = "parallax2">
                    <div class = "centered" style = {{color:"white", textAlign:"center"}}>
                       <h5 style = {{fontSize: "6vw", fontFamily: "Playfair Display", fontWeight:"bold", color:"white", letterSpacing:"1vw"}}>KEVIN SU</h5>
                       <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                       <h5 style = {{fontSize:"2vw", fontFamily: "Playfair Display"}}>WELCOME TO MY PORTFOLIO</h5>
                    </div>
                    <div class = "centered" style = {{marginTop:"15%"}}>
                        <div class = "zoom">
                            <a href="#about"><i class="fas fa-chevron-down" style = {{color:"white"}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#ffffff"}} id = "about">
            <div class = "row70" >
                <div class = "column" style = {{textAlign:"left", marginTop:"100px"}}>
                    <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px"}}>ABOUT ME</h5>
                    <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080"}}>A few words from me...</h5>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#ffffff", marginTop:"50px", marginBottom:"80px"}}>
            <div class = "row70">
                <div class = "column" style = {{color:"black", alignItems:"center"}}>
                      <img src={me} alt="Logo" style = {{width:"200px", height:"200px", borderRadius:"50%"}}/>
                      <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display", marginTop:"20px"}}>KEVIN SU</h5>
                      <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                      <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>University of Sydney 2017-2021</h5>
                      <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>BEHons(Software) Grad</h5>
                </div>
                <div class = "column" style = {{textAlign:"left", padding:"10px"}}>
                   <h5 style = {{fontSize:"22px", fontFamily: "Playfair Display", color:"black", fontWeight:"bold"}}>I'm an avid learner with a passion for web development.</h5>
                   <h5 style = {{fontSize:"1em", fontFamily: "Playfair Display", color:"#808080", marginTop:"20px"}}>I'm an aspiring web developer from Auckland, New Zealand. Throughout my childhood I have grown to appreciate the visual aspects that this world has to offer. During highschool I took interest in subjects that enable my creativity such as art and graphical design.</h5>
                   <h5 style = {{fontSize:"1em", fontFamily: "Playfair Display", color:"#808080", marginTop:"20px"}}>I have an interest in all aspects of web development (both frontend and backend) and love to learn new things. I like to code things from scratch and bring life to awesome ideas. In my spare time I enjoy socialising with friends or chasing competitive ranks in various games.</h5>
                   <h5 style = {{fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Mobile: +64 22 584 0669</h5>
                   <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div class = "zoom2">
                           <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                       <div class = "zoom2">
                           <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                       <div class = "zoom2">
                           <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <div class = "row">
            <div class = "column" style = {{height:"200px"}}>
                <div class = "parallax" style = {{color:"white"}}>
                    <div class = "column" style = {{justifyContent:"center", alignItems:"center", height:"200px"}}>
                         <a class = "button" href="Resume.pdf">DOWNLOAD RESUME</a>
                    </div>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"white"}}>
            <div class = "row70">
                <div class = "column" style = {{textAlign:"left", color:"black", marginTop:"30px"}}>
                    <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px"}}>LEARNING</h5>
                    <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080"}}>I love to learn new things. Resources I use include...</h5>
                </div>
            </div>
        </div>

        <div class = "row" style = {{backgroundColor:"white"}}>
            <div class = "row80">
                <div class = "column" style = {{textAlign:"left", alignItems:"center", justifyContent:"center", color:"black", marginTop:"30px"}}>
                    <img src={udemy} class = "learningIcon" alt="Logo"/>
                </div>
                <div class = "column" style = {{textAlign:"left", color:"black", marginTop:"30px", alignItems:"center", justifyContent:"center"}}>
                    <img src={youtube} class = "learningIcon" alt="Logo"/>
                </div>
                <div class = "column" style = {{textAlign:"left", color:"black", marginTop:"30px", alignItems:"center", justifyContent:"center"}}>
                    <img src={freecodecamp} class = "learningIcon" alt="Logo"/>
                </div>
                <div class = "column" style = {{textAlign:"left", color:"black", marginTop:"30px", alignItems:"center", justifyContent:"center"}}>
                    <img src={w3school} class = "learningIcon" alt="Logo"/>
                </div>
            </div>
        </div>

        <div class = "row">
            <div class = "row70" style = {{marginTop:"100px", textAlign:"left"}}>
                <div class = "column">
                    <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px"}}>MY SKILLS</h5>
                    <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080"}}>Aside from inverting a binary tree, I also have experience in...</h5>
                    <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"white", marginTop:"50px"}}>
            <div class = "row70" style = {{backgroundColor:"white", textAlign:"center", color:"black"}}>
                <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                      <div class = "zoom3">
                        <i class="fa fa-database fa-5x"></i>
                      </div>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Database</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display"}}>MySQL</h5>
                  </div>
                  <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                      <div class = "zoom3">
                          <i class="fab fa-python fa-5x"></i>
                        </div>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Python</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>Django, Axios</h5>
                  </div>
                  <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                      <div class = "zoom3">
                        <i class="fab fa-html5 fa-5x"></i>
                      </div>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Web Dev</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto", fontSize:"14px"}}>HTML, CSS, React, JS, C#/.Net</h5>
                  </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"white", marginTop:"50px"}}>
            <div class = "row70" style = {{backgroundColor:"white", textAlign:"center", color:"black"}}>
                <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                      <div class = "zoom3">
                          <i class="fas fa-sitemap fa-5x"></i>
                        </div>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>ORM</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>Hibernate</h5>
                  </div>
                  <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                    <div class = "zoom3">
                      <i class="fas fa-code fa-5x"></i>
                    </div>
                    <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Code</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>C++, Java, MATLAB</h5>
                </div>
                <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                    <div class = "zoom3">
                      <i class="fas fa-users fa-5x"></i>
                    </div>
                    <h5 style = {{textAlign: "center", fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Interpersonal</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto", fontSize:"16px"}}>Friendly, Positive, Optimistic</h5>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"white", marginTop:"50px", marginBottom:"50px"}}>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e", minHeight:"100px"}} id = "projects">
            <div class = "row70" style = {{textAlign:"right", color:"white", marginTop:"100px"}} >
                <div class = "column">
                   <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px"}}>PROJECTS</h5>
                   <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080"}}>A showcase containing some of the many projects I have developed</h5>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e"}}>
            <div class = "row70" style = {{alignItems:"center", justifyContent:"center", textAlign:"left"}}>
               <div class = "column" style = {{color:"black", textAlign:"left", padding:"5%", color:"white"}}>
                   <br></br>
                   <h5 style = {{fontSize: "30px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px", color:"#808080"}}>01</h5>
                   <h5 style = {{fontSize: "20px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px"}}>SNIPSNOK</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"white", fontWeight:"bold"}}>2020</h5>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Developed along with team members as a part of a university project. SnipSnok is an application designed to help struggling content creators
                                                                                                                        in Australia. Users can donate to others, follow others and post/like content they enjoy!</h5>
                   <br></br>
                   <h5 style = {{fontFamily: "Playfair Display"}}>Skills: Hibernate, MySQL, Java, HTML, CSS, React, Spring, Axios</h5>
                   <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div class = "zoom2">
                           <a href="https://github.com/SuKaiwen/SnipSnok"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
               </div>
               <div class = "column">

               </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e"}}>
            <div class = "row70" style = {{alignItems:"center", justifyContent:"center", textAlign:"left"}}>
                <div class="gridRow" style = {{justifyContent:"center"}}>
                  <div class="gridColumn">
                      <img src={snipsnok6} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                      <img src={snipsnok8} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                      <img src={snipsnok4} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                      <img src={snipsnok5} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                    </div>
                  <div class="gridColumn">
                    <img src={snipsnok} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                    <img src={snipsnok9} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                  </div>
                  <div class = "gridColumn">
                    <img src={snipsnok7} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                    <img src={snipsnok3} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                  </div>
                  <div class = "gridColumn">
                      <img src={snipsnok11} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                      <img src={snipsnok12} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e"}}>
            <div class = "row70" style = {{textAlign:"left"}}>
               <div class = "column" style = {{color:"white", padding:"5%"}}>
                  <br></br>
                  <h5 style = {{fontSize: "30px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px", color:"#808080"}}>02</h5>
                  <h5 style = {{fontSize: "20px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px"}}>WEATHER APP</h5>
                  <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                  <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"white", fontWeight:"bold"}}>2020</h5>
                  <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Developed an application that displays the weather information for cities around the world. It fetches the information using
                                                                                                                       OpenWeatherAPI and formats it in a dynamic and readable way using React components.
                   </h5><br></br>
                  <h5 style = {{fontFamily: "Playfair Display"}}>Skills: HTML, CSS, React, Algorithms, JavaScript, Data Structures, API Usage</h5>
                  <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                      <div class = "zoom2">
                          <a href="https://github.com/SuKaiwen/weather"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                      </div>
                  </div>
                  <img src={weather} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
               </div>
               <div class = "column" style = {{color:"white", padding:"5%"}}>
                   <br></br>
                   <h5 style = {{fontSize: "30px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px", color:"#808080"}}>03</h5>
                   <h5 style = {{fontSize: "20px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"8px"}}>PORTFOLIO</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"white", fontWeight:"bold"}}>2021</h5>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Created this portfolio all on my own to showcase my projects and let you get to know a little more about myself. This portfolio is hosted on AWS S3.</h5>
                   <br></br>
                   <h5 style = {{fontFamily: "Playfair Display"}}>Skills: HTML, CSS, React</h5>
                   <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div class = "zoom2">
                           <a href="https://github.com/SuKaiwen/portfolio"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
                    <img src={profileJpg} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
               </div>
            </div>
        </div>
        <div class = "row70" style = {{textAlign:"left"}} id = "exp">
            <div class = "column" style = {{marginTop:"50px", textAlign:"left"}}>
                <h5 style = {{fontSize: "25px", fontFamily: "Playfair Display", fontWeight:"bold", letterSpacing:"10px", marginTop:"30px"}}>EXPERIENCE</h5>
            </div>
        </div>
        <div class = "row80" style = {{marginTop:"50px", textAlign:"left"}}>
            <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black", alignItems:"center"}}>
               <div class="icon-wrapper">
                   <i class="fas fa-users fa"></i>
               </div>
               <br></br>
               <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Customer Service</h5>
               <h5 style = {{fontSize: "1.1em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Eden Foods Limited</h5>
               <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
               <h5 style = {{fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>2016-2018</h5>
               <h5 style = {{fontSize:"1em", fontFamily: "Playfair Display", color:"#808080"}}>Aided in stock management and control of the daily workflow within the store
                                                                                                                   to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.</h5>
                                                                                                                   <br></br>
           </div>
           <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black", alignItems:"center"}}>
              <div class="icon-wrapper">
                 <i class="fas fa-cog"></i>
              </div>
              <br></br>
              <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Unit Testing Intern</h5>
              <h5 style = {{fontSize: "1.1em", fontFamily: "Playfair Display", fontWeight:"bold"}}>GPOS Limited</h5>
              <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Dec 2018- Feb 2019</h5>
              <h5 style = {{textAlign: "left", fontSize:"1em", fontFamily: "Playfair Display", color:"#808080"}}>Performed black box and unit testing on a software application using Postman and manually testing the application itself.</h5>
              <br></br>
          </div>
           <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black", alignItems:"center"}}>
              <div class="icon-wrapper">
                   <i class="fas fa-code"></i>
                </div>
              <br></br>
              <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Frontend Intern</h5>
              <h5 style = {{fontSize: "1.1em", fontFamily: "Playfair Display", fontWeight:"bold"}}>GPOS Limited</h5>
              <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Dec 2019- Feb 2020</h5>
              <h5 style = {{textAlign: "left", fontSize:"1em", fontFamily: "Playfair Display", color:"#808080"}}>Developed templates using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote
                                                                                                                                                 extensive integration and unit tests for the templates. Engaged with Agile Methodologies. Improved
                                                                                                                                                 presentation skills via presenting the product to the team.</h5>
                                                                                                                                                 <br></br>
          </div>
        </div>
        <div class = "row" style = {{backgroundColor: "#c85349", marginTop:"50px"}} id = "con">
             <div class = "row70">
                <div class = "column">
                    <h3 style = {{color: "white", fontSize: "25px", marginTop:"50px", letterSpacing:"10px"}}>CONTACT ME</h3>
                    <h3 style = {{textAlign: "left", marginTop:"50px"}}>  </h3>
                </div>
             </div>
             <div class = "row70">
                <div class = "column" style = {{minHeight:"200px"}}>
                     <h3 style = {{color: "white", fontSize:"20px"}}>Let's get in touch!</h3>
                     <h3 style = {{color: "white", fontSize:"20px", marginTop:"20px"}}>Mobile: +64 22 584 0669</h3>
                     <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                        <div class = "zoom2">
                            <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
                        </div>
                        <div class = "zoom2">
                            <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
                        </div>
                        <div class = "zoom2">
                            <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
                        </div>
                    </div>
                 </div>
                <div class = "column" style = {{minHeight:"250px", alignItems:"center", textAlign:"left"}}>
                    <img src={cat} alt="Logo" style = {{maxWidth:"200px", maxHeight:"200px", borderRadius: 300/ 2 }}/>

                </div>
                <div class = "column">
                    <h3 style = {{color: "white", fontSize:"20px", marginTop:"20px"}}>Thank you for making it all the way to the end!</h3>
                </div>
             </div>
             <div class = "row70">
                 <div class = "column" style = {{minHeight:"100px", justifyContent:"center", alignItems:"center"}}>
                    <div class = "zoom">
                        <a href="#top"><i class="fas fa-chevron-up" style = {{color:"white"}}></i></a>
                    </div>
                    <h3 style = {{color: "white", fontSize:"15px", marginTop:"20px"}}>Back to top!</h3>
                  </div>
              </div>

            </div>
        </div>
  );
}

export default App;
