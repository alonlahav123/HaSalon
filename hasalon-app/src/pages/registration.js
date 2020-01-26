import React, { useState } from "react";
import SignupForm from "../components/register";
import { Card, Container, Col, Row } from "react-bootstrap";
import NavBar from '../components/navBar.js'

function Registration() {
  const [isAlertShown, setIsAlertShown] = useState(false);
  return (
    <div>
    <NavBar/>
    <Container>
      <Row>
        <p></p>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
          <Card>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <SignupForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Registration;
