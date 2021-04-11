import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';


export default class SpFooter extends Component {
    render() {
        return (
            <div className="footer">
                <hr/>
                <Container variant="dark">
                <Row>
                    <Col><a className="footer-links" href="https://edod.org/">Diócesis Episcopal de Dallas</a></Col>
                    <Col><a className="footer-links" href="/sp-pagina-principal">Calendario</a></Col>
                    <Col><a className="footer-links" href="/sp-pagina-principal">Contáctenos</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="/sp-pagina-principal">Póliza de Privacidad</a></Col>
                    <Col><a className="footer-links" href="/sp-pagina-principal">Condiciones de Uso</a></Col>
                    <Col><a className="footer-links" href="/sp-pagina-principal">Derechos de Autor</a></Col>
                </Row>
                <Row>
                    <Col><a className="footer-links" href="/admin-login">Inicio de Sesión de Administrador</a></Col>
                </Row>
                </Container><br/>
            </div>
        )
    }
}
