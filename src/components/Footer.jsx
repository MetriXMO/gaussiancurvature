import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

 
const Footer = () => {
    return (
        <div>
            <hr/>
            <p className="footer-text"> <h6>MMO</h6>
                <br></br><br></br>
             Copyright &copy; 2021 MMO <br></br><br></br><br></br>
               
            </p>
     
      <h1 style={{  
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        
      </h1>
      <Container>
       <Row class={darkMode? "text-secondary" :"lead"}>  
          <Column >
           <Heading>About</Heading>
            <FooterLink href="#"><h6>Aim</h6></FooterLink>
            <FooterLink href="#"><h6>Vision</h6></FooterLink>
            <FooterLink href="#"><h6>Testimonials</h6></FooterLink>
          </Column>
          <Column>
            <Heading>Events</Heading>
            <FooterLink href="#">Articles</FooterLink>
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
                  Discord
                </span>
              </i>
            </FooterLink>
          
          </Column>  
        </Row>
      </Container>
  
  );
};
        </div>
    )
}

export default Footer

