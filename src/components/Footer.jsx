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
           
             <div className="footer-text" align="center"> 
                <br></br><br></br>
             Copyright &copy; 2021 GC <br></br><br></br><br></br>
               
            </div>
          </Column>  
          <Column>
           <Heading><h3>Info</h3></Heading>
            <FooterLink href="#"><h6>Aim</h6></FooterLink>
            <FooterLink href="#"><h6>Vision</h6></FooterLink>
            <FooterLink href="#"><h6>Testimonials</h6></FooterLink>
          </Column>
          <Column>
            <Heading><h3>Events</h3></Heading>
            <FooterLink href="#"><h6>Articles</h6></FooterLink>
            <FooterLink href="#"><h6>Problem Sets</h6></FooterLink>
            <FooterLink href="#"><h6>Past Papers</h6></FooterLink>
           
          </Column>
          <Column>
            <Heading><h3>Community</h3></Heading>
            <FooterLink href="#"><h6>Contact Form</h6></FooterLink>
            <FooterLink href="#"><h6>Email</h6></FooterLink>
            <Footerlink href="#"><h6>Discord</h6></FooterLink>
          </Column>
                
        </Row>
      </Container>

  );
};
        </div>
    )
}

export default Footer

