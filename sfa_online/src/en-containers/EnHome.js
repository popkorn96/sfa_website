import React from 'react'
import Announcements from '../components/Announcements';
import EnglishNavigationBar from '../components/EnNavBar'

export default function EnHome() {
    return (
        <div>
            <EnglishNavigationBar />
            <h1>English Home</h1>
            <Announcements/>
        </div>
    )
}
