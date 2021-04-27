import React, { Component } from 'react';
import {Form, Button, ListGroup} from 'react-bootstrap';
import * as Icon from 'react-feather';


export default class AddEvent extends Component {
    render() {
        return (
            <div>
                <br/><h1>Event</h1><br/>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                    {/* Here, it would be good to add a fequency timer for recurring events like Google Calendar has. */}
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Type of Event</Form.Label>
                        <ListGroup bg="sm" className="listgroup1" fluid horizontal>
                            <ListGroup.Item variant="primary"><Icon.Home/> Church</ListGroup.Item>
                            <ListGroup.Item variant="warning"><Icon.ShoppingBag/> Fundraiser</ListGroup.Item>
                            <ListGroup.Item variant="success"><Icon.Truck/> Community</ListGroup.Item>
                            <ListGroup.Item variant="danger"><Icon.CloudLightning/> Weather</ListGroup.Item>
                            <ListGroup.Item variant="secondary"><Icon.Calendar/> Other</ListGroup.Item>
                        </ListGroup>
                        <Form.Control as="select" >
                        <option>Church Event</option>
                        <option>Fundraiser</option>
                        <option>Food Drive</option>
                        <option>Weather Advisory</option>
                        <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Write event title here..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form><br/>
            </div>
        )
    }
}