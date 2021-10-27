import { useState, React } from 'react';
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'

const Contact = ({ darkMode }) => {

    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        emailjs.send('service_3rrlmf6', 'template_8cqo6bb', templateParams, 'user_mNZI64CQWAWMujmZ1AWIk')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        swal({
            title: "Sent Successfully!",
            text: "Glad to hear from you! I will get back to you as soon possible",
            icon: "success",
        });
        setTemplateParams({
            from_name: '',
            message: ''
        })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <br></br>
                            <h2 className="lead">Contact Us!</h2>
                            <p className="contact-text">Drop a suggestion, feedback, opportunities or if any doubts. Our gmail is <strong>gaussiancurv180@gmail.com</strong></p>
                            <br></br>
                            
                            <br></br>
                        </Col>
                        <Col lg={8}>
                            <br></br>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Group>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" as="textarea" rows={8} className="ph msg" placeholder="Enter your message" required />
                                </Form.Group>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <br></br>
                    </Row>
                </Container>
            </Fade>
        </div>
    )
}

export default Contact
