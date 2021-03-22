import './App.css';
import backgroundImg from './img/wp.jpg';
import profileImg from './img/link.jpg';
import profileJpg from './img/Profile.jpg';
import snipsnok from './img/snipsnok.jpg';
import snipsnok2 from './img/snipsnok2.jpg';
import opera from './img/opera.jpg';
import cat from './img/coot.jpg';
import mount from './img/mount3.jpg';
import amazingrace from './img/amazingrace.jpg';
import bounce from './img/bounce.jpg';
import weather from './img/weather.jpg';
import stars from './img/stars.jpg';
import paint from './img/paint.jpg';
import flower from './img/flower.jpg';
import bookstore from './img/bookstore.jpg';
import work from './img/work.jpg';
import amazing2 from './img/amazing2.jpg';

import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">

      <div style = {{backgroundColor: "#fafafa", minHeight:"1000px"}}>
        <div class = "row" style = {{backgroundColor:"#FFEEE2", height:"1000px"}}>
            <div class="wrapper" style = {{backgroundColor:"#FFEEE2", height:"1000px"}} id = "about">
                <div class="three" style = {{backgroundColor:"white", padding:"40px", zIndex:"1"}}>
                   <h1 style = {{fontSize: "3.5em", fontFamily: "Playfair Display"}}>Hi I'm Kevin Su.</h1>
                   <br></br>
                   <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display"}}>Welcome to my portfolio!</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display"}}>I'm an aspiring web developer from Auckland, New Zealand. I undertook a Bachelor of Software Engineering Honors degree at the University of Sydney and is scheduled to graduate in 2021. I am interested in web development especially the front end aspect.</h5>
                   <br></br>
                   <h5 style = {{fontFamily: "Playfair Display"}}>Mobile: +64 22 584 0669</h5>
                   <div style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div>
                           <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
                </div>
                <div class="five">
                    <div class = "imagecontainer">
                         <img src={work} alt="Logo" style = {{width:"200%", height:"200%", minWidth:"225px", minHeight:"225px", maxWidth:"400px", maxHeight:"400px"}}/>
                     </div>
                </div>
                <div class="six" style = {{zIndex:"2"}}>
                    <div class = "imagecontainer">
                        <img src={profileImg} alt="Logo" style = {{minWidth:"200px", minHeight:"200px"}}/>
                    </div>
                </div>
          </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#c85349"}}>
            <div class = "row70" style = {{backgroundColor:"#c85349", textAlign:"center"}}>
                <div class = "column">
                    <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display", color:"#FFEEE2", marginBottom:"20px"}}>My Skills</h5>
                </div>
            </div>
            <div class = "row70" style = {{backgroundColor:"#c85349", textAlign:"center"}}>
                <div class = "column">
                      <i class="fa fa-database fa-5x" style = {{color:"white"}}></i>
                      <h5 style = {{color:"#FFEEE2"}}>Database</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>MySQL</h5>
                  </div>
                  <div class = "column" >
                      <i class="fab fa-python fa-5x" style = {{color:"white"}}></i>
                      <h5 style = {{color:"#FFEEE2"}}>Python</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>React, Django, Axios</h5>
                  </div>
                  <div class = "column" >
                      <i class="fab fa-html5 fa-5x" style = {{color:"white"}}></i>
                      <h5 style = {{color:"#FFEEE2"}}>Web Dev</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>HTML, CSS, React, JS, C#/.Net</h5>
                  </div>
                  <div class = "column" >
                      <i class="fas fa-sitemap fa-5x" style = {{color:"white"}}></i>
                      <h5 style = {{color:"#FFEEE2"}}>ORM</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>Hibernate</h5>
                  </div>
                  <div class = "column" >
                    <i class="fas fa-code fa-5x" style = {{color:"white"}}></i>
                    <h5 style = {{color:"#FFEEE2"}}>Code</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>C++, Java, MATLAB</h5>
                </div>
                <div class = "column" >
                    <i class="fas fa-users fa-5x" style = {{color:"white"}}></i>
                    <h5 style = {{color:"#FFEEE2"}}>Interpersonal</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto", color:"#FFEEE2"}}>Friendly, Positive, Optimistic</h5>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#FFEEE2", minHeight:"100px"}}>
            <div class = "row70" style = {{backgroundColor:"#FFEEE2", textAlign:"center"}}>
                <div class = "column">
                    <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display", marginTop: "10%", marginBottom:"20px", color:"#c85349"}} id = "projects">Projects</h5>
                    <hr style = {{marginBottom: "10px", width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                </div>
            </div>
            <div class = "row70" style = {{alignItems:"center", justifyContent:"center", textAlign:"left"}}>
                <div class="wrapper" style = {{backgroundColor:"#FFEEE2", height:"1000px"}}>
                    <div class="three" style = {{backgroundColor:"white", padding:"40px", zIndex:"1"}}>
                       <h1 style = {{fontSize: "3.5em", fontFamily: "Playfair Display"}}>SnipSnok</h1>
                       <br></br>
                       <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display"}}>Full Stack</h5>
                       <hr style = {{width: "90%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                       <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display"}}>SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</h5>
                       <br></br>
                       <h5 style = {{fontFamily: "Playfair Display"}}>Skills: React, Python, Hibernate, Spring, Axios</h5>
                       <div style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                           <div>
                               <a href="https://github.com/SuKaiwen/SnipSnok"><i class="fab fa-github fa-2x" style = {{padding:"20px", color:"#FF7F50"}}></i></a>
                           </div>
                           <Button>Learn More</Button>
                       </div>
                    </div>
                    <div class="five">
                        <div class = "imagecontainer">
                             <img src={snipsnok} alt="Logo" style = {{width:"200%", height:"200%", minWidth:"225px", minHeight:"225px", maxWidth:"400px", maxHeight:"400px"}}/>
                         </div>
                    </div>
                    <div class="six" style = {{zIndex:"2"}}>
                        <div class = "imagecontainer">
                            <img src={snipsnok2} alt="Logo" style = {{minWidth:"200px", minHeight:"200px"}}/>
                        </div>
                    </div>
                  </div>
            </div>
            <div class = "row70" style = {{alignItems:"center", justifyContent:"center", textAlign:"left"}}>
                <div class="wrapper" style = {{backgroundColor:"#FFEEE2", height:"1000px"}}>
                  <div class="three" style = {{backgroundColor:"white", padding:"40px", zIndex:"1"}}>
                     <h1 style = {{fontSize: "3.5em", fontFamily: "Playfair Display"}}>Amazing Race</h1>
                     <br></br>
                     <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display"}}>Front End</h5>
                     <hr style = {{width: "90%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                     <h5 style = {{textAlign: "left", fontSize:"1.1em", fontFamily: "Playfair Display"}}>The Amazing Race is a website that mimics the mechanics from the TV show of the same name. Users are able to host races, set locations, reorder locations and participate in races.</h5>
                     <br></br>
                     <h5 style = {{fontFamily: "Playfair Display", fontSize:"1.1em"}}>Skills: HTML, CSS, JS, React, Python, AJAX, external API usage</h5>
                     <div style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                         <div>
                             <a href="https://github.com/SuKaiwen/AmazingRace"><i class="fab fa-github fa-2x" style = {{padding:"20px", color:"#FF7F50"}}></i></a>
                         </div>
                         <Button>Learn More</Button>
                     </div>
                  </div>
                  <div class="one">
                      <div class = "imagecontainer">
                           <img src={amazingrace} alt="Logo" style = {{width:"200%", height:"200%", minWidth:"225px", minHeight:"225px", maxWidth:"400px", maxHeight:"400px"}}/>
                       </div>
                  </div>
                  <div class="two" style = {{zIndex:"0"}}>
                      <div class = "imagecontainer">
                          <img src={amazing2} alt="Logo" style = {{maxWidth:"400px", maxHeight:"400px"}}/>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#FFEEE2", minHeight:"100px"}}>
            <div class = "row70" style = {{textAlign:"center", justifyContent: "center", alignItems:"center"}}>
                <h3 style = {{fontFamily: "Playfair Display", fontSize: "40px", color:"#c85349"}} id = "exp"  >Experience</h3>
            </div>
            <hr style = {{marginBottom: "10px", width: "50%", backgroundColor: "#ff6666", height:"5px", marginBottom:"80px"}}></hr>
            <div class = "row80" style = {{minHeight:"600px"}}>
                <div class = "column" style = {{alignItems:"center", marginBottom:'20px'}}>
                    <Card style={{ width: '90%', height:"auto", textAlign:"left"}}>
                         <Card.Body>
                           <div style = {{textAlign:"center", marginBottom:"30px"}}>
                            <i class="fas fa-tasks fa-5x" style = {{color: "#ff6666"}}></i>
                           </div>
                           <Card.Title style = {{color: "black", fontSize:"25px"}}>Assistant Manager</Card.Title>
                           <Card.Text >
                             <h3 style = {{color: "black", fontSize:"15px"}}>Eden Foods Limited</h3>
                             <h3 style = {{color: "black", fontSize:"15px"}}>2016 - 2018</h3>
                             <hr></hr>
                             Aided in stock management and control of the daily workflow within the store
                             to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.
                             <hr></hr>
                             <h3 style = {{color: "black", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                           </Card.Text>
                         </Card.Body>
                       </Card>
                 </div>
                 <div class = "column" style = {{alignItems:"center", marginBottom:'20px'}}>
                     <Card style={{ width: '90%', height:"auto", textAlign:"left"}}>
                        <Card.Body>
                          <div style = {{textAlign:"center", marginBottom:"30px"}}>
                            <i class="fas fa-cog fa-5x" style = {{color: "#ff6666"}}></i>
                          </div>
                          <Card.Title style = {{color: "black", fontSize:"25px"}}>Unit Testing Intern</Card.Title>
                          <Card.Text >
                            <h3 style = {{color: "black",fontSize:"15px"}}>GPOS Limited</h3>
                            <h3 style = {{color: "black", fontSize:"15px"}}>Dec 2018 - Feb 2019</h3>
                            <hr></hr>
                            Performed black box testing on a general point of sales software application using Postman and manually testing the application itself.
                            <hr></hr>
                            <h3 style = {{color: "black", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </div>
                  <div class = "column" style = {{alignItems:"center", marginBottom:'20px'}}>
                       <Card style={{ width: '90%', height:"auto", textAlign:"left"}}>
                          <Card.Body>
                            <div style = {{textAlign:"center", marginBottom:"30px"}}>
                            <i class="fas fa-file-code fa-5x" style = {{color: "#ff6666"}}></i>
                           </div>
                            <Card.Title style = {{color: "black", fontSize:"25px"}}>Front End Intern</Card.Title>
                            <Card.Text >
                              <h3 style = {{color: "black", fontSize:"15px"}}>GPOS Limited</h3>
                              <h3 style = {{color: "black", fontSize:"15px"}}>Dec 2019 - Feb 2020</h3>
                              <hr></hr>
                              Developed templates for a payments screen using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote
                              extensive integration and unit tests for the created payments screen. Engaged with Agile Methodologies (weekly sprints). Improved
                              presentation skills via presenting the product to the team.
                              <hr></hr>
                              <h3 style = {{color: "black", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                   </div>
              </div>
        </div>
        <div class = "row" style = {{backgroundColor: "#c85349"}} id = "con">
             <div class = "row70">
                <div class = "column">
                    <h3 style = {{color: "white", fontSize: "40px", marginTop:"50px"}}>Contact Me</h3>
                    <h3 style = {{textAlign: "left", marginTop:"50px"}}>  </h3>
                </div>
             </div>
             <div class = "row70">
                <div class = "column" style = {{minHeight:"200px"}}>
                     <h3 style = {{color: "white", fontSize:"20px"}}>Let's get in touch!</h3>
                     <h3 style = {{color: "white", fontSize:"20px", marginTop:"20px"}}>Mobile: +64 22 584 0669</h3>
                     <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color:"white"}}></i></a>
                     <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color:"white"}}></i></a>
                     <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color:"white"}}></i></a>
                 </div>
                <div class = "column" style = {{minHeight:"350px", alignItems:"center", textAlign:"left"}}>
                    <img src={cat} alt="Logo" style = {{maxWidth:"200px", maxHeight:"200px", borderRadius: 300/ 2 }}/>
                    <h3 style = {{color: "white", fontSize:"20px", marginTop:"20px"}}>Thank you for making it all the way to the end!</h3>
                </div>
             </div>
            </div>
        </div>
    </div>
  );
}

export default App;
