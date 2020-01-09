import React, { useState } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import {
  Form,
  Button,
  Card,
} from "react-bootstrap";
import * as firebase from "firebase";

function ForgotForm(props) {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Card>
        <Card.Header>Password Reset</Card.Header>
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
    console.log({ email });
    sendUserPasswordReset(email);
}
}

function sendUserPasswordReset(email) {
  firebase.auth().sendPasswordResetEmail(email)
  .then(function (){
    alert("Password reset link has been sent to "+email+".")
  })
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });
}


export default ForgotForm;
