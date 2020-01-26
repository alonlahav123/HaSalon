import React, { useState } from "react";
import SignInForm from "../components/signin";
import {
  Card, Container, Row, Col
} from "react-bootstrap";


function Login() {
  return (
    <Container>
      <Row><p></p></Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <SignInForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
