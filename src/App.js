import './App.css';
import backgroundImg from './img/wp.jpg';
import profileImg from './img/link.jpg';
import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';

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
            <Col xs="6 order-1" style = {{minHeight: "700px"}}>
                <h3 style = {{textAlign: "left", marginTop:"200px"}}> About Me </h3>
                <h5 style = {{textAlign: "left"}}>I undertook a Bachelor of Software Engineering Honors course</h5>
                <h5 style = {{textAlign: "left"}}>at the University of Sydney and recently graduated (2020). </h5>
                <h5 style = {{textAlign: "left"}}>I am interested in full stack web development especially the </h5>
                <h5 style = {{textAlign: "left"}}>front end aspect.</h5>
            </Col>
            <Col xs="6 order-2" style = {{minHeight: "700px", maxWidth: "300px"}}>
                <h3 style = {{textAlign: "left", marginTop:"200px"}}>  </h3>
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
            </Col>
        </Row>

      </div>
    </div>
  );
}

export default App;
