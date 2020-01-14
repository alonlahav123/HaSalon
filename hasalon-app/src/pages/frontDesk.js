import React, { useState } from "react";
import "./frontDesk.css";
import { Container, Col, Row } from "react-bootstrap";
import * as firebase from "firebase";

import CapacityCounter from "../components/capacityCounter";
import ResetButton from "../components/ResetButton";
import CapacityButton from "../components/capacityButton";
import FrontDeskCalendar from "../components/frontDeskCalendar";
import MeetingCapacityInput from "../components/meetingCapacityInput";

function FrontDesk() {
  const [amountInMeeting, setAmountInMeeting] = useState(0);
  const [meetingTakingPlace, setMeetingTakingPlace] = useState(0);

  var user = firebase.auth().currentUser;
  if (user != null) {
    const uid = user.uid;
    console.log(uid);
  } else {
    console.log("user is null");
  }
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <h1>Front Desk</h1>
        </Col>
      </Row>

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
            </Col>
          </Row>

          <Row>
            <Col>
              <ResetButton amountInMeeting={amountInMeeting}  />
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
    </Container>
  );
}

export default FrontDesk;
