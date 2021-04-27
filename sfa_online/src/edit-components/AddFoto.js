import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

export default class AddFoto extends Component {
    render() {
        return (
            <div>
                <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
                </Form>
            </div>
        )
    }
}
