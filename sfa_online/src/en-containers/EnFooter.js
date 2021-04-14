import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
import * as Icon from 'react-feather';


export default class Footer extends Component {
    render() {
        return (
            <div id="footer"><br/>
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
                    <Col><a className="footer-links" href="https://www.facebook.com/sfa.iglesia"><Icon.Facebook /></a></Col>
                    <Col><a className="footer-links" href="https://www.instagram.com/sfa_dallas/"><Icon.Instagram /></a></Col>
                    {/* <Col><a className="footer-links" href="https://goo.gl/maps/J3maqjs2BKjCVj5g7/"><Icon.Map-Pin /></a></Col> */}
                </Row>
                </Container><br/>
            </div>
        )
    }
}
