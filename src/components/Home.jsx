import { useState, React } from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from "../components/particles";
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


 function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Announcement</Alert.Heading>
        <p>
          MMO Registartion is going to start very soon, time to get thrilled and excited !
        </p>
      </Alert>
    );
  }
  return <Button variant="dark" onClick={() => setShow(true)}>Click To Know About Latest Announcements</Button>;
}

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
      <Container align='center'> <Row>
            <Col lg={12} align='center'>
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>MMO 2021</Card.Title>
                                    <Card.Text align="left"><hr/>Yes! MMO is back in this year again and is expected to be held on soon in December. The rules and regulations of the contest is identical to its previous year's rules and regulation. MMO 2021 team is listed below, we have fairly expanded from the base team of 6 peoples from 2020. Best of luck.
<br></br>
<br></br>
<AlertDismissibleExample /> &nbsp; </Card.Text>
                                </Card.Body></Card>
            </Col>
 
            </Row>    </Container> &nbsp;   
        </div>
    )
}

export default Home
