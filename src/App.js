import './App.css';

import { Row, Col, Nav } from 'reactstrap';
import { ProgressBar, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Footer from './Components/footer';
import Experience from './Components/experience';
import Projects from './Components/projects';
import AboutMe from './Components/aboutme';
import Top from './Components/top';
import NavigationBar from './NavigationBar';
import Skills from './Components/skills';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Top />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
    </div>
  );
}

export default App;
