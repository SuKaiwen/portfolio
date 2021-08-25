import React from 'react';

import me from '../img/me.jpg';
import udemy from '../img/udemy.jpg';
import youtube from '../img/youtube.jpg';
import freecodecamp from '../img/freecodecamp.jpg';
import w3school from '../img/w3school.jpg';

const AboutMe = () => {
    return (
        <>
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
                        <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080"}}>I have other skills on top of inverting a binary tree!</h5>
                        <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                    </div>
                </div>
            </div>
            <div class = "row" style = {{backgroundColor:"white"}}>
                <div class = "row70" style = {{backgroundColor:"white", textAlign:"center", color:"black"}}>
                    <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                        <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080", marginBottom:"20px", marginTop:"10px"}}>I'm comfortable working with...</h5>
                        <div class = "row" style = {{width:"100%", justifyContent:"center"}}>
                            <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                                <div class = "zoom3">
                                   <i class="fab fa-python fa-4x" style = {{color:"#00008b"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Python</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fab fa-html5 fa-4x" style = {{color:"#ff8c00"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>HTML</h5>
                                </div>
                                <div class = "zoom3">
                                    <i class="fab fa-css3-alt fa-4x" style = {{color:"#0000ff"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>CSS</h5>
                                </div>
                            </div>
                            <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                                <div class = "zoom3">
                                   <i class="fab fa-sass fa-4x" style = {{color:"#db7083"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>SASS</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fab fa-bootstrap fa-4x" style = {{color:"#442a5d"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>BootStrap</h5>
                                </div>
                                <div class = "zoom3">
                                    <i class="fab fa-react fa-4x" style = {{color:"#00fbfb"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>React</h5>
                                </div>
                            </div>
                            <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                                <div class = "zoom3">
                                   <i class="fab fa-js-square fa-4x" style = {{color:"#ffea00"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>JavaScript</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fab fa-java fa-4x" style = {{color:"#00008b"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Java</h5>
                                </div>
                            </div>
                         </div>
                      </div>
                     <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                      <h5 style = {{fontSize: "18px", fontFamily: "Playfair Display", color:"#808080", marginBottom:"20px", marginTop:"10px"}}>I also have experience in...</h5>
                      <div class = "row" style = {{width:"100%", justifyContent:"center"}}>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fa fa-database fa-4x" ></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>MySQL</h5>
                              </div>
                              <div class = "zoom3">
                                  <i class="fab fa-angular fa-4x"></i>
                                  <h5 style = {{textAlign: "center", fontSize:"15px"}}>Angular</h5>
                              </div>
                              <div class = "zoom3">
                                    <i class="fas fa-code fa-4x"></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>C++</h5>
                               </div>
                          </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-sitemap fa-4x"></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Hibernate</h5>
                              </div>
                              <div class = "zoom3">
                                  <i class="fas fa-file-code fa-4x"></i>
                                  <h5 style = {{textAlign: "center", fontSize:"15px"}}>jQuery, Redux</h5>
                             </div>
                             <div class = "zoom3">
                                   <i class="fas fa-code fa-4x"></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>MATLAB</h5>
                              </div>
                          </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-network-wired fa-4x"></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Axios</h5>
                              </div>
                              <div class = "zoom3">
                                    <i class="fas fa-code fa-4x"></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>C#/.Net</h5>
                               </div>
                          </div>
                       </div>
                     </div>
                </div>
            </div>
            <div class = "row" style = {{backgroundColor:"white", marginTop:"50px", marginBottom:"50px"}}>
            </div>
        </>
    )
}

export default AboutMe;