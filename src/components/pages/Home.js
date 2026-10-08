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
          <p id="about">My name is Jacob Nelson, and I'm based in the Denver area. I earned a Full-Stack Coding Boot Camp Certificate from The University of Texas at Austin, where I built projects with HTML, CSS, JavaScript, and React, along with some back-end work in Node.js, Express, and SQL. Since then I've spent two years as a search quality rater for Telus Digital, evaluating web content for accuracy and relevance. I'm detail-oriented, comfortable working remotely, and looking for roles in QA, content review, and technical support.</p>
          
      </Col>
    </Row>
  </Container>
 
);

export default Home;
