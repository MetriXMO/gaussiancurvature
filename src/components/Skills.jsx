import React from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/cooool.png';
import helloDark from '../components/cooool.png';
import helloLight1 from '../components/cool.png';
import helloDark1 from '../components/cool.png';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';


const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
                    <Row>
                     
                        <Col lg={6}>
                            <br></br>
                            <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title align="center"><img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="500" /></Card.Title>
                                    <Card.Text><h4><b>MMO 2020 Day 1</b></h4>
                                                      <hr/>
MetriX Mathematical Olympiad held on 2020 Day 1 paper
  <br/>
<a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>
                            </Card></Col>
 <Col lg={6}>
                            <Card className="skill-nbcard">
                                <Card.Body >
                                   <Card.Title align="center"><img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="500"/></Card.Title>
                                   <Card.Text><h4><b>MMO 2020 Day 2</b></h4>
                                                
MetriX Mathematical Olympiad held on 2020 Day 2 paper  
    <br/>
<a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>
                             </Card> </Col>

                    </Row>
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
