import { useState, React } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Particles from "../components/particles";
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { AttentionSeeker } from 'react-awesome-reveal';

const Home = ({ darkMode }) => {
 function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={darkMode ? "light" : "warning"} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Announcement</Alert.Heading>
        <p>
          MMO registration has been started, for aops users the aops post is  <a href="https://artofproblemsolving.com/community/c1209312h2451488s1_gaussian_curvature">here</a> and for non aops users you can submit your solutions through our gmail. The contest will start on 14th December, 2021 and end on 21st December.
        </p>
      </Alert>
    );
  }
  return <Button variant="dark" onClick={() => setShow(true)}>Click To Know About Latest Announcements</Button>;
}


    return (
        <div>
            <AttentionSeeker effect="pulse">
                <Row>  <Particles />
  
                    <Col lg={12} xs={12}>
     
                        <h2 className="display-3 hello" align="center">  MetriX Mathematical Olympiad  </h2>
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
  
                 MetriX Mathematical Olympiad as the name indicates is a mathematical olympiad which inherits the difficulty near to International Mathematical Olympiad or IMO. The exam is to be held online every year and is absolutely free for all so that everyone could enjoy the competition and explore the Olympiad flavour.
To its  exception unlike IMO, this exam does not have any pre stages so as to attend this contest and is a single stage competition. This contest can be participated by participants from any country. However this contest is given by respective individuals and not teams and MMO 2021 is going to be held soon. To explore more information visit the other pages of the website.</h6> 
           
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
                                    <Card.Text align="left"><hr/>Yes! MMO is back again this year and is expected to be held  in 15th December. The rules and regulations of the contest are identical to those of last years.  The MMO 2021 team is listed in team's page and  we have fairly expanded from the base team of 6 peoples from 2020. Happy problem solving!
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
