import React from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/unknown4.png';
import helloDark from '../components/unknown4.png';
import helloLight1 from '../components/cool.png';
import helloDark1 from '../components/cool.png';
import Container from 'react-bootstrap/esm/Container'
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
                     
                        <Col lg={6} xs={12}>
                            <br></br>
                            <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title align="center"><img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="500" /></Card.Title>
                                    <Card.Text><h4><b>MMO 2020 Day 1</b></h4>
                                                     <hr/>
MetriX Mathematical Olympiad held on 2020 Day 1 paper</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="skill-nbcard">
                                <Card.Body >
                                   <Card.Title align="center"><img src={darkMode ? helloDark1 : helloLight1} alt="hello" className="hello-img" width="500"  /></Card.Title>
                                   <Card.Text><h4><b><a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf">MMO 2020 Day 2</b></h4>
                                                     <hr/>
MetriX Mathematical Olympiad held on 2020 Day 2 paper</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="skill-nbcard">
                                <Card.Body >
                                    <Card.Title>MMO 2020 Samples</Card.Title>
                                    <Card.Text>In progress</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
