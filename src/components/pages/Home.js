import React from "react";
import "../../styles/style.css";
import me from "../../images/me.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () => (
  <Container id="container">
    
    <Row>
      <Col>
        <Image src={me} id="picture"/>
      </Col>
      <Col lg>
          <h1>About Me</h1>
          <p id="about">My name is Jacob Nelson, I'm 32 years old and I live in sunny Austin, Tx. I'm an 
          ambitious Jr. Web Developer and recent graduate of the University of Texas at 
          Austin's Full-Stack Coding Boot Camp Certificate Program. Front-end focused but familiar with 
          back-end development. Experienced in industry best practices of web and application development 
          from concept to final production.</p>
          
      </Col>
    </Row>
  </Container>
 
);

export default Home;
