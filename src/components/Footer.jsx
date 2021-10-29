import React from "react";
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
    <Box>

       
   
      <Container className="footer-text" >
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
          </Column>
          <Column>
            <Heading>MMO 2020</Heading>
            <FooterLink href="/mmo2020">Writing</FooterLink>
            <FooterLink href="/sponsors">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact and Privacy</Heading>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="#">Privacy policy</FooterLink>
            <FooterLink href="#">Cookie policy</FooterLink>
          </Column>
      <br></br>
All rights reserved © 2021 MMO
          </Row>
      </Container>
    </Box>

  );
};


export default Footer
