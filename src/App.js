import './App.css';
import backgroundImg from './img/wp.jpg';
import profileImg from './img/link.jpg';
import profileJpg from './img/Profile.jpg';
import snipsnok from './img/snipsnok.jpg';
import snipsnok2 from './img/snipsnok2.jpg';
import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

function App() {
  return (
    <div className="App">
      <div style = {{backgroundColor: "#fafafa", minHeight:"1000px"}}>
        <div class = "mosaic">
            <div class = "mosaic__item">
                <img src={backgroundImg} alt="Logo" style = {{width: "100%", maxHeight:"500px"}}/>
            </div>
            <div class = "mosaic__item">
                <img src={profileImg} alt="Logo" style = {{border:"10px solid #fafafa", minWidth:"150px", minHeight:"150px", borderRadius: 300/ 2 }}/>
            </div>
        </div>
        <h1> Kevin Su </h1>
        <hr style = {{minHeight: "5px"}}></hr>
        <Row>
            <Col style = {{minHeight: "100px"}}>
                <a href="https://www.linkedin.com/in/kevin-su-618163191/"><i class="fa fa-linkedin fa-2x" style = {{padding:"20px"}}></i></a>
                <a href="https://github.com/SuKaiwen"><i class="fa fa-github fa-2x" style = {{padding:"20px"}}></i></a>
                <a href="mailto:kevinsu@outlook.co.nz"><i class="fa fa-envelope fa-2x" style = {{padding:"20px"}}></i></a>
            </Col>
        </Row>
        <hr style = {{minHeight: "5px"}}></hr>
        <Row>
            <Col xs="6" style = {{minHeight: "700px"}}>
                <h3 style = {{textAlign: "left", marginTop:"100px"}}> About Me </h3>
                <h5 style = {{textAlign: "left"}}>I undertook a Bachelor of Software Engineering Honors course</h5>
                <h5 style = {{textAlign: "left"}}>at the University of Sydney and recently graduated (2021). </h5>
                <h5 style = {{textAlign: "left"}}>I am interested in full stack web development especially the </h5>
                <h5 style = {{textAlign: "left"}}>front end aspect.</h5>
            </Col>
            <Col xs="6" style = {{minHeight: "700px", maxWidth: "300px"}}>
                <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>
                <h5 style = {{textAlign: "left"}}>JavaScript</h5>
                <ProgressBar animated now={90} />
                <h5 style = {{textAlign: "left"}}>React</h5>
                <ProgressBar animated now={80} />
                <h5 style = {{textAlign: "left"}}>Python</h5>
                <ProgressBar animated now={80} />
                <h5 style = {{textAlign: "left"}}>HTML/CSS</h5>
                <ProgressBar animated now={80} />
                <h5 style = {{textAlign: "left"}}>Axios</h5>
                <ProgressBar animated now={70} />
                <h5 style = {{textAlign: "left"}}>Hibernate</h5>
                <ProgressBar animated now={60} />
                <h5 style = {{textAlign: "left"}}>SQL</h5>
                <ProgressBar animated now={60} />
                <h5 style = {{textAlign: "left"}}>Django</h5>
                <ProgressBar animated now={50} />
                <h5 style = {{textAlign: "left"}}>Spring</h5>
                <ProgressBar animated now={40} />
                <h5 style = {{textAlign: "left"}}>.Net</h5>
                <ProgressBar animated now={40} />
                <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>
            </Col>
        </Row>
        <hr style = {{minHeight: "5px"}}></hr>
        <h3 style = {{marginTop:"100px", marginBottom: "20px"}}> Projects </h3>
        <Row style = {{justifyContent:"center"}}>
            <Carousel style = {{maxWidth: "1000px", width:"100%", zIndex:"0"}}>
              <Carousel.Item style = {{backgroundColor: "#29c3c3", maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                <Carousel.Caption>
                  <img src={profileJpg} style = {{zIndex:"0", position: "absolute"}} alt="Logo" style = {{width: "80%", maxHeight:"500px"}}/>
                  <h3 style = {{marginTop: "20px"}}>Portfolio (Front End)</h3>
                  <p>Created this portfolio to showcase my projects and you get to learn a little bit more about me!</p>
                  <p>Skills: React, CSS</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style = {{backgroundColor: "#29c3c3", maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                  <Carousel.Caption>
                    <img src={snipsnok2} style = {{zIndex:"0"}} alt="Logo" style = {{width: "40%", maxHeight:"500px"}}/>
                    <img src={snipsnok}  style = {{zIndex:"0"}} alt="Logo" style = {{width: "40%", maxHeight:"500px"}}/>
                    <h3>SnipSnok (Full Stack)</h3>
                    <p>Created along with team members as a part of a university project! SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</p>
                    <p>Skills: React, Python, Hibernate, Spring, Axios</p>
                  </Carousel.Caption>
                </Carousel.Item>
               <Carousel.Item style = {{backgroundColor: "#29c3c3", maxHeight:"500px", maxWidth:"1000px", minHeight: "500px", minWidth:"400px"}}>
                 <Carousel.Caption>
                   <h3>Amazing Race (Front End)</h3>
                   <p>Created along with team member as part of a university assignment! The Amazing Race is a website that mimics the mechanics from the TV show of the same name. Users are able to host races, set locations, reorder locations and participate in races.</p>
                   <p>Skills: HTML, CSS, JS, React, Python, AJAX, external API usage</p>
                 </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
        </Row>
        <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>
        <hr style = {{minHeight: "5px"}}></hr>
        <h3 style = {{marginTop:"100px", marginBottom: "20px"}}> Work Experience </h3>
        <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-none d-sm-block col-sm-4 order-2" style = {{marginTop: "20px", padding:"10px", backgroundColor: "#29c3c3"}}>
                <h5 style = {{color: "white"}}>GPOS Limited</h5>
                <h5 style = {{color: "white"}}>Role: Summer Intern</h5>
                <p style = {{color: "white"}}>Dec 2018- Feb 2019</p>
            </div>
            <div className="col-12 col-sm-4 order-1" style = {{marginTop: "20px", padding:"10px", backgroundColor: "#29c3c3"}}>
                <h5 style = {{color: "white"}}>Eden Foods Limited</h5>
                <h5 style = {{color: "white"}}>Role: Cashier</h5>
                <p style = {{color: "white"}}>2014 - 2018</p>
            </div>
            <div className="col-12 col-sm-4 order-3" style = {{marginTop: "20px", padding:"10px", backgroundColor: "#29c3c3"}}>
                <h5 style = {{color: "white"}}>GPOS Limited</h5>
                <h5 style = {{color: "white"}}>Role: Summer Intern</h5>
                <p style = {{color: "white"}}>Dec 2019 - Feb 2020</p>
            </div>
            <div className="col-12 d-sm-none order-2" style = {{marginTop: "20px", padding:"10px", backgroundColor: "#29c3c3"}}>
                <h5 style = {{color: "white"}}>GPOS Limited</h5>
                <h5 style = {{color: "white"}}>Role: Summer Intern</h5>
                <p style = {{color: "white"}}>Dec 2018- Feb 2019</p>
            </div>
          </div>
        </div>
        <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>
        <h3 style = {{textAlign: "left", marginTop:"100px"}}>  </h3>

      </div>
    </div>
  );
}

export default App;
