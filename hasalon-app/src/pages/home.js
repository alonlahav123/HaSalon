import React, { useState } from 'react';
import FacebookFeed from '../components/FacebookFeed';
import FacebookEvent from '../components/facebookEvents';
import { Card, Container, Col, Row } from "react-bootstrap";
import CapacityBar from '../components/capacityBar';
import './home.css';


function home() {
    return (
        <div>
            <Container fluid='true'>
                <Row>
                    <Col className="text-center">
                        <h3>Welcome to the HaSalon App</h3>
                    </Col>
                </Row>
                <Row className="rowHeight align-items-center">
                    <Col>
                        <Card>
                           <CapacityBar/>
                        </Card>
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