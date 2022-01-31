import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

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
        <Container className="projects__spotlight-cont">
          <Row>
            <h1 className="projects__spotlight-header">Trowel</h1>
          </Row>
          <Row>
            <p className="projects__spotlight-blurb">
              An app intended for professional gardeners to organize plants and
              vital information by their clients.
            </p>
          </Row>
          <Row>
            <Container className="spotlight__stack-cont">
              <ListGroup horizontal className="spotlight__stack-listgroup">
                <ListGroup.Item className="spotlight__stack-listitem">
                  / React
                </ListGroup.Item>
                <ListGroup.Item className="spotlight__stack-listitem">
                  / Node.Js
                </ListGroup.Item>
                <ListGroup.Item className="spotlight__stack-listitem">
                  / MongoDb
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Row>
          <Row>
            <div>
              <figure className="projects__spotlight-media">
                <img
                  src="/img/trowel-snapshot-2.png"
                  className="projects__spotlight-img"
                  alt="website page example"
                />
              </figure>
            </div>
          </Row>
          <Row></Row>
        </Container>
      )}
    </div>
  );
}

export default Projects;
