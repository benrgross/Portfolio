import React, { useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { SPOTLIGHT } from "../utils/actions";

function ProjectMain() {
  const [state, dispatch] = useStoreContext();

  const goToProject = () => {
    console.log("click");
    dispatch({
      type: "SPOTLIGHT",
      switch: false,
    });
  };
  return (
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
            <li className="projects__summary--list-items"> ➢ Logo Design</li>
            <li className="projects__summary--list-items">
              {" "}
              ➢ Front End Development
            </li>
            <li className="projects__summary--list-items">
              {" "}
              ➢ Back End Development
            </li>
          </ul>
          <Button className="projects__view-project-btn" onClick={goToProject}>
            View Project
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectMain;
