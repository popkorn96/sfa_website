import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default function AdminFooter() {
    return (
        <div className="admin-footer">
            <Button variant="danger" block>Logout</Button><br/>
            <Container variant="dark">
                <Row>
                    <Col><a className="footer-links" href="https://www.facebook.com/sfa.iglesia"><Icon.Facebook /></a></Col>
                    <Col><a className="footer-links" href="https://www.instagram.com/sfa_dallas/"><Icon.Instagram /></a></Col>
                    <Col><a className="footer-links" href="mailto: contact@sfadallas.org"><Icon.Mail /></a></Col>
                </Row><br/>
                <Row>
                    <Col><a className="footer-links" href="https://edod.org/">Episcopal Diocese of Dallas</a></Col>
                    <Col><a className="footer-links" href="/en-home">Calendar</a></Col>
                    <Col><a className="footer-links" href="https://www.google.com/maps/place/San+Francisco+De+Asis./@32.8519064,-96.6552568,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb9ff1b438ce79b74!8m2!3d32.8519064!4d-96.6530681">Find Us</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="/en-home">Privacy Policy</a></Col>
                    <Col><a className="footer-links" href="/en-home">Terms of Use</a></Col>
                    <Col><a className="footer-links" href="/en-home">Copyright</a></Col>
                </Row>
                </Container>
            </div>
    )
}
