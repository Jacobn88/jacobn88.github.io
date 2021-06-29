import React from "react";
import "../../styles/style.css";
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";


const Skills = () => (
  <Container id="container">
    <Row>
      <Col>
        <div class="skills">
          <h3>Proficient With</h3>

          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Github</li>
          </ul>
        </div>
      </Col>
      <Col>
        <div class="skills">
          <h3> Experienced With</h3>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Test Driven Development</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Mongodb</li>
            <li>APIs, CDNs and much more!</li>
          </ul>
        </div>  
      </Col>
    </Row>
  </Container>
);

export default Skills;
