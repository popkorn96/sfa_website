import React from 'react';
import {Button, Tab, Container, Tabs} from 'react-bootstrap';
import Temp from '../components/Temp';
import AdminFooter from './AdminFooter';

export default function AdminEdit() {
    return (
        <div id="page-container">
            <div id="content-wrap"><br/>
                <Button variant="outline-success" href="/admin-add-new" size="lg">Add New </Button>{' '}
                <Button variant="outline-info" href="/admin-show-all" size="lg">See All </Button><br/><br/><br/>
                <h1>Admin Page</h1><br/>
                <i><h4>English Pages</h4></i>
                <Tabs id="controlled-tab-example">
                        <Tab eventKey="edit-home" title="Edit Home"> 
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                        <Tab eventKey="edit-donations" title="Edit Donations">
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                        <Tab eventKey="edit-about-us" title="Edit About Us">
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                </Tabs>
                <i><h4>Spanish Pages</h4></i>
                <Tabs id="controlled-tab-example">
                        <Tab eventKey="edit-home" title="Edit Página Principal"> 
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                        <Tab eventKey="edit-donations" title="Edit Donaciónes">
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                        <Tab eventKey="edit-about-us" title="Edit Sobre Nosotros">
                            <Container>
                                <br/>
                                <Temp />
                            </Container>
                        </Tab>
                </Tabs>
            </div >
                <AdminFooter />
        </div>
    )
}

// Only allow access to this page when admin user is logged in
// To create admin user, user authentication through sms, email or google auth is required
// 