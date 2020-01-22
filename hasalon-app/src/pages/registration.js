import React, { useState } from "react";
import SignupForm from "../components/register";
import {
  Card,
} from "react-bootstrap";

function Registration() {
  const [isAlertShown, setIsAlertShown] = useState (false);
  return (
    <div>
      <Card>
        <Card.Header>Register</Card.Header>
        <Card.Body>
      <SignupForm/>
          </Card.Body>
      </Card>
      
    </div>
  );
}


export default Registration;
