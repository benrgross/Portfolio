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
            <ListGroup.Item className="spotlight__stack-listitem">
              / Cheerio
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
      <Row>
        <h3 className="projects__spotlight-why-head">Why I Built It</h3>
        <p className="projects__spotlight-why-blurb">
          I built trowel as the culminating project for my bootcamp. Coming from
          owning a landscaping company, I wanted to create an app to help my day
          to day operations. While there are a lot of gardening apps out there,
          there arent any specifically directed at professionals with the key
          information about plants we want to have on hand. The app aims to let
          the user generate a client list, go into each client and view, add or
          edit the plants in that garden. This is particulary useful when you
          have new employees who are not familiar with a clients garden or the
          plants within them.
        </p>
        <h3 className="projects__spotlight-why-head">The Future</h3>
        <p className="projects__spotlight-why-blurb">
          Trowel is far from done, and in my spare time I intend to keep adding
          to its functionality and quality of data. I plan to integrate weather
          data to help manage watering schedules and forecast plant care. The
          end product will be a marketable organization and information
          application for professional gardening and landscaping companies that
          will relieve the all to familiar stress of keeping all the accounts
          and plant needs within the gardeners head.
        </p>
      </Row>
      <Row>
        <Container className="projects__btn-cont">
          <Button
            className="projects__button-visit"
            href="https://trowel-app.herokuapp.com/"
          >
            Visit Site
          </Button>
          <a
            href="https://github.com/benrgross/trowel"
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
