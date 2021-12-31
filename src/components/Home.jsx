import { useState, React } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from "../components/particles";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { AttentionSeeker } from 'react-awesome-reveal';
import { MagicalButton, Flex } from './stylee';

const Home = ({ darkMode }) => {
 


    return (
        <div>
            <AttentionSeeker effect="pulse">
                <Row>  <Particles />
  
                    <Col lg={12} xs={12}>
     
                        <h2 className="display-3 hello" align="center"><b>  Gaussian Curvature </b> </h2>
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

<div align="center" class="text-secondary" >  <Col lg={9}> 
<div align="left" >
  
             Gaussian Curvature is a non profit mathematics organization managed by some mathematics enthusiast members which aim to improve the quality of education specially for mathematics.
It provides online contests which include practise for olympiads and contests ranging from AMC to  IMO and other regional and national contests.
We also provide mathematical handouts to give some precise details about important things and are planning to do many more projects underneath. </div> 
           
</Col></div>
 
               </Row>
  
 </AttentionSeeker>
         

            <br></br>
           
      <Container align='left'> <Row>
            <Col lg={15} align='left'>
          <Card className="skill-nbcard">
                <Card.Header><div class={darkMode ? "lead" : "text-light"}>About Us</div></Card.Header>
                                <Card.Body>
                                   
                                    <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>We are a group of Mathematical Olympiad students who admire Mathematics to a great extent. We wish to spread the joy of solving and recognising the non-routine level of mathematics and encourage all math lovers who are yet to discover or already discovered it to do so too. We also help sections of society that try to learn mathematics who have a great thirst for knowledge for mathematics and education.
<br></br>
<br></br>   <Flex>
        <MagicalButton
          href=""
       >
          View in Details
        </MagicalButton>
        <MagicalButton>
          Get In Touch
        </MagicalButton>
      </Flex><br></br>
<br></br>
&nbsp; </Card.Text>
                                </Card.Body></Card>
            </Col>
 
            </Row>    </Container> &nbsp;   
        </div>
    )
}

export default Home
