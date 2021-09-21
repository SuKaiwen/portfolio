import './App.css';

import { Row, Col } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Footer from './Components/footer';
import Experience from './Components/experience';
import Projects from './Components/projects';
import AboutMe from './Components/aboutme';
import Top from './Components/top';

function App() {
  return (
    <div className="App" style={{fontFamily: "Playfair Display"}}>
        <Top />
        <AboutMe />
        <Projects />
        <Experience />
        <Footer />
    </div>
  );
}

export default App;
