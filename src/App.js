import './App.css';
import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import NavDropdown from 'react-bootstrap/NavDropdown'
import helloLight from '../src/hello-light.png';
import helloDark from '../src/hello-dark.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Skills, Experience, Contact, Footer } from './components'
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import './components/styles.css'



function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link">About</Nav.Link>
                    <Nav.Link href="#skills" className="link">Team</Nav.Link>
                    <Nav.Link href="#experience" className="link">MMO 2020</Nav.Link>
                    <Nav.Link href="#contact" className="link">Contact</Nav.Link>
 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#contact">Action</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#contact">Separated link</NavDropdown.Item>
        </NavDropdown>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "outline-dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
         
          <div id="home">
          <Home darkMode={darkMode} />
          </div>
          <div id="about">
          <About darkMode={darkMode} />
          </div>
          <div id="skills">
          <Skills darkMode={darkMode} />
          </div>
          <div id="experience">
          <Experience darkMode={darkMode} />
          </div>
          <div id="contact">
          <Contact darkMode={darkMode} />  
          </div>
          <Footer />
          </Route>
          <br></br>
<br></br>
&nbsp;&nbsp;
<br></br>

      </div>
    </Router>
  );
}

export default App;

