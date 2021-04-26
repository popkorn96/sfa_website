import React, { Component } from 'react';
import {ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default class AddNew extends Component {
    render() {
        return (
            <div>
                <h1>Add New... </h1>
                <ButtonToolbar className="justify-content-between">
                <ButtonGroup aria-label="Basic example">
                <Button variant="light" href="/admin-edit/add-new"><Icon.PlusCircle/>Add New</Button>
                <Button variant="light"><Icon.PlusCircle/>Event</Button>
                <Button variant="light"><Icon.PlusCircle/>Photo to Gallery</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Basic example">
                <Button variant="light"><Icon.PlusCircle/>Anuncio</Button>
                <Button variant="light"><Icon.PlusCircle/>Evento</Button>
                <Button variant="light"><Icon.PlusCircle/>Foto a Galería</Button>
                </ButtonGroup>
            </ButtonToolbar>
            </div>
        )
    }
}
