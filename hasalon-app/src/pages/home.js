import React, { useState } from 'react';
import FacebookFeed from '../components/FacebookFeed';
import FacebookEvent from '../components/facebookEvents';
import { Container, Col, Row } from "react-bootstrap";
import CapacityBar from '../components/capacityBar';


function home() {
    return (
        <div>
            <Container fluid='true'>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2>Project: ReSalon</h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="rowContainer align-items-center">
                    <Col>
                        <CapacityBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FacebookFeed/>
                    </Col>
                    <Col>
                        <FacebookEvent/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default home;