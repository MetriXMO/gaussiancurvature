import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

 
const Footer = ({ darkMode }) => {
    return (
        <div>
            <hr/>
 
      <Container>
       <Row className="footer-text">  
          <Column >
           <Heading>About</Heading>
            <FooterLink href="#"><h6>Aim</h6></FooterLink>
            <FooterLink href="#"><h6>Vision</h6></FooterLink>
            <FooterLink href="#"><h6>Testimonials</h6></FooterLink>
          </Column>
          <Column>
            <Heading>Events</Heading>
            <FooterLink href="#"><h6>Articles</h6></FooterLink>
            <FooterLink href="#"><h6>Problem Sets</h6></FooterLink>
            <FooterLink href="#"><h6>Previous Year Papers</h6></FooterLink>
           
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"><h6>Contact Form</h6></FooterLink>
            <FooterLink href="#"><h6>Email</h6></FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>
                  <h6>Discord</h6>
                </span>
              </i>
            </FooterLink>
             <div className="footer-text" align="center"> 
                <br></br><br></br>
             Copyright &copy; 2021 GC <br></br><br></br><br></br>
               
            </div>
          </Column>  
        </Row>
      </Container>

  );
};
        </div>
    )
}

export default Footer

