import { useState, React} from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import Particles from "../components/particles";
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
            <Col lg={12} align='center'>
               <Card className="skill-nbcard">
                                <Card.Body> 
                                    <Card.Title>MMO 2021</Card.Title>
                                    <Card.Text align="left"><hr/>Yes! MMO is back in this year again and is expected to be held on soon in December. The rules and regulations of the contest is identical to its previous year's rules and regulation. MMO 2021 team is listed in the team's page, we have fairly expanded from the base team of 6 peoples from 2020. Best of luck.
<br></br>
<br></br>
<AlertDismissibleExample /> <br></br>
<h6>Format</h6>
As informed before, the contest is an IMO-type contest and hence follows nearly all the formats as IMO does. However if you still don't know about them, here they are discussed below yet again. 
<ul align="left"><li> The contest will be held for two days with papers Day I and Day II. Each paper would consist three problems.</li>
<li>  Each problem is worth 7 points. </li>
<li> The paper will be subjective or that is you have to submit a clear proof of your solution while submitting the MMO team. Partial scores can be attained.</li>
<li>  The contest is not a team contest, this should be given by respective individuals.</li>
<li>  When you are done with your solution you can either latex them before submitting or you can submit handwritten solution which shall be accepted unless we find it hard to understand your handwriting.</li>
<li> You shall submit you solution by either emailing here at the mail gaussiancurv180@gmail.com or direct DM to on AoPS to the one of the specified team members of MMO.</li>    </ul> </Card.Text>
                            </Card.Body></Card>
            </Col>
 
            </Row> &nbsp;  














<Row>
  <Col lg={12}>
               <Card className="skill-nbcard">
                                <Card.Body>
                                    <Card.Title>MMO 2020</Card.Title>
                                    <Card.Text align="left"><hr/>MMO 2020 was held on November ofcourse in 2020 that is previous year online. It was mainly organised and held through the aops site, for previous year papers you can visit the past year contest's page. MMO 2021 team is however is quiet different from MMO 2020 since after that year our team has fairly expanded so that we can work flawlessly and easily.
<br></br>
<h6> Contest Rules </h6>
<ul align="left">
<li>  It will be two day contest of three problems on each day. </li>
<li> Each problem will carry 7 points and there is no negative marking.</li>
<li> The paper will be subjective and we will allow partial markings. </li>
<li> This contest is not team contest, thsi contest should be given by individuals.</li>
  </ul>
<br></br>
<h6> Submission Procedure and Eligibilty</h6>
<br></br>
Everyone is allowed to give this contest. You can latex your solutions and make it in one PDF or you can submit handwritten solutions however remember to make your solution's neat and clean for us to undertand it clearly and you can submit to anyone of the above specified members of the group and direct message them on aops or use our offcial mail and gmail to us.
<br></br>
  <h6> Rules of Gradation and Marking Scheme </h6>
<ul align="left">
 <br></br>
  <li>Each problem is worth 7 points and shall be graded likewise.</li>
    
<li>Any type of fake solve or proof is highly discouraged, it may result in loss of your marks.</li>

<li> Partial Scores can be achieved, so if you think you have progress but can't exceed further on any problem, then you can go ahead to submit the progress.
</li>

<li>Its noted that there is no problem or no loss of points if you use : Barycentric co-ordinates, Complex Numbers, Moving points or Co-ordinate geometry in solving geometry problems, however 1 point will be deducted if the diagram for the geometry problem or wherever required is not drawn.</li>
</ul>
<br></br>
<h6> Extra Marking Scheme </h6>

<ul align="left">

<li><b>Category 1:</b> If you are the first person to submit a solution to  a problem and you earn greater than equal to 5 points on it, you get an extra 0.5 points.</li>



<li><b>Category 2</b>  If you are in the top 2 of scorers and you have greater than equal to 4 points on all problems, you get an extra point.</li>



<li><b>Category 3</b> If you have at least 3 problems fully correct and one of your solutions is deemed the most elegant, you get an extra point.</li>

</ul> </Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>

      
 </Container>
      </Fade>
    </div>
  )
}

export default About
