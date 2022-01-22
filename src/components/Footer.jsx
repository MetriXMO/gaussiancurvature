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
      <Column>
           
           
             Copyright &copy; 2021 GC 
               
       
          </Column>  
          <Column>
           <Heading><h5>Info</h5></Heading>
            <FooterLink href="#"><h6>Aim</h6></FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#"><h6>Testimonials</h6></FooterLink>
          </Column>
          <Column>
            <Heading><h5>Events</h5></Heading>
            <FooterLink href="#"><h6>Articles</h6></FooterLink>
            <FooterLink href="#"><h6>Problem Sets</h6></FooterLink>
            <FooterLink href="#"><h6>Past Papers</h6></FooterLink>
           
          </Column>
          <Column>
            <Heading><h5>Community</h5></Heading>
            <FooterLink href="#"><h6>Contact Form</h6></FooterLink>
            <FooterLink href="#"><h6>Email</h6></FooterLink>
            <FooterLink href="#"><h6>Discord</h6></FooterLink>
          </Column>
                
        </Row>
      
      </Container>
<br/><br/><br/>
  );
};
        </div>
    )
}

export default Footer

