import React, { useState } from 'react';
import FacebookFeed from '../components/FacebookFeed';
import FacebookEvent from '../components/facebookEvents';
import { Container, Col, Row } from "react-bootstrap";
import CapacityBar from '../components/capacityBar';
import './home.css';


function home() {
    return (
        <div>
            <Container fluid='true'>
                <Row>
                    <Col className="text-center">
                        <h2>Project: ReSalon</h2>
                    </Col>
                </Row>
                <Row className="rowHeight align-items-center">
                    <Col>
                        <CapacityBar/>
                    </Col>
                </Row>
                <Row className='rowHeight align-items-center'>
                    <Container>
                        <Row className='FBstacker'>
                            <Col>
                                <FacebookEvent/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default home;