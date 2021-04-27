import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default class AddPhoto extends Component {
    render() {
        return (
            <div>
                <br/><h1>Photo</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Photo Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Choose photo to upload to gallery..." />
                </Form.Group>
                <Button>Submit</Button>
                </Form><br/>
            </div>
        )
    }
}
