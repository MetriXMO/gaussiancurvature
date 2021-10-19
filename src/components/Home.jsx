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
                        <h1 className="display-3 hello" align="center">MetriX Mathematical Olympiad</h1>
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
26
                    <Container align="center">
27
                        <Col lg={12} xs={12}>
28
                            <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" />
29
                        </Col>
30
                    </Container>
31
                </Row>
            </AttentionSeeker>

            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
