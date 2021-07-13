import React from "react";
import "../styles/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



function Project(props) {
    return (
        <Container id="container">
            <Row>
                <Col lg><Image style={{ width: 200, height: 200}} src={props.image} /> </Col>
                <Col sm>
                    <p><strong>{props.name}</strong></p>
                    <p><strong>{props.description}</strong></p>
                    <p>Github Repo: <a href={props.repo}>{props.repo}</a></p>
                    <p>Deployed Link: <a href={props.deployed}>{props.deployed}</a></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;