import React, { Component } from 'react';
import {Form, Button, ListGroup, Col} from 'react-bootstrap';
import * as Icon from 'react-feather';


export default class AddEvento extends Component {
    render() {
        return (
            <div>
                <br/><h1>Evento</h1><br/>
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" />
                    </Form.Group>
                </Form.Row>
                    {/* Here, it would be good to add a fequency timer for recurring Eventos like Google Calendar has. */}
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Tipo de Evento</Form.Label>
                        <ListGroup bg="sm" className="listgroup1" fluid horizontal>
                            <ListGroup.Item variant="primary"><Icon.Home/> Iglesia</ListGroup.Item>
                            <ListGroup.Item variant="warning"><Icon.ShoppingBag/> Fondos</ListGroup.Item>
                            <ListGroup.Item variant="success"><Icon.Truck/> Comunidad</ListGroup.Item>
                            <ListGroup.Item variant="danger"><Icon.CloudLightning/> Weather</ListGroup.Item>
                            <ListGroup.Item variant="secondary"><Icon.Calendar/> Other</ListGroup.Item>
                        </ListGroup>
                        <Form.Control as="select" >
                        <option>Evento de Iglesia</option>
                        <option>Recaudación de Fondos</option>
                        <option>Comunidad</option>
                        <option>Aviso Meteorológico</option>
                        <option>Otro</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Título</Form.Label>
                        <Form.Control placeholder="Write Evento title here..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción del Evento</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Crear
                    </Button>
                </Form><br/>
            </div>
        )
    }
}