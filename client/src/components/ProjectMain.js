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
      {state.projects.map((project) => {
        return (
          <>
            <Row>
              <Col md={6}>
                <figure className="projects__media">
                  <img
                    className="projects__img"
                    src={project.img}
                    alt="snapshot of project website"
                    onClick={goToProject}
                  />
                </figure>
              </Col>
              <Col className="projects__summary">
                <h2 className="projects__summary-title">{project.name}</h2>
                <p className="projects__summary--blurb">{project.blurb_main}</p>
                <ul className="projects__summary--list-group">
                  {project.contribution.map((item) => {
                    return (
                      <li className="projects__summary--list-items">
                        ➢ {item}
                      </li>
                    );
                  })}
                  ;
                </ul>
                <Button
                  className="projects__view-project-btn"
                  onClick={goToProject}
                >
                  View Project
                </Button>
              </Col>
            </Row>
          </>
        );
      })}
    </Container>
  );
}

export default ProjectMain;
