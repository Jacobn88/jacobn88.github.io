import React from "react";
import Project from "../Project"
import Container from 'react-bootstrap/Container';
import projects from "../../projects.json"

function Portfolio () {
  const codeTube = projects[0]
  const hunger = projects[1]
  const weather = projects[2]
    const password = projects[3]
    const note = projects[4]
    const readme = projects[5]
return (
  <Container>
  <Project {...codeTube}/>
  <Project {...hunger}/>
  <Project {...weather}/>
  <Project {...password}/>
  <Project {...note}/>
  <Project {...readme}/>
  </Container>
);
}
export default Portfolio;
