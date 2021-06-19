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
      <Col xs={6} md={4}>
        <Image src={me} />
      </Col>
      <Col xs={12} md={8}>
          <h1>AboutMe</h1>
          <p id="about">Hi, my name is Jacob Nelson and thanks for taking a look at my portfolio. I'm currently
          living in Austin, TX and attending the University of Texas where I'm learning the skills
          needed to become a full stack web developer.</p>
          
      </Col>
    </Row>
  </Container>
 
);

export default Home;
