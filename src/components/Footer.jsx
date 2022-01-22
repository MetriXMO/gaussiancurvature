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
       <Row>
          <Column class="lead">
         <h6>    <Heading>About</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Events</Heading>
            <FooterLink href="#">Articles</FooterLink>
            <FooterLink href="#">Problem Sets</FooterLink>
            <FooterLink href="#">Previous Year Papers</FooterLink>
           
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Contact Form</FooterLink>
            <FooterLink href="#">Email</FooterLink>
            
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
          </h6>  
          </Column>
        </Row>
      </Container>
  
  );
};
        </div>
    )
}

export default Footer

