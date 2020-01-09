import React, { useState } from 'react';
import './frontDesk.css'
import {Container, Col, Row} from 'react-bootstrap';


import CapacityCounter from "../components/capacityCounter";
import CapacityButton from '../components/capacityButton';
import FrontDeskCalendar from '../components/frontDeskCalendar'

function frontDesk() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Front Desk</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <CapacityButton multiplier={-1} sign={'-'} />
                </Col>
                <Col xs={2}>
                    <CapacityCounter />
                </Col>
                <Col xs={2}>
                    <CapacityButton multiplier={1} sign={'+'} />
                </Col>
                <Col xs={6}>
                    <FrontDeskCalendar className='calendar' />
                </Col>
            </Row>
        </Container>
    )
}

export default frontDesk;