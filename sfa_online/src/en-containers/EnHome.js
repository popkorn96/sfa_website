import React from 'react';
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import {Container, Row, Col} from 'react-bootstrap';

export default function EnHome() {
    return (
        <div>
        <Container fluid>
                        <EnglishNavigationBar /><br/>
                    <Row>
                        <Col xs={6} md={4}><Announcements/></Col>
                        <Col xs={12} md={8}>
                            <h1>English Home</h1>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
        </div>
    )
}
