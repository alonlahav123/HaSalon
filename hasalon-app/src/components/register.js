import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import DB from "../firestore";
import {
  Alert,
  Form,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import * as firebase from "firebase";

function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  return (
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                Please use a valid email.
              </Form.Text>
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
              <Form.Text className="text-muted">
                Password must be 6 or more characters.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicRegCode">
              <Form.Label>Registration Code</Form.Label>
              <Form.Control
                value={code}
                onChange={event => setCode(event.target.value)}
                type="text"
                placeholder="Registration Code"
              />
              <Form.Text className="text-muted">
                Become a member at the front desk to get code.
              </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
  );
  function onSubmit(event) {
    event.preventDefault();
    console.log({ name }, { email }, { password });
    if (code == "HaSalonAtikaRocks") {
    registerPasswordUser(email, name, password);
    }
    else{
        alert("Oops! Your registration code does not seem to be correct... Please try again.")
    }
  }
}

function registerPasswordUser(email, inputDisplayName, password) {
  var user = null;
  //NULLIFY EMPTY ARGUMENTS
  for (var i = 0; i < arguments.length; i++) {
    arguments[i] = arguments[i] ? arguments[i] : null;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      user = firebase.auth().currentUser;
      user.sendEmailVerification();
    })
    .then(function() {
      firebase.auth().currentUser.updateProfile({ displayName: inputDisplayName });
    })
    .then(function() {
      DB.collection("users").doc(user.uid)
    .set({
          userName: inputDisplayName,
          userEmail: email,
          userType: 0,
          userCouchPoints: 0
        });
      console.log(user.uid);
      console.log(firebase.auth().currentUser.displayName);
      console.log("success");
    })
    .then(function() {
    //   useEffect(() => {
        alert("A confirmation link was sent to "+email+", please use that to activate your new account!");
    //   });
    })
    .then(function() {
      DB.collection("users").doc(user.uid).get()
    .then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    })
    .catch(function(error) {
      //return ( <div>err</div>
      //ADD STATE FOR SETSHOW
      // <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      //     <p>
      //     {error.message}
      //     </p>
      // </Alert>
      //);
      console.log(error.message);
    });
  console.log("Validation link was sent to " + email + ".");
}
export default SignupForm;
