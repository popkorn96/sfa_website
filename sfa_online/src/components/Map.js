import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div>
                <p>Note for devs: create a real time live feed of sunday service</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.748640245998!2d-96.65526214932832!3d32.8519063808559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea6d9f996e40b%3A0xb9ff1b438ce79b74!2sSan%20Francisco%20De%20Asis.!5e0!3m2!1sen!2sus!4v1621371108833!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        )
    }
}
