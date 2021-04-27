import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';


export default class AddFoto extends Component {
    render() {
        return (
            <div>
                <br/><h1>Foto</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción de Foto</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Escoger fotos para subir a galería..." />
                </Form.Group>
                <Button>Subir</Button>
                </Form><br/>
            </div>
        )
    }
}
