import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <Container variant="dark">
                <Row>
                    <Col><a className="footer-links" href="https://edod.org/">Episcopal Dioces of Dallas</a></Col>
                    <Col><a className="footer-links" href="">Calendar</a></Col>
                    <Col><a className="footer-links" href="">Contact Us</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="">Privacy Policy</a></Col>
                    <Col><a className="footer-links" href="">Terms of Use</a></Col>
                    <Col><a className="footer-links" href="">Copyright</a></Col>
                </Row>
                </Container><br/>
            </div>
        )
    }
}
