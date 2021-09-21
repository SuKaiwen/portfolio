import React from 'react';

const Experience = () => {
    return (
        <>
            <div class = "row80" style = {{textAlign:"left"}} id = "exp">
                <div class = "column" style = {{marginTop:"100px", textAlign:"left"}}>
                    <h5 className="numbering">04 | 05</h5>
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
        </>
    );
}

export default Experience;