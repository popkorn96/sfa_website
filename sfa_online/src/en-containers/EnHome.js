import React from 'react'
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import {Container, Row, Col} from 'react-bootstrap';

export default function EnHome() {
    return (
        <Container fluid>
                <EnglishNavigationBar /><br/>
            <Row>
                <Col><Announcements/></Col>
                <Col xs={6}><h1>English Home</h1></Col>
                <Col><h4>Upcoming Events...</h4></Col>
            </Row>
        </Container>
    )
}
