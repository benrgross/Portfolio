import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <Container className="projects__cont">
        <h2 className="projects__h2">Projects</h2>
        <Row>
          <Col md={6}>
            <figure className="projects__media">
              <img className="projects__img" src="/img/trowel-snapshot-2.png" />
            </figure>
          </Col>
          <Col className="projects__summary">
            <h2 className="projects__summary-title">Trowel</h2>
            <p className="projects__summary-blurb">
              An App for landscapers to look up valuable plant information and
              organize gardens by their clients
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
