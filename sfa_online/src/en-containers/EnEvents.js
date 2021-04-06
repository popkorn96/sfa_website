import React from 'react';
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar';


export default function EnEvents() {
    return (
        <div>
            <EnglishNavigationBar />
            <h1>English Events</h1>
            <Announcements/>
        </div>
    )
}
