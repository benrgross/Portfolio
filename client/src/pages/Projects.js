import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Projects() {
  const [spotlight, setSpotlight] = useState(true);

  const goToProject = () => {
    console.log("click");
    setSpotlight(false);
  };

  return (
    <div>
      {spotlight ? (
        <Container className="projects__cont">
          <h2 className="projects__h2">Projects</h2>
          <Row>
            <Col md={6}>
              <figure className="projects__media">
                <img
                  className="projects__img"
                  src="/img/trowel-snapshot-2.png"
                  alt="snapshot of project website"
                  onClick={goToProject}
                />
              </figure>
            </Col>
            <Col className="projects__summary">
              <h2 className="projects__summary-title">Trowel</h2>
              <p className="projects__summary--blurb">
                An App for landscapers to look up valuable plant information and
                organize gardens by their clients.
              </p>
              <ul className="projects__summary--list-group">
                <li className="projects__summary--list-items">
                  {" "}
                  ➢ Logo Design
                </li>
                <li className="projects__summary--list-items">
                  {" "}
                  ➢ Front End Development
                </li>
                <li className="projects__summary--list-items">
                  {" "}
                  ➢ Back End Development
                </li>
              </ul>
              <Button
                className="projects__view-project-btn"
                onClick={goToProject}
              >
                View Project
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>Trowel</h1>
      )}
    </div>
  );
}

export default Projects;
