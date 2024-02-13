import React, { useState } from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer >
      <Container responsive  >
        <Row >
          <Col className="d-flex justify-content-center ">
            <img class="logo" src="/src/images/gryffindor.png" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img class="logo" src="/src/images/hufflepuff.png" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img class="logo" src="/src/images/slytherin.png" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img class="logo" src="/src/images/ravenclaw.png" />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-3">
              <p>© 2024 CodeCrafters Consulting</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
export default Footer;
