import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <Container className="projects__cont">
        <h2 className="projects__h2">Projects</h2>
        <Row>
          <Col md={6}>
            <div className="projects__media">
              <img className="projects__img" src="/img/trowel-snapshot-2.png" />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
