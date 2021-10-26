import React from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/god.png';
import helloDark from '../components/god.png';
import helloLight1 from '../components/jim.png';
import helloDark1 from '../components/jim.png';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';
import Alert from 'react-bootstrap/Alert';
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
             <br></br>
                    <h4 className="lead" align="center"><b>Past Year Papers and Sample Questions</b></h4>
                    <br></br>
                    <Row>
                      <Col lg={6}>
                     <Card className="skill-nbcard">
                                <Card.Body>
                                               <Card.Img variant="top" src={darkMode ? helloDark : helloLight} width="450"/> <br/><br/>
                                    <Card.Text align="left"><h4> MMO 2020 Day 1</h4>
                                                      <hr/>MetriX Mathematical Olympiad held on 2020 Day 1 paper <br/>
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "dark" : "dark"} className="sbtn" align="left">Download</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>
                            </Card></Col>
 <Col lg={6}>
                            <Card className="skill-nbcard">
                         
                                <Card.Body >
                                       <Card.Img variant="top" src={darkMode ? helloDark1 : helloLight1} width="400"/><br/><br/>
                                      <Card.Text align="left"><h4>MMO 2020 Day 2</h4>
                                                <hr/>MetriX Mathematical Olympiad held on 2020 Day 2 paper  <br/>
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "dark" : "dark"} className="sbtn" align="left">Download</Button>
                                        </a>&nbsp;</Card.Text>
                                </Card.Body>

                             </Card></Col>  
                    </Row>

render(<AlertDismissibleExample />);
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
