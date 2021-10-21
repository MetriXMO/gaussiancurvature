import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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
            <Col lg={6} align='center'>
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>MMO 2021</Card.Title>
                                    <Card.Text>Yes! MMO is back in this year again and is expected to be held on soon in December.The rules and regulations of the contest is identical to its previous year rules and regulation. MMO 2021 team is listed below, we have fairly expanded from the base team of 6 peoples from 2020. Best of luck and stay safe.</Card.Text>
                                </Card.Body></Card>
            </Col>
   <Col lg={6}>
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>MMO 2020</Card.Title>
                                    <Card.Text>MMO 2020 was held on November ofcouse in 2020 that is previous year online. It was mainly held on the aops site, for previous year papers you can visit this here. MMO 2021 team is however is quiet different from MMO 2020 since after that year our team has fairly expanded so that we can work flawlessly and easily.</Card.Text>
                                </Card.Body></Card>
            </Col>
            </Row> &nbsp;&nbsp;      <Row>    

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
  </Col></Row>

          <br></br>
          <hr></hr>
          <br></br>
 </Container>
      </Fade>
    </div>
  )
}

export default About
