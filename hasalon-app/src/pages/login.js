import React, { useState } from "react";
import SignInForm from "../components/signin";
import {
  Card,
} from "react-bootstrap";

function Login() {
  return (
    <div>
        <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
      <SignInForm/>
          </Card.Body>
      </Card>
    </div>
  );
}


export default Login;
