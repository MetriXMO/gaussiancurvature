import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from "../components/particles";
import Card from 'react-bootstrap/Card'




const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>  <Particles />
                       <Col lg={12} xs={12}>
                        <h2 className="display-3 hello" align="center">MetriX Mathematical Olympiad</h2>
                        <h2 className="lead" align="center">
                            <span
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[ " MetriX Mathematical Olympiad", " Is An IMO-Type Contest", " Held Online", "Every Year" ]'>
                                    <br></br>
                            </span>
                        </h2>
                 </Col>
                </Row>
                <Row>

<div align="center" class="lead">  <Col lg={10}> 
<h6 align="left">
  
                 MetriX Mathematical Olympiad or  MMO as the name indicates is a mathematical olympiad which inherits the difficulty near to International Mathematical Olympiad or IMO. The exam is supposed to be held online mode every year and absolutely free for all so that everyone could enjoy the competition and explore the Olympiad flavour.
To its  exception unlike IMO, this exam does not have any pre stages so as to attend this contest and is an single stage competition. This contest can be participated by participants from any country. However this contest is given by respective individuals and not teams and MMO 2021 is going to be held soon. </h6> 
           
</Col></div>
 
               </Row>
  

            </AttentionSeeker>

            <br></br>
            <hr></hr>
<Row>
  <Col lg={12}>
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>MMO 2020</Card.Title>
                                    <Card.Text align="left"><hr/>MMO 2020 was held on November ofcouse in 2020 that is previous year online. It was mainly held on the aops site, for previous year papers you can visit this here. MMO 2021 team is however is quiet different from MMO 2020 since after that year our team has fairly expanded so that we can work flawlessly and easily.</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>

        </div>
    )
}

export default Home
