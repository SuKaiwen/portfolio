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
import nz from './img/nz-01.jpg';
import me from './img/me.jpg';

import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <div style = {{backgroundColor: "#ffffff", minHeight:"1000px"}}>
        <div class = "imagecontainer">
            <img src={nz} alt="Logo" style = {{width:"80%", marginTop:"5%"}}/>
            <div class = "centered" style = {{color:"black", textAlign:"left"}}>
               <h5 style = {{fontSize: "2vw", fontFamily: "Playfair Display"}}>Hi I'm </h5>
               <h5 style = {{fontSize: "6vw", fontFamily: "Playfair Display", fontWeight:"bold", color:"#ff6666"}}>Kevin Su</h5>
               <hr style = {{width: "50%", backgroundColor: "black", height:"5px"}}></hr>
               <h5 style = {{fontSize:"2vw", fontFamily: "Playfair Display"}}>An avid learner with a passion for web development</h5>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#ffffff", marginTop:"100px"}}>
            <div class = "row70" style = {{justifyContent:"center", alignItems:"center"}}>
                <img src={profileImg} alt="Logo" style = {{borderRadius:"50%"}}/>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#ffffff", marginTop:"50px"}}>
            <div class = "row70">
                <div class = "column">
                   <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display"}}>A Few Words About Me</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "center", fontSize:"2em", fontFamily: "Playfair Display", color:"black", fontWeight:"bold"}}>Hi, I'm an aspiring web developer from Auckland, New Zealand. Throughout my childhood I have grown to appreciate the visual aspects that this world has to offer. During my five year tenure as a student at Auckland Grammar School I took interest in subjects that enable my creativity such as art and graphical design.</h5>
                   <h5 style = {{textAlign: "center", fontSize:"1.5em", fontFamily: "Playfair Display", color:"#808080", marginTop:"20px"}}>I have an interest in all aspects of web development (both frontend and backend) and love to learn new things. I like to code things from scratch and bring life to awesome ideas. In my spare time I enjoy socialising with friends or chasing competitive ranks in various games.</h5>
                   <h5 style = {{fontFamily: "Playfair Display", marginTop:"20px", fontWeight:"bold"}}>Mobile: +64 22 584 0669</h5>
                   <div style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div>
                           <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           <a href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#ffffff"}}>
            <div class = "row80">
               <div class = "column" style = {{color:"black", justifyContent:"center", alignItems:"center", padding:"10%"}}>
                   <img src={me} alt="Logo" style = {{width:"80%", marginTop:"5%"}}/>
               </div>
               <div class = "column" style = {{color:"black", textAlign:"left", padding:"10%"}}>
                   <br></br>
                   <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Education</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"black", fontWeight:"bold"}}>University of Sydney 2017-2021</h5>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}> I first attended The University of Auckland as a first year engineering student before setting my sights overseas. In Australia I undertaken a more specialised degree; Bachelor of Software Engineering Honors at The University of Sydney. Throughout my four year degree I learnt many new things such as
                   programming principles, methodologies and engineering professionalism. I am scheduled to graduate in mid 2021 and hope to utilize my acquired knowledge in the real world.</h5>
                   <br></br>
               </div>
            </div>
        </div>
        <div class = "row70" style = {{marginTop:"100px", textAlign:"left"}}>
            <div class = "column">
                <h5 style = {{fontSize: "4em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Skills</h5>
                <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display", color:"#808080"}}>I have the following experience in...</h5>
                <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"white", marginTop:"50px"}}>
            <div class = "row70" style = {{backgroundColor:"white", textAlign:"center", color:"black"}}>
                <div class = "column">
                      <i class="fa fa-database fa-5x"></i>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display"}}>Database</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Playfair Display"}}>MySQL</h5>
                  </div>
                  <div class = "column" >
                      <i class="fab fa-python fa-5x"></i>
                      <h5>Python</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>React, Django, Axios</h5>
                  </div>
                  <div class = "column" >
                      <i class="fab fa-html5 fa-5x"></i>
                      <h5>Web Dev</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>HTML, CSS, React, JS, C#/.Net</h5>
                  </div>
                  <div class = "column" >
                      <i class="fas fa-sitemap fa-5x"></i>
                      <h5>ORM</h5>
                      <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>Hibernate</h5>
                  </div>
                  <div class = "column" >
                    <i class="fas fa-code fa-5x"></i>
                    <h5>Code</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>C++, Java, MATLAB</h5>
                </div>
                <div class = "column" >
                    <i class="fas fa-users fa-5x"></i>
                    <h5>Interpersonal</h5>
                    <h5 style = {{textAlign: "center", fontFamily: "Roboto"}}>Friendly, Positive, Optimistic</h5>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e", minHeight:"100px", marginTop:"200px"}}>
            <div class = "row70" style = {{textAlign:"right", color:"white"}}>
                <div class = "column">
                   <h5 style = {{fontSize: "4em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Projects</h5>
                   <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display", color:"#808080"}}>A showcase containing some of the many projects I have developed</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                </div>
            </div>
        </div>
        <div class = "row" style = {{backgroundColor:"#1e1e1e"}}>
            <div class = "row70" style = {{alignItems:"center", justifyContent:"center", textAlign:"left"}}>
                <div class = "column" style = {{color:"black", justifyContent:"center", alignItems:"center", padding:"5%"}}>
                   <img src={snipsnok} alt="Logo" style = {{width:"100%", marginTop:"5%"}}/>
               </div>
               <div class = "column" style = {{color:"black", textAlign:"left", padding:"10%", color:"white"}}>
                   <br></br>
                   <h5 style = {{fontSize: "2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>SnipSnok</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"white", fontWeight:"bold"}}>2020</h5>
                   <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Developed along with team members as a part of a university project. SnipSnok is an application designed to help struggling content creators
                                                                                                                        in Australia. Users can donate to others, follow others and post/like content they enjoy!</h5>
                   <br></br>
                   <h5 style = {{fontFamily: "Playfair Display"}}>Skills: Hibernate, MySQL, Java, HTML, CSS, React, Spring, Axios</h5>
                   <div style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                       <div>
                           <a href="https://github.com/SuKaiwen/SnipSnok"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <div class = "row70" style = {{marginTop:"50px", textAlign:"left"}}>
            <div class = "column">
                <h5 style = {{fontSize: "4em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Experience</h5>
                <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
            </div>
        </div>
        <div class = "row70" style = {{marginTop:"50px", textAlign:"left"}}>
            <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black"}}>
               <br></br>
               <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Customer Service</h5>
               <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Eden Foods Limited</h5>
               <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
               <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>2016-2018</h5>
               <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Aided in stock management and control of the daily workflow within the store
                                                                                                                   to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.</h5>
                                                                                                                   <br></br>
           </div>
           <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black"}}>
              <br></br>
              <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Unit Testing Intern</h5>
              <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>GPOS Limited</h5>
              <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Dec 2018- Feb 2019</h5>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Performed black box and unit testing on a software application using Postman and manually testing the application itself.</h5>
              <br></br>
          </div>
           <div class = "column" style = {{color:"black", textAlign:"left", padding:"3%", color:"black"}}>
              <br></br>
              <h5 style = {{fontSize: "1.5em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Frontend Intern</h5>
              <h5 style = {{fontSize: "1.25em", fontFamily: "Playfair Display", fontWeight:"bold"}}>GPOS Limited</h5>
              <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", fontWeight:"bold"}}>Dec 2019- Feb 2020</h5>
              <h5 style = {{textAlign: "left", fontSize:"1.2em", fontFamily: "Playfair Display", color:"#808080"}}>Developed templates for a payments screen using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote
                                                                                                                                                 extensive integration and unit tests for the created payments screen. Engaged with Agile Methodologies (weekly sprints). Improved
                                                                                                                                                 presentation skills via presenting the product to the team.</h5>
                                                                                                                                                 <br></br>
          </div>
        </div>
        <div class = "row" style = {{backgroundColor: "#c85349", marginTop:"50px"}} id = "con">
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
