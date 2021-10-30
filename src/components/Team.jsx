import { useState, React} from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function ControlledTabs() {
  const [key, setKey] = useState('home');
return (
<Tabs
 id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
>
  <Tab eventKey="home" title="Home">
   kimmy 
  </Tab>
  <Tab eventKey="profile" title="Profile">
    danpa
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
   bapa
  </Tab>
</Tabs>
);
}
<ControlledTabs />

 
const About = ({ darkMode }) => {

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1800;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Fade>
        <Container align='center'>
          <Row>    

                                   <Col lg={6} align="center">
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>Team 2021</Card.Title>
                                    <Card.Text><ul align="left">
                                            <li>MNJ2357</li>  <li>Mindstormer</li>  <li>TLP.39</li> <li>Aritra12</li><li>k12byda5h</li><li>CANBANKAN</li>

       

 <li>EpicNumberTheory</li>

 <li>Orestis Lignos</li><li>Jelena</li>




 






                                          </ul></Card.Text>
                                </Card.Body></Card>
  </Col>
                                   <Col lg={6} align="center">
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>Team 2021</Card.Title>
                                    <Card.Text><ul align="left">
                                              

 
<li>Starchan</li>
 <li>MathLuis</li>
<li>Squareman</li>
 <li>GGHX</li>
 <li>Jupiter_is_Big</li>
 <li>oVlad</li>
<li>phoenixfire</li>
<li>lneis1</li>
 <li>Awesome_Guy</li>

</ul></Card.Text>
</Card.Body></Card>
 </Col> </Row> &nbsp;

      
 </Container>
      </Fade>
    </div>
  )
}

export default Team
