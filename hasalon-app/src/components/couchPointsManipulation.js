import React, { useCallback, useState, useReducer } from "react";
import DB from "../firestore";
import "firebase/firestore";
import './couchPointsManipulation.css';
import {
  CardColumns,
  Card,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container
} from "react-bootstrap";
import * as firebase from "firebase";

function CouchPointsAdmin(props) {
  const [userType, setUserType] = useState(0);
  const [loginState, setLoginState] = useState(false);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      DB.collection("users")
        .doc(user.uid)
        .onSnapshot(doc => {
          setUserType(doc.data().userType);
        });
    } else {
      console.log("USER IS NULL");
    }
  });
  return (
    <div>{loginState ? <IsLogin userType={userType} /> : <IsNotLogin />}</div>
  );
}

function IsLogin(props) {
  if (props.userType == 1) {
    return <IsAdmin />;
  } else {
    return <IsNotAdmin />;
  }
}

function UserEntry(props) {
  const [userCouchPoints, setuserCouchPoints] = useState(0);
  const [userInput, setUserInput] = useState(0);
  let userID = props.userID;
  let userName = props.userName;
  let userEmail = props.userEmail;
  DB.collection("users")
    .doc(userID)
    .onSnapshot(doc => {
      setuserCouchPoints(doc.data().userCouchPoints);
    });
  function updatePoints(input, modifier, currentPoints) {
    let changeAmmount = input * modifier;
    let newCouchPoints = currentPoints + changeAmmount;
    DB.collection("users")
      .doc(userID)
      .update({
        userCouchPoints: newCouchPoints
      });
    setUserInput(0);
  }

  return (
    <Card className='userCard'>
      <Card.Header>{userName}</Card.Header>
      <Card.Body>
        <b>Name: </b>
        {userName}, <b>Email: </b>
        {userEmail}, <br />
        <b>Balance: </b>
        {userCouchPoints} <br />
        <InputGroup>
          <FormControl
            aria-describedby="basic-addon2"
            onChange={event => setUserInput(event.target.value)}
            value={userInput}
            type="number"
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={event => updatePoints(userInput, -1, userCouchPoints)}
            >
              -
            </Button>
            <Button
              variant="outline-secondary"
              onClick={event => updatePoints(userInput, 1, userCouchPoints)}
            >
              +
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

let output = [];

function IsAdmin(props) {
  //const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [isLoading, setIsLoading] = useState(false);
  let htmlToRender;
  let allUsers = [];
  let allUserIds = [];
  DB.collection("users")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        allUsers.push(doc.data());
        allUserIds.push(doc.id);
        output.push(
          <UserEntry
            key={`user_${doc.id}`}
            userName={doc.data().userName}
            userEmail={doc.data().userEmail}
            userCouchPoints={doc.data().userCouchPoints}
            userID={doc.id}
          />
        );
      });
    })
    .then(function() {
      console.log("weDone");
    });

  return (
    <div>
      <Card>
        <Card.Header>Admin Panel</Card.Header>
        <Card.Body>
          {isLoading ? (
            <div className='container'>{output}</div>
          ) : (
            <button onClick={() => setIsLoading(true)}>Load Users</button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

function IsNotAdmin(props) {
  return (
    <div>
      <Card>
        <Card.Header>Admin Panel</Card.Header>
        <Card.Body>
          <Card.Title>This page is for Administrators only</Card.Title>
          <Card.Text>Sorry!</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function IsNotLogin(props) {
  return (
    <div>
      <Card>
        <Card.Header>Admin Panel</Card.Header>
        <Card.Body>
          <Card.Title>Please Login to view this page</Card.Title>
          <Card.Text>
            please <a href="/login">Login</a> before visiting this page
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CouchPointsAdmin;
