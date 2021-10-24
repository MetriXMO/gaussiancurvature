import React from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../src/hello-light.png';
import helloDark from '../src/hello-dark.png';
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
                                    <Card.Title><img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="130" /></Card.Title>
                                    <Card.Text>In progress</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="skill-nbcard">
                                <Card.Body >
                                    <Card.Title>MMO 2021 Samples</Card.Title>
                                    <Card.Text>In progress</Card.Text>
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
