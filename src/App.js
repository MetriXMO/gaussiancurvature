import './App.css';
import React from 'react'
import helloLight from '../src/lol.png';
import helloDark from '../src/lol1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
  <BrowserRouter>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
    <Switch>
        <Route exact path="/" >
          <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://metrixmath-oly.vercel.app/about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="https://metrixmath-oly.vercel.app/about" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="https://metrixmath-oly.vercel.app/mmo2020" className="link"><h5>Past Year Papers</h5></Nav.Link>
                      <Nav.Link href="https://metrixmath-oly.vercel.app/sponsors" className="link"><h5>Sponsors</h5></Nav.Link>
                    <Nav.Link href="https://metrixmath-oly.vercel.app/contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
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
          <Footer />
          </Route>
 <Route path="/sponsors">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="#skills" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="#experience" className="link"><h5>MMO 2020</h5></Nav.Link>
                    <Nav.Link href="#contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
 <div id="experience">
          <Experience darkMode={darkMode} />
      </div>
 <Footer />
</Route>
    
          <Route path="/about">
             <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="#skills" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="#experience" className="link"><h5>MMO 2020</h5></Nav.Link>
                    <Nav.Link href="#contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
            <div id="about">
          <About darkMode={darkMode} />
          </div>
 <Footer />
</Route>
<Route path="/mmo2020">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="#skills" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="#experience" className="link"><h5>MMO 2020</h5></Nav.Link>
                    <Nav.Link href="#contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
 <div id="skills">
          <Skills darkMode={darkMode} />
      </div>
 <Footer />
</Route>

<Route path="/contact">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="#skills" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="#experience" className="link"><h5>MMO 2020</h5></Nav.Link>
                    <Nav.Link href="#contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
 <div id="contact">
          <Contact darkMode={darkMode} />
      </div>
 <Footer />
</Route>
<Route path="/anonymous">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about" className="link"><h5>About</h5></Nav.Link>
                    <Nav.Link href="#skills" className="link"><h5>Team</h5></Nav.Link>
                    <Nav.Link href="#experience" className="link"><h5>MMO 2020</h5></Nav.Link>
                    <Nav.Link href="#contact" className="link"><h5>Contact</h5></Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "dark"}>
                    {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                </Button>
            </Navbar.Collapse>
          </Navbar>
 <div id="contact">
          <Contact darkMode={darkMode} />
      </div>
 <Footer />
</Route>



















        </Switch>
      </div>
</BrowserRouter>
  
  );
}

export default App;

