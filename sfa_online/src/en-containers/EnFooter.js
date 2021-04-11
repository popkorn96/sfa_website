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
                    <Col><a className="footer-links" href="/en-home">Calendar</a></Col>
                    <Col><a className="footer-links" href="/en-home">Contact Us</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="/en-home">Privacy Policy</a></Col>
                    <Col><a className="footer-links" href="/en-home">Terms of Use</a></Col>
                    <Col><a className="footer-links" href="/en-home">Copyright</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="/admin-login">Admin Login</a></Col>
                </Row>
                </Container><br/>
            </div>
        )
    }
}
