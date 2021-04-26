import React, { Component } from 'react';
import {ButtonToolbar, Button, ButtonGroup, Nav} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default class AddNew extends Component {
    render() {
        return (
            <div>
                <h1>Add New... </h1>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><Icon.PlusCircle/> Announcement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><Icon.PlusCircle/> Event</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><Icon.PlusCircle/> Photo to Gallery</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><Icon.PlusCircle/> Anuncio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><Icon.PlusCircle/> Evento</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><Icon.PlusCircle/> Foto a Galería</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
