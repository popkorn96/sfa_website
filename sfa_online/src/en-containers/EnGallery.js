import React from 'react';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';
import Footer from './EnFooter';



export default function EnGallery() {
    return (
        <div id="page-container">
            <EnglishNavigationBar />
            <h1>English Gallery</h1>
            <Announcements/>
            <Footer />
        </div>
    )
}
