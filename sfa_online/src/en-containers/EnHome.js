import React from 'react';
import Footer from './EnFooter';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';

export default function EnHome() {
    
    return (
        <div id="page-container">
            <div id="content-wrap">
                <EnglishNavigationBar />
                <h1>English Home</h1>
                <Announcements/>
                <Footer/>
            </div>
        </div>
    )
}
