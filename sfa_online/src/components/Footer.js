import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <hr/>
                <Container className="footer" variant="dark">
                <Row>
                    <Col><a href="https://edod.org/">Episcopal Dioces of Dallas</a></Col>
                    <Col><a href="">Calendar</a></Col>
                    <Col><a href="">Contact Us</a></Col>
                </Row>
                <Row>
                    <Col><a href="">Privacy Policy</a></Col>
                    <Col><a href="">Terms of Use</a></Col>
                    <Col><a href="">Copyright</a></Col>
                </Row>
                </Container>
            </div>
        )
    }
}
