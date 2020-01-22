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
                <Row 
                className=' '
                >
                    <Col xs={1} lg={2}></Col>
                    <Col xs={9} lg={8}
                    className='colContainer align-items-center'
                    >
                        <h2>Project: ReSalon</h2>
                    </Col>
                    <Col xs={1} lg={2}></Col>
                </Row>
                <Row className="rowHeight align-items-center">
                    <Col>
                        <CapacityBar/>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Row className='FBstacker'>
                            {/* <Col 
                            xs={6}
                            >
                                 <Container fluid='true'>
                                 <FacebookFeed/>
                                 </Container> 
                            </Col> */}
                            <Col className='center'
                            xs={6}
                            >
                                {  /* <Container fluid='true'> */}
                                    <FacebookEvent/>
                                {/* </Container> */}
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default home;