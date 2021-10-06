import React from 'react';

import cat from '../img/coot.jpg';

const Footer = () => {
    return (
      <div class = "row" style = {{backgroundColor: "#c85349", marginTop:"50px", color:"white"}} id = "con">
         <div class = "row80">
            <div class = "column">
                <h5 className="numbering" style={{marginTop:"50px", color:"white"}}>05 | 05</h5>
                <h3 style = {{fontSize: "25px", letterSpacing:"10px", marginTop:"30px"}}>CONTACT ME</h3>
                <h3 style = {{textAlign: "left", marginTop:"50px"}}>  </h3>
            </div>
         </div>
         <div class = "row80">
            <div class = "column" style = {{minHeight:"200px"}}>
                 <h3 style = {{color: "white", fontSize:"20px"}}>Let's get in touch!</h3>
                 <br />
                 <h3 style = {{color: "white", fontSize:"20px"}}>Mobile: (+64) 225840669</h3>
                 <div class = "zoomDiv">
                    <div class = "zoom2">
                        <a target="_blank" href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fab fa-linkedin fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
                    </div>
                    <div class = "zoom2">
                        <a target="_blank" href="https://github.com/SuKaiwen"><i class="fab fa-github fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
                    </div>
                    <div class = "zoom2">
                        <a target="_blank" href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px", color: "white"}}></i></a>
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
         <div class = "row80">
             <div class = "column" style = {{minHeight:"100px", justifyContent:"center", alignItems:"center"}}>
                <div class = "zoom">
                    <a href="#top"><i class="fas fa-chevron-up" style = {{color:"white"}}></i></a>
                </div>
                <h3 style = {{color: "white", fontSize:"15px", marginTop:"20px"}}>Back to top!</h3>
              </div>
          </div>
        </div>

    );
}

export default Footer;