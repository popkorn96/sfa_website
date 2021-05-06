import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {Form, Button} from 'react-bootstrap';
import Footer from '../en-containers/EnFooter';

export default function AdminLogin() {

    return (
        <div className="login-wrapper"><br/>
        <h1>Administrative Login</h1>
        <i>This is the intended login for SFA Administration ONLY</i><br/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Admin Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
        </Form>
        <Footer />
      </div>
    )
}

AdminLogin.propTypes = {
  setToken: PropTypes.func.isRequired
}
