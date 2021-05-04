import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
import * as Icon from 'react-feather';

export default class Announcements extends Component {
    render() {
        return (
            <div>
                <h5>Announcements:</h5>
                {/* Example Alerts  */}
                <Alert variant="success">
                <Alert.Heading><Icon.Bookmark/> Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
                </Alert>

                <Alert variant="danger">
                <Alert.Heading><Icon.AlertOctagon/> Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
                </Alert>

                <Alert variant="secondary">
                <Alert.Heading><Icon.BookOpen/> Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
                </Alert>
            </div>
        )
    }
}
