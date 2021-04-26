import React, { Component } from 'react';
import {Nav, Tab, Tabs} from 'react-bootstrap';
import * as Icon from 'react-feather';
import AddAnnouncement from '../edit-components/AddAnnouncement';

export default class AddNew extends Component {
    render() {
        return (
            <div>
                <h1>Add New... </h1>
                <Tabs id="controlled-tab-example">
                <Tab eventKey="Announcement" title="Announcement">
                     <AddAnnouncement />
                </Tab>
                <Tab eventKey="Event" title="Event">

                </Tab>
                <Tab eventKey="Photo to Gallery" title="Photo to Gallery">

                </Tab>
                </Tabs>
            </div>
        )
    }
}
