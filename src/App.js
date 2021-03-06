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

import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <div style = {{backgroundColor: "#fafafa", minHeight:"1000px"}}>
        <div class="imagecontainer">
          <img src={mount} alt="Logo" style = {{width:"100%", height:"70%", maxHeight:"900px"}}/>
          <div class="centered">
            <h1 style = {{fontSize:"5vw"}}>Hi I'm Kevin and welcome to my website!</h1>
          </div>
        </div>
        <div className="container-fluid" style = {{marginBottom:"50px"}}>
            <div class = "row" id = "about">
                <div class = "column" style = {{minHeight: "600px", width: "50%", alignItems:"center", padding:"10px"}}>
                    <img src={profileImg} alt="Logo" style = {{border:"10px solid #fafafa", maxWidth:"200px", maxHeight:"200px", borderRadius: 300/ 2, marginTop:"50px" }}/>
                    <h1 style = {{fontSize: 60, fontFamily: "Roboto"}}> Kevin Su </h1>
                    <br></br>
                    <h5 style = {{fontSize: 20, fontFamily: "Roboto"}}>Mobile: +64 22 584 0669</h5>
                    <hr style = {{minHeight: "5px"}}></hr>
                    <h3 style = {{fontFamily: "Roboto", fontSize: 20}}> Linkedin | Github | Email </h3>
                    <div>
                        <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px"}}></i></a>
                        <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px"}}></i></a>
                        <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px"}}></i></a>
                    </div>
                    <hr style = {{minHeight: "5px"}}></hr>
                </div>
                <div class = "column" style = {{minHeight: "600px", width: "50%", alignItems:"center", padding:"10px"}}>
                    <img src={opera} alt="Logo" style = {{border:"10px solid #fafafa", maxWidth:"200px", maxHeight:"200px", borderRadius: 300/ 2, marginTop:"50px" }}/>
                    <h5 style = {{textAlign: "center", marginTop:"10px", fontFamily: "Roboto", fontSize: "30px", color: "#606060"}}>The University of Sydney</h5>
                    <h5 style = {{textAlign: "center", marginTop:"10px", fontFamily: "Roboto", color: "#606060"}}>BEHons(Software) Grad</h5>
                    <h3 style = {{textAlign: "left", marginTop:"50px", fontFamily: "Roboto"}}> Hi there! </h3>
                    <h5 style = {{textAlign: "left", fontFamily: "Roboto"}}>I'm Kevin Su, an aspiring web developer from Auckland, New Zealand. I undertook a Bachelor of Software Engineering Honors degree at the University of Sydney and is scheduled to graduate in 2021. I am interested in web development especially the front end aspect.</h5>
                </div>
                <div class = "column" style = {{minHeight: "600px", width: "50%", alignItems: "center"}}>
                    <h3 style = {{marginTop:"50px", fontFamily: "Roboto", fontSize:"40px"}}> Skills </h3>
                    <div class = "row">
                          <div class = "column" style = {{marginTop:"10px"}}>
                              <i class="fa fa-database fa-5x" style = {{color: "#ff6666"}}></i>
                              <h5>Database</h5>
                              <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>MySQL</h5>
                          </div>
                          <div class = "column" style = {{marginTop:"10px"}}>
                              <i class="fab fa-python fa-5x" style = {{color: "#ff6666"}}></i>
                              <h5>Python</h5>
                              <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>React, Django, Axios</h5>
                          </div>
                      </div>
                    <div class = "row">
                        <div class = "column" style = {{marginTop:"10px"}}>
                            <i class="fab fa-html5 fa-5x" style = {{color: "#ff6666"}}></i>
                            <h5>Web Dev</h5>
                            <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>HTML, CSS, React, JS, C#/.Net</h5>
                        </div>
                        <div class = "column" style = {{marginTop:"10px"}}>
                            <i class="fas fa-sitemap fa-5x" style = {{color: "#ff6666"}}></i>
                            <h5>ORM</h5>
                            <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>Hibernate</h5>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "column" style = {{marginTop:"10px"}}>
                            <i class="fas fa-code fa-5x" style = {{color: "#ff6666"}}></i>
                            <h5>Code</h5>
                            <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>C++, Java, MATLAB</h5>
                        </div>
                        <div class = "column" style = {{marginTop:"10px"}}>
                            <i class="fas fa-users fa-5x" style = {{color: "#ff6666"}}></i>
                            <h5>Interpersonal</h5>
                            <h5 style = {{textAlign: "center", fontFamily: "Roboto", color: "#606060"}}>Friendly, Positive, Optimistic</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style = {{backgroundColor: "#0C2D48", fontFamily: "Roboto", minHeight:"100%"}} id = "projects">
            <h3 style = {{backgroundColor: "#0C2D48", minHeight:"40px"}}></h3>
            <div class = "row">
                <div class = "column">
                    <h3 style = {{color: "#cedeef", fontFamily: "Roboto", fontSize: "40px"}}>Projects</h3>
                    <hr style = {{marginBottom: "80px", width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                </div>
             </div>
            <Row style = {{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                <Carousel style = {{maxWidth: "1000px", width:"100%", zIndex:"0", marginBottom:"100px"}}>
                  <Carousel.Item style = {{maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                    <Carousel.Caption>
                      <img src={profileJpg} style = {{zIndex:"0", position: "absolute"}} alt="Logo" style = {{width: "80%", maxHeight:"500px"}}/>
                      <h3 style = {{marginTop: "20px", color: "black", fontFamily: "Roboto", color:"white"}}>Portfolio</h3>
                      <p style = {{color: "white", fontFamily: "Roboto"}}>Created this portfolio to showcase my projects and you get to learn a little bit more about me!</p>
                      <p style = {{color: "white", fontFamily: "Roboto"}}>Skills: React, CSS</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item style = {{maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                      <Carousel.Caption>
                        <img src={snipsnok2} style = {{zIndex:"0"}} alt="Logo" style = {{width: "40%", maxHeight:"500px"}}/>
                        <img src={snipsnok}  style = {{zIndex:"0"}} alt="Logo" style = {{width: "40%", maxHeight:"500px"}}/>
                        <h3 style = {{color: "white", fontFamily: "Roboto"}}>SnipSnok</h3>
                        <p style = {{color: "white", fontFamily: "Roboto"}}>Created along with team members as a part of a university project! SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</p>
                        <p style = {{color: "white", fontFamily: "Roboto"}}>Skills: React, Python, Hibernate, Spring, Axios</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                   <Carousel.Item style = {{maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                     <Carousel.Caption>
                       <img src={amazingrace} style = {{zIndex:"0", position: "absolute"}} alt="Logo" style = {{width: "70%", maxHeight:"500px"}}/>
                       <h3 style = {{color: "white", fontFamily: "Roboto", marginTop:"20px"}}>Amazing Race</h3>
                       <p style = {{color: "white", fontFamily: "Roboto"}}>Created along with team member as part of a university assignment! The Amazing Race is a website that mimics the mechanics from the TV show of the same name. Users are able to host races, set locations, reorder locations and participate in races.</p>
                       <p style = {{color: "white", fontFamily: "Roboto"}}>Skills: HTML, CSS, JS, React, Python, AJAX, external API usage</p>
                     </Carousel.Caption>
                   </Carousel.Item>
                </Carousel>
            </Row >
        </div>
        <h3 style = {{color: "black", fontFamily: "Roboto", marginTop: "40px", fontSize: "40px"}} id = "exp"  >Experience</h3>
        <h3 style = {{textAlign: "left", marginTop:"50px"}}>  </h3>
        <div class = "row" style = {{alignItems:"center", justifyContent:"center", position:"absolute", marginLeft:"0px"}}>
            <div class = "bluebox"></div>
        </div>
        <div class = "row70">
            <div class = "row" style = {{marginBottom:"50px"}}></div>
            <div class = "column" style = {{alignItems:"center"}}>
                <Card style={{ width: '90%', height:"auto", textAlign:"left", minHeight:"525px"}}>
                     <Card.Body>
                       <div style = {{textAlign:"center", marginBottom:"30px"}}>
                        <i class="fas fa-tasks fa-5x" style = {{color: "#ff6666"}}></i>
                       </div>
                       <Card.Title style = {{color: "black", fontFamily: "Roboto", fontSize:"25px"}}>Assistant Manager</Card.Title>
                       <Card.Text >
                         <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Eden Foods Limited</h3>
                         <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>2016 - 2018</h3>
                         <hr></hr>
                         Aided in stock management and control of the daily workflow within the store
                         to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.
                         <hr></hr>
                         <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                       </Card.Text>
                     </Card.Body>
                   </Card>
             </div>
             <div class = "column" style = {{alignItems:"center"}}>
                 <Card style={{ width: '90%', height:"auto", textAlign:"left", minHeight:"525px"}}>
                    <Card.Body>
                      <div style = {{textAlign:"center", marginBottom:"30px"}}>
                        <i class="fas fa-cog fa-5x" style = {{color: "#ff6666"}}></i>
                      </div>
                      <Card.Title style = {{color: "black", fontFamily: "Roboto", fontSize:"25px"}}>Unit Testing Intern</Card.Title>
                      <Card.Text >
                        <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>GPOS Limited</h3>
                        <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Dec 2018 - Feb 2019</h3>
                        <hr></hr>
                        Performed black box testing on a general point of sales software application using Postman and manually testing the application itself.
                        <hr></hr>
                        <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
              <div class = "column" style = {{alignItems:"center"}}>
                   <Card style={{ width: '90%', height:"auto", textAlign:"left", minHeight:"525px"}}>
                      <Card.Body>
                        <div style = {{textAlign:"center", marginBottom:"30px"}}>
                        <i class="fas fa-file-code fa-5x" style = {{color: "#ff6666"}}></i>
                       </div>
                        <Card.Title style = {{color: "black", fontFamily: "Roboto", fontSize:"25px"}}>Front End Intern</Card.Title>
                        <Card.Text >
                          <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>GPOS Limited</h3>
                          <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Dec 2019 - Feb 2020</h3>
                          <hr></hr>
                          Developed templates for a payments screen using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote
                          extensive integration and unit tests for the created payments screen. Engaged with Agile Methodologies (weekly sprints). Improved
                          presentation skills via presenting the product to the team.
                          <hr></hr>
                          <h3 style = {{color: "black", fontFamily: "Roboto", fontSize:"15px"}}>Location: Auckland, NZ</h3>
                        </Card.Text>
                      </Card.Body>
                    </Card>
               </div>
        </div>
        <div style = {{backgroundColor: "#0C2D48", fontFamily: "Roboto", minHeight:"100%", marginTop:"50px"}} id = "con">
             <h3 style = {{backgroundColor: "#0C2D48", minHeight:"40px"}}></h3>
             <div class = "row">
                <div class = "column">
                    <h3 style = {{color: "#cedeef", fontFamily: "Roboto", fontSize: "40px"}}>Contact Me</h3>
                    <h3 style = {{textAlign: "left", marginTop:"50px"}}>  </h3>
                </div>
             </div>
             <div class = "row">
                <div class = "column" style = {{minHeight:"500px"}}>
                     <h3 style = {{color: "white", fontFamily: "Roboto", fontSize:"30px"}}>Let's get in touch!</h3>
                     <h3 style = {{color: "white", fontFamily: "Roboto", fontSize:"20px", marginTop:"20px"}}>Mobile: +64 22 584 0669</h3>
                     <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px"}}></i></a>
                             <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px"}}></i></a>
                             <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px"}}></i></a>
                 </div>
                <div class = "column" style = {{minHeight:"500px", alignItems:"center", textAlign:"left"}}>
                    <img src={cat} alt="Logo" style = {{maxWidth:"250px", maxHeight:"250px", borderRadius: 300/ 2 }}/>
                    <h3 style = {{color: "white", fontFamily: "Roboto", fontSize:"20px", marginTop:"20px"}}>Thank you for making it all the way to the end!</h3>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
}

export default App;
