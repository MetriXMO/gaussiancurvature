import React from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/god.png';
import helloDark from '../components/god.png';
import helloLight1 from '../components/jim.png';
import helloDark1 from '../components/jim.png';
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
             <br></br>
                    <h4 className="lead" align="center"><b>Past Year Papers and Sample Questions</b></h4>
                    <br></br>
                    <Row>
                      <Col lg={6}>
                     <Card className="skill-nbcard">
                                <Card.Body>
                                               <Card.Img variant="top" src={darkMode ? helloDark : helloLight} width="450"/> <br/><br/>
                                    <Card.Text align="left"><h4> MMO 2020 Day 1</h4>
                                                      <hr/>MetriX Mathematical Olympiad held on 2020 Day 1 paper <br/>
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "dark" : "dark"} className="sbtn" align="left">Download</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>
                            </Card></Col>
 <Col lg={6}>
                            <Card className="skill-nbcard">
                         
                                <Card.Body >
                                       <Card.Img variant="top" src={darkMode ? helloDark1 : helloLight1} width="400"/><br/><br/>
                                      <Card.Text align="left"><h4>MMO 2020 Day 2</h4>
                                                <hr/>MetriX Mathematical Olympiad held on 2020 Day 2 paper  <br/>
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "dark" : "dark"} className="sbtn" align="left">Download</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>

                             </Card></Col>  
                    </Row>
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
