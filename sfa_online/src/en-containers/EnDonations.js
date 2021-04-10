import React, { Component } from 'react';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';



export default class EnDonations extends Component {
    render() {
        return (
            <div>
                <EnglishNavigationBar />
                <h1>English Donations Page</h1>
                <Announcements/>
            </div>
        )
    }
}
