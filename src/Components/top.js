import React from 'react';

const Top = () => {
    return (
        <>
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
        </>
    )
}

export default Top;