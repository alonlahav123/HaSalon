import React, { useState } from "react";
import "./frontDesk.css";
import { Container, Col, Row } from "react-bootstrap";

import CapacityCounter from "../components/capacityCounter";
import CapacityButton from "../components/capacityButton";
import FrontDeskCalendar from "../components/frontDeskCalendar";
import MeetingSwitch from "../components/meetingSwitch";
import MeetingCapacityInput from "../components/meetingCapacityInput";

function frontDesk() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <h2>Front Desk</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col md={4} className="text-center">
              <CapacityButton multiplier={-1} sign={"-"} />
            </Col>

            <Col md={4} className="text-center">
              <CapacityCounter />
            </Col>

            <Col md={4} className="text-center">
              <CapacityButton multiplier={1} sign={"+"} />
            </Col>
          </Row>

          <Row>
            <Col>
              <MeetingCapacityInput />
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col md={12}>
              <FrontDeskCalendar className="calendar" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default frontDesk;
