import React, { useState } from 'react'
import MainNavigationBar from './NavBar';
import Image from 'react-bootstrap/Image';
import Footer from '../en-containers/EnFooter';

export default function Main() {
    return (
        <div>
            <MainNavigationBar/>
            <div className="main-container">
                <Image src="./main-back5.png" fluid />
                
                <Footer />
            </div>
        </div>
    )
}
// This component will determine whether a user is logged in or not and provide the appropriate NavBar version