import React, { Component } from 'react';
import {Form, ListGroup, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default class AddAnuncio extends Component {
    render() {
        return (
            <div className="page-container">
                <br/><h1>Anuncio</h1><br/>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Write Anuncio title here..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Tipo de Alerta</Form.Label>
                        <ListGroup bg="sm" className="listgroup1" fluid horizontal>
                            <ListGroup.Item variant="success"><Icon.Bookmark/> Primario</ListGroup.Item>
                            <ListGroup.Item variant="primary"><Icon.Bell/> Secundario</ListGroup.Item>
                            <ListGroup.Item variant="secondary"><Icon.BookOpen/> Información</ListGroup.Item>
                            <ListGroup.Item variant="warning"><Icon.Flag/> Alerta</ListGroup.Item>
                            <ListGroup.Item variant="danger"><Icon.AlertOctagon/> Urgente</ListGroup.Item>
                        </ListGroup>
                        <Form.Control as="select">
                        <option>Main</option>
                        {/* Success */}
                        <option>Secondary</option>
                        {/* Primary */}
                        <option>Information</option>
                        {/* Secondary */}
                        <option>Warning</option>
                        {/* Warning */}
                        <option>Urgent</option>
                        {/* Danger */}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Anuncio</Form.Label>
                        <Form.Control as="textarea" placeholder="Crear anuncio..." rows={3} />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Crear
                    </Button>
                </Form>
            </div>
        )
    }
}
