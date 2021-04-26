import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default function AdminFooter() {
    return (
        <div id="footer">
            <Button variant="danger" block>Logout</Button><br/>
            <Container variant="dark">
            <Row>
                <Col><a className="footer-links" href="https://www.facebook.com/sfa.iglesia"><Icon.Facebook /></a></Col>
                <Col><a className="footer-links" href="https://www.instagram.com/sfa_dallas/"><Icon.Instagram /></a></Col>
                <Col><a className="footer-links" href="mailto: contact@sfadallas.org"><Icon.Mail /></a></Col>
            </Row><br/>
            <Row>
                <Col><a className="footer-links" href="https://edod.org/">Diócesis Episcopal de Dallas</a></Col>
                <Col><a className="footer-links" href="/sp-pagina-principal">Calendario</a></Col>
                <Col><a className="footer-links" href="https://www.google.com/maps/place/San+Francisco+De+Asis./@32.8519064,-96.6552568,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb9ff1b438ce79b74!8m2!3d32.8519064!4d-96.6530681">Encuéntranos</a></Col>
            </Row>
            <Row>
                <Col><a className="footer-links" href="/sp-pagina-principal">Póliza de Privacidad</a></Col>
                <Col><a className="footer-links" href="/sp-pagina-principal">Condiciones de Uso</a></Col>
                <Col><a className="footer-links" href="/sp-pagina-principal">Derechos de Autor</a></Col>
            </Row>
            </Container>
        </div>
    )
}
