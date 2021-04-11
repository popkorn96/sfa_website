import React from 'react';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import Footer from './EnFooter';


export default function EnEvents() {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <EnglishNavigationBar />
                <h1>English Events</h1>
                <Announcements/>
                <Footer/>
            </div>
        </div>
    );
};
