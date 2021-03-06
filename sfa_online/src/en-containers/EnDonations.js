import React, { Component } from 'react';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import Footer from './EnFooter';


export default class EnDonations extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <EnglishNavigationBar />
                    <h1>English Donations Page</h1>
                    <Announcements/>
                    <Footer />
                </div>
            </div>
        );
    };
};

