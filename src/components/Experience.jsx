import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import tcd from '../media/TCD.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'


const Experience = ({ darkMode }) => {

    

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>- Papers-</b></h2>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tcd} />
                                                    <Card.Body>
                                                        <Card.Title align="center">In pr0gress</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">In progess, ENT don't spam okay</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>o
                                                        <br></br>in
                                                        <br></br>progress
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://metrixmath-olympiad.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Download</Button>
                                        </a>&nbsp;

                                        <a href="https://metrixmath-olympiad.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Read</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                          
                        </Row>
                    </Zoom>
                </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
