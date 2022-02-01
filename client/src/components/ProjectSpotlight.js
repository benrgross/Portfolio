import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Button, ListGroup } from "react-bootstrap";

function ProjectSpotlight() {
  const [state, dispatch] = useStoreContext();
  return (
    <Container className="projects__spotlight-cont">
      <Row>
        <h1 className="projects__spotlight-header">{state.project[0].name}</h1>
      </Row>
      <Row>
        <p className="projects__spotlight-blurb">
          {state.project[0].blurb_spotlight}
        </p>
      </Row>
      <Row>
        <Container className="spotlight__stack-cont">
          <ListGroup horizontal className="spotlight__stack-listgroup">
            {state.project[0].stack.map((item) => {
              return (
                <ListGroup.Item
                  key={item}
                  className="spotlight__stack-listitem"
                >
                  / {item}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Container>
      </Row>
      <Row>
        <div>
          <figure className="projects__spotlight-media">
            <img
              src={state.project[0].img}
              className="projects__spotlight-img"
              alt="website page example"
            />
          </figure>
        </div>
      </Row>
      <Row>
        <h3 className="projects__spotlight-why-head">Why I Built It</h3>
        <p className="projects__spotlight-why-blurb">{state.project[0].why}</p>
        <h3 className="projects__spotlight-why-head">The Future</h3>
        <p className="projects__spotlight-why-blurb">
          {state.project[0].future}
        </p>
      </Row>
      <Row>
        <Container className="projects__btn-cont">
          <Button
            className="projects__button-visit"
            href={state.project[0].websiteUrl}
          >
            Visit Site
          </Button>
          <a
            href={state.project[0].githubUrl}
            className="social__icon social__gitHub-projects"
            alt="github icon"
          >
            <FontAwesomeIcon className="fa_gitHub" icon={faGithub} size="2x" />
          </a>
        </Container>
      </Row>
    </Container>
  );
}

export default ProjectSpotlight;
