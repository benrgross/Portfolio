import React from "react";
import "../index.css";

import { Row, Col, ListGroup, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Row>
        <header className="header">
          <Col md={2}>
            <div>
              <a href="/home">
                <img
                  id="img-avatar"
                  src="/img/ben-avatar.png"
                  alt="headshot of man on hilltop in Los Angeles"
                />
              </a>
            </div>
          </Col>
          <Col md={5}>
            <Row>
              <div className="header__section header__section-menu">
                <a href="/">
                  <img
                    id="signature"
                    src="/img/Ben-Gross-Cursive.png"
                    alt="ben gross written in cursive"
                  />
                </a>
                <div className="bottom__border"></div>
              </div>
            </Row>
            <Row>
              <ListGroup className="menu__group" horizontal>
                <ListGroup.Item className="menu__item">
                  <a className="link" href="#work">
                    Work
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="menu__item">
                  {" "}
                  <a className="link" href="#work">
                    Projects
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="menu__item">
                  {" "}
                  <a className="link" href="#work">
                    Contact
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
          <Col md={5}></Col>
        </header>
      </Row>
    </Container>
  );
}

export default NavBar;
