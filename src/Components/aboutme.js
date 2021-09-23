import React from 'react';

import me from '../img/me.jpg';
import udemy from '../img/udemy.jpg';
import youtube from '../img/youtube.jpg';
import freecodecamp from '../img/freecodecamp.jpg';
import w3school from '../img/w3school.jpg';
import painting from '../img/painting.jpg';
import landscape from '../img/landscape.jpg';

const AboutMe = () => {
    return (
        <>
            <div class = "row" id = "about">
                <div class = "row80" >
                    <div class = "column" style = {{marginTop:"250px"}}>
                        <div className="centerText">
                            <img src={me} alt="Logo" style = {{width:"200px", height:"200px", borderRadius:"50%", marginBottom:"20px"}}/>
                            <p className="numbering">02 | 05</p>
                            <h5 className="title">ABOUT ME</h5>
                            <h5 className="subtitle2">A few words from me...</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "row" style = {{marginTop:"100px", marginBottom:"80px"}}>
                <div class = "row80">
                    <div class = "column" data-aos="fade-right" data-aos-duration="800" style = {{textAlign:"left"}}>
                        <h5 className="bodyName">KEVIN SU</h5>
                        <h5 className="bodyTitle">University of Sydney 2017-2021</h5>
                        <h5 className="bodyTitle">BEHons(Software) Graduate</h5>
                        <br />
                        <div>
                            <p class="badge badge-primary">React</p>
                            <p class="badge badge-primary">HTML</p>
                            <p class="badge badge-primary">CSS</p>
                            <p class="badge badge-primary">JavaScript</p>
                            <p class="badge badge-primary">API</p>
                            <p class="badge badge-primary">Version Control</p>
                            <p class="badge badge-primary">UI/UX to some extent...</p>
                        </div>
                        <div>
                            <p class="badge badge-success">Passionate</p>
                            <p class="badge badge-success">Fast Learner</p>
                            <p class="badge badge-success">Ambitious</p>
                        </div>
                        
                        <br />
                        <h5 className="bodyTitle">Mobile: (+22) 584 0669</h5>
                        <br />
                        <div class = "zoomDiv" style = {{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                           <div class = "zoom2">
                               <a target="_blank" href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           </div>
                           <div class = "zoom2">
                               <a target="_blank" href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           </div>
                           <div class = "zoom2">
                               <a target="_blank" href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "#ff6666"}}></i></a>
                           </div>
                       </div>
                    </div>
                    <div class = "column" data-aos="fade-left"data-aos-duration="800" style = {{textAlign:"left"}}>
                        <br />
                        <h5 className="bodyText">I'm a web developer from <span style={{color:"blue", fontWeight:"bold"}}>Auckland, New Zealand.</span> During highschool I took interest in subjects that enable my creativity such as art and graphical design.</h5>
                        <h5 className="bodyText">I have an interest in all aspects of web development (<span style={{color:"blue", fontWeight:"bold"}}>both frontend and backend</span>) and love to learn new things. I like to code things from scratch and bring life to awesome ideas. In my spare time I enjoy socialising with friends or chasing competitive ranks in various games.</h5>
                        <br />
                        <h5 className="bodyText">And if you're curious my personality type is <a target="_blank" href="https://www.16personalities.com/esfp-personality"><span className="badge badge-success">ESFP</span></a></h5>
                        
                    </div>
                </div>
            </div>
            <div class = "row">
                <div class = "column">
                    <div class = "parallax" style = {{color:"white", marginTop:"50px"}}>
                        <div class = "column" style = {{justifyContent:"center", alignItems:"center", height:"200px"}}>
                             <a class = "button" target="_blank" href="Resume.pdf">DOWNLOAD RESUME</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "row" style = {{backgroundColor:"white"}}>
                <div class = "row80">
                    <div class = "column" style = {{textAlign:"left", color:"black", marginTop:"50px"}}>
                        <h5 className="bodyName">RESOURCES</h5>
                        <h5 className="bodyText">I love to learn new things. Resources I use include...</h5>
                    </div>
                </div>
            </div>

            <div class = "row" style = {{backgroundColor:"white"}}>
                <div class = "row80">
                    <div class = "column" data-aos="fade-up"  style = {{textAlign:"left",marginTop:"30px", justifyContent:"space-between"}}>
                        <img src={udemy} class = "learningIcon" alt="Logo"/>
                        
                        <p className="bodyText">Udemy is a good source of knowledge about all things programming!</p>
                    </div>
                    <div class = "column" data-aos="fade-up"  style = {{textAlign:"left",marginTop:"30px", justifyContent:"space-between"}}>
                        <img src={youtube} class = "learningIcon" alt="Logo"/>
                        
                        <p className="bodyText">From Youtube, I learnt the core concepts of React and many CSS tricks!</p>
                    </div>
                    <div class = "column" data-aos="fade-up" style = {{textAlign:"left", marginTop:"30px", justifyContent:"space-between"}}>
                        <img src={freecodecamp} class = "learningIcon" alt="Logo"/>
                        
                        <p className="bodyText">Great tutorial on React and frontend development frameworks like SCSS.</p>
                    </div>
                    <div class = "column" data-aos="fade-up" style = {{textAlign:"left", marginTop:"30px", justifyContent:"space-between"}}>
                        <img src={w3school} class = "learningIcon" alt="Logo"/>
                        
                        <p className="bodyText">Source of my roots, from learning basic HTML, CSS and JS back in 2018!</p>
                    </div>
                </div>
            </div>

            <div class="row skills">
                <div class="column">
                    <div class = "parallax3" style={{height:"100vh"}}>
                    </div>
                </div>
                <div class="column skillsTextSpace">
                    <div className="skillsSpace">
                    </div>
                    <div className="skillsHeader">
                        <h5 className="bodyName">SKILLS </h5>
                        <h5 className="bodyText">Below is a quick overview of my main technical skills and tools I like to use...</h5>
                    </div>
                    <div classname="skillsMain">
                    <div class = "column" style = {{justifyContent:"center", alignItems:"center"}}>
                        <h5 className="bodyText">I'm comfortable working with... <i class="fas fa-heart" style={{color:"#ff6666"}}></i></h5>
                        <div class = "row" style = {{width:"100%", justifyContent:"space-between"}}>
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
                            <h5 className="bodyText" style={{marginTop:"100px"}}>I also have experience in... <i class="fas fa-thumbs-up" style={{color:"#ff6666"}}></i></h5>
                        
                            <div class = "row" style = {{width:"100%", justifyContent:"space-between"}}>
                            <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fa fa-database fa-4x" style={{color:"green"}}></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>MySQL</h5>
                              </div>
                              <div class = "zoom3">
                                  <i class="fab fa-angular fa-4x" style={{color:"red"}}></i>
                                  <h5 style = {{textAlign: "center", fontSize:"15px"}}>Angular</h5>
                              </div>
                              <div class = "zoom3">
                                    <i class="fas fa-code fa-4x" style={{color:"blue"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>C++</h5>
                               </div>
                          </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-sitemap fa-4x" style={{color:"#ff8c00"}}></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Hibernate</h5>
                              </div>
                              <div class = "zoom3">
                                  <i class="fas fa-file-code fa-4x" style={{color:"yellow"}}></i>
                                  <h5 style = {{textAlign: "center", fontSize:"15px"}}>Redux</h5>
                             </div>
                             <div class = "zoom3">
                                   <i class="fas fa-code fa-4x" style = {{color:"#db7083"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>MATLAB</h5>
                              </div>
                          </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-network-wired fa-4x" style = {{color:"#00fbfb"}}></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Axios</h5>
                              </div>
                              <div class = "zoom3">
                                    <i class="fas fa-code fa-4x" style = {{color:"#442a5d"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>C#/.Net</h5>
                               </div>
                          </div>
                         </div>
                      </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AboutMe;