import React, { useState } from "react";
import "./frontDesk.css";
import {
  Container,
  Col,
  Row,
  Card
} from "react-bootstrap";
import DB from "../firestore";
import * as firebase from "firebase";

import CapacityCounter from "../components/capacityCounter";
import ResetButton from '../components/ResetButton';
import CapacityButton from "../components/capacityButton";
import FrontDeskCalendar from "../components/frontDeskCalendar";
import MeetingCapacityInput from "../components/meetingCapacityInput";

//OR = ||

function FrontDesk() {
  const [loginState, setLoginState] = useState(false);
  const [userType, setUserType] = useState(0);
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoginState(true)
      } else {
        setLoginState(false)
      }
  });
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {
          console.log(user.uid);
          DB.collection("users").doc(user.uid).onSnapshot((doc) => {
            setUserType(doc.data().userType)
            console.log(userType)
          });
        } else {
          console.log("USER IS NULL")
        }
      });
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <h1>Front Desk</h1>
        </Col>
      </Row>

    {loginState ? <IsLogin userType={userType} /> : <IsNotLogin/>}
    </Container>
  );
}

function IsLogin(props){
    if (props.userType == 1 || props.userType == 2) {
        return(
            <IsAdmin/>
        )
    }
    else{
        return(
            <IsNotAdmin/>
        )
    }
}

function IsAdmin(props){

  return(
      <Row>
        <Col>
          <Row className="rowContainer align-items-center">
            <Col lg={4} xs={4} className="text-center">
              <CapacityButton multiplier={-1} sign={"-"} />
            </Col>

            <Col lg={4} xs={4} className="text-center">
              <CapacityCounter />
            </Col>

            <Col lg={4} xs={4} className="text-center">
              <CapacityButton multiplier={1} sign={"+"} />
            </Col>
          </Row>

          <Row className="rowContainer align-items-center">
            <Col lg={{ span: 6, offset: 3 }}>
              <MeetingCapacityInput />
              <ResetButton/>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col lg={12} xs={12}>
              <FrontDeskCalendar className="calendar" />
            </Col>
          </Row>
        </Col>
      </Row>
  );

}

function IsNotAdmin(props){
        return(
                    <div>
                        <Card>
                            <Card.Header>Front Desk</Card.Header>
                            <Card.Body>
                                <Card.Title>This page is for Administrators only</Card.Title>
                                <Card.Text>
                                Sorry!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
    );

}

function IsNotLogin() {
return (
  <div>
    <Card>
        <Card.Header>Front Desk</Card.Header>
          <Card.Body>
            <Card.Title>Please Login to view this page</Card.Title>
            <Card.Text>
              please <a href="/login">Login</a> before visiting this page
            </Card.Text>
        </Card.Body>
    </Card>
  </div>);

}

export default FrontDesk;
