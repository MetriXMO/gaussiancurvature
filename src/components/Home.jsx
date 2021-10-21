import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';

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
                                data-rotate='[ " MetriX Mathematical Olympiad", " Is An IMO-Type Contest", " Held Online", "Every Year" ]'>
                            </span>
                        </h2>
                 </Col>
                </Row>
                <Row>

<div align="center">  <Col lg={14} xs={14}>
 <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead"></h2></Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>MetriX Mathematical Olympiad or  MMO, as the name indicates is a mathematical olympiad which inherits the difficulty near to International Mathematical Olympiad or IMO. The exam is supposed to be held online mode every year and absolutely free for all so that everyone could enjoy the competition and explore the Olympiad flavour.
To its  exception unlike IMO, this exam does not have any pre stages so as to attend this contest and is an single stage competition.This contest can be participated by participants from any country. However this contest is given by respective individuals.</strong></p>
                  </Card.Text>
                </Card.Body>
              </Card>
</Col></div>
 
               </Row>
  

            </AttentionSeeker>

            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
