import React, { Component } from 'react';
import {Nav, Tab, Tabs, Container, Col, Row} from 'react-bootstrap';
import * as Icon from 'react-feather';
import AdminFooter from '../admin-components/AdminFooter';
import AddAnnouncement from '../edit-components/AddAnnouncement';
import AddAnuncio from '../edit-components/AddAnuncio';
import AddEvent from '../edit-components/AddEvent';
import AddEvento from '../edit-components/AddEvento';
import AddPhotoToGallery from '../edit-components/AddPhotoToGallery';

export default class AddNew extends Component {
    render() {
        return (
            <div>
                <div>
                    <br/><h1>Add New... </h1>
                    <Tabs id="controlled-tab-example">
                    <Tab eventKey="Announcement" title="Announcement"> 
                        <Container>
                            <Row>
                                <Col><AddAnnouncement /></Col>
                                <Col><AddAnuncio/></Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="Event" title="Event">
                        <Container>
                            <Row>
                                <Col><AddEvent /></Col>
                                <Col><AddEvento /></Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="Photo to Gallery" title="Photo to Gallery">
                        <Container>
                            <Row>
                                <Col><AddEvent /></Col>
                                <Col><AddEvent /></Col>
                            </Row>
                        </Container>                        <AddPhotoToGallery />
                    </Tab>
                    </Tabs>
                    <AdminFooter />
                </div>
                
            </div>
        )
    }
}