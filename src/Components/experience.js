import React from 'react';

const Experience = () => {
    return (
        <>
            <div class = "row80" style = {{textAlign:"left"}} id = "exp">
                <div className = "column experienceTopSection">
                    <h5 className="numbering">04 | 05</h5>
                    <h5 className="subHeader">EXPERIENCE</h5>
                </div>
            </div>
            <div class = "row80" style = {{marginTop:"50px", textAlign:"left"}}>
                <div class = "column experienceCard" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="300">
                   <div class="icon-wrapper">
                       <i class="fas fa-users fa"></i>
                   </div>
                   <br></br>
                   <h5 className="experienceHeader">Customer Service</h5>
                   <h5 className="experienceHeader">Eden Foods Limited</h5>
                   <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                   <h5 className="experienceHeader">2016-2018</h5>
                   <br />
                   <h5 className="experienceText">Aided in stock management and control of the daily workflow within the store
                                                                                                                       to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.</h5>
                                                                                                                       <br></br>
               </div>
               <div class = "column experienceCard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                  <div class="icon-wrapper">
                     <i class="fas fa-cog"></i>
                  </div>
                  <br></br>
                  <h5 className="experienceHeader">Unit Testing Intern</h5>
                  <h5 className="experienceHeader">GPOS Limited</h5>
                  <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                  <h5 className="experienceHeader">Dec 2018- Feb 2019</h5>
                  <br />
                  <h5 className="experienceText">Performed black box and unit testing on a software application using Postman and manually testing the application itself.</h5>
                  <br></br>
              </div>
               <div class = "column experienceCard" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600">
                  <div class="icon-wrapper">
                       <i class="fas fa-code"></i>
                  </div>
                  <br></br>
                  <h5 className="experienceHeader">Front End Intern</h5>
                  <h5 className="experienceHeader">GPOS Limited</h5>
                  <hr style = {{width: "50%", backgroundColor: "#ff6666", height:"5px"}}></hr>
                  <h5 className="experienceHeader">Dec 2019- Feb 2020</h5>
                  <br />
                  <h5 className="experienceText">Developed templates using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote
                                                                                                                                                     extensive integration and unit tests for the templates. Engaged with Agile Methodologies. Improved
                                                                                                                                                     presentation skills via presenting the product to the team.</h5>
                                                                                                                                                     <br></br>
              </div>
            </div>
        </>
    );
}

export default Experience;