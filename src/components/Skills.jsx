import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/skills-light.svg';
import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faDocker, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

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
                                    <Card.Title>Past Year Papers</Card.Title>
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
