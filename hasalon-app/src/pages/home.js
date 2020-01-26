import React, { useState } from "react";
import FacebookFeed from "../components/FacebookFeed";
import FacebookEvent from "../components/facebookEvents";
import { Card, Container, Col, Row } from "react-bootstrap";
import CapacityBar from "../components/capacityBar";
import "./home.css";

function home() {
  return (
    <div>
      <Container fluid="true">
        <Row>
          <Col className="text-center">
            <h3></h3>
          </Col>
        </Row>
        <Row className="rowHeight align-items-center">
          <Col>
            <CapacityBar />
          </Col>
        </Row>
        <Row className="FBstacker rowHeight align-items-center">
          <Col>
            <FacebookEvent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
