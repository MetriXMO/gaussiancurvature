import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light.png';
import helloDark from '../media/hello-dark.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                       <Col lg={12} xs={12}>
                        <h2 className="display-3 hello" align="center">MetriX Mathematical Olympiad</h2>
                        <h2 className="lead" align="center">
                            <span
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[ " MetriX Mathematical Olympiad", " is an IMO-type contest", " held online", "Best of Luck" ]'>
                            </span>
                        </h2>
                 </Col>
                </Row>
                <Row>

                    <Container align="center">

                        <Col lg={12} xs={12}>

                            <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" />

                        </Col>

                    </Container>

 
               </Row>
  <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>About</Card.Title>
                                    <Card.Text>MetriX Mathematical Olympiad or  MMO, as the name indicates is a mathematical olympiad which inherits the difficulty near to International Mathematical Olympiad or IMO. The exam is supposed to be held online mode every year and absolutely free for all so that everyone could enjoy the competition and explore the Olympiad flavour.
To its  exception unlike IMO, this exam does not have any pre stages so as to attend this contest and is an single stage competition.This contest can be participated by participants from any country. However this contest is given by respective individuals.</Card.Text>
                                </Card.Body>



            </AttentionSeeker>

            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
