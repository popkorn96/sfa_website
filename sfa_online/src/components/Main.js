import React, { useState } from 'react'
import MainNavigationBar from './NavBar';
import Footer from '../en-containers/EnFooter';

export default function Main() {
    return (
        <div>
            <MainNavigationBar/>
        </div>
    )
}
// This component will determine whether a user is logged in or not and provide the appropriate NavBar version