import React from 'react';

function skills(props) {
    return (
        <div>
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
                                <div class = "zoom3">
                                   <i class="fab fa-git-square fa-4x" style = {{color:"black"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Git/Github</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fas fa-cog fa-4x" style = {{color:"#800000"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Jenkins</h5>
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
                                <div class = "zoom3">
                                   <i class="fab fa-vuejs fa-4x" style = {{color:"#41B883"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Vue js</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fas fa-wind fa-4x" style = {{color:"#00008b"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Tailwind CSS</h5>
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
                                <div class = "zoom3">
                                   <i class="fab fa-node-js fa-4x" style = {{color:"#00A300"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Node js</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fab fa-uikit fa-4x" style = {{color:"blue"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>Material UI</h5>
                                </div>
                                <div class = "zoom3">
                                   <i class="fab fa-stack-overflow fa-4x" style = {{color:"#f48024"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>"Problem Solving Platforms"</h5>
                                </div>
                            </div>
                            
                        </div>
                        <h5 className="bodyText" style={{marginTop:"100px"}}>I also have experience in... <i class="fas fa-thumbs-up" style={{color:"#ff6666"}}></i></h5>
                    
                        <div class = "row" style = {{width:"100%", justifyContent:"space-between"}}>
                        <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                            <div class = "zoom3">
                                <i class="fa fa-database fa-3x" style={{color:"green"}}></i>
                                <h5 style = {{textAlign: "center", fontSize:"15px"}}>MySQL</h5>
                            </div>
                            <div class = "zoom3">
                                <i class="fab fa-angular fa-3x" style={{color:"red"}}></i>
                                <h5 style = {{textAlign: "center", fontSize:"15px"}}>Angular</h5>
                            </div>
                            <div class = "zoom3">
                                <i class="fas fa-code fa-3x" style={{color:"blue"}}></i>
                                <h5 style = {{textAlign: "center", fontSize:"15px"}}>C++</h5>
                            </div>
                        </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-sitemap fa-3x" style={{color:"#ff8c00"}}></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Hibernate</h5>
                              </div>
                              <div class = "zoom3">
                                  <i class="fas fa-file-code fa-3x" style={{color:"yellow"}}></i>
                                  <h5 style = {{textAlign: "center", fontSize:"15px"}}>Redux</h5>
                             </div>
                             <div class = "zoom3">
                                   <i class="fas fa-code fa-3x" style = {{color:"#db7083"}}></i>
                                   <h5 style = {{textAlign: "center", fontSize:"15px"}}>MATLAB</h5>
                              </div>
                          </div>
                          <div class = "column2" style = {{width:"100%", alignItems:"center"}}>
                              <div class = "zoom3">
                                 <i class="fas fa-network-wired fa-3x" style = {{color:"#00fbfb"}}></i>
                                 <h5 style = {{textAlign: "center", fontSize:"15px"}}>Axios</h5>
                              </div>
                              <div class = "zoom3">
                                    <i class="fas fa-code fa-3x" style = {{color:"#442a5d"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>C#/.Net</h5>
                               </div>
                               <div class = "zoom3">
                                    <i class="fab fa-bitbucket fa-3x" style = {{color:"#2684FF"}}></i>
                                    <h5 style = {{textAlign: "center", fontSize:"15px"}}>Bitbucket</h5>
                               </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default skills;