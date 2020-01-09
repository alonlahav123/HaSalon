import React, { useState } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import {
  Form,
  Button,
  Card,
} from "react-bootstrap";
import * as firebase from "firebase";

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
                minLength="6"
              /> 
            </Form.Group>
              <a href="/forgot">
              <Form.Text>
                Don't remember your password? Click here to reset.
              </Form.Text>
              </a>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
  function onSubmit(event) {
    event.preventDefault();
    console.log({ email }, { password });
  
    logInWithEmailAndPassword(email, password);
}
}

function logInWithEmailAndPassword(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });
}


export default SignInForm;
