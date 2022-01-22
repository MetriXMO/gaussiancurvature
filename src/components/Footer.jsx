import React from 'react'
import {
  Box,
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
       <Box>
      <h1 style={{  
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
           
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
        </div>
    )
}

export default Footer

