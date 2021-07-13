import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import linkedin from "../../images/61109.png"
import github from "../../images/GitHub-Mark.png"

const Contact = () => (
  <Container id="container">
        <h1>Jacob Nelson</h1>
        <h2>NelsonJacob1988(at)gmail(dot)com</h2>
        <a href="http://www.linkedin.com/in/jacobn88">
          <Image src={linkedin} style={{ width: 50, height: 50, margin: 20 }} />
        </a>
        <a href="http://www.github.com/jacobn88">
          <Image src={github} style={{ width: 70, height: 70, margin: 20 }} />
        </a>
  </Container>
);

export default Contact;
