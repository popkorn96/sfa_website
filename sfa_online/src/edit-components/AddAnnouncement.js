import React, { Component } from 'react';
import {Form, ListGroup, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';
import AdminFooter from '../admin-components/AdminFooter';

export default class AddAnnouncement extends Component {
    render() {
        return (
            <div className="page-container">
                <br/><h1><Icon.PlusSquare /> Announcement</h1><br/>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Write announcement title here..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Type of Alert</Form.Label>
                        <ListGroup bg="sm" className="listgroup1" fluid horizontal>
                        <ListGroup.Item variant="success"><Icon.Bookmark/> Main</ListGroup.Item>
                        <ListGroup.Item variant="primary"><Icon.Bell/> Secondary</ListGroup.Item>
                        <ListGroup.Item variant="secondary"><Icon.BookOpen/> Information</ListGroup.Item>
                        <ListGroup.Item variant="warning"><Icon.Flag/> Warning</ListGroup.Item>
                        <ListGroup.Item variant="danger"><Icon.AlertOctagon/> Urgent</ListGroup.Item>
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
                        <Form.Label>Announcement Text</Form.Label>
                        <Form.Control as="textarea" placeholder="Write announcement here..." rows={3} />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
                <AdminFooter />
            </div>
        )
    }
}
