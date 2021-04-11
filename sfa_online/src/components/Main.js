import React, { useState } from 'react'
import MainNavigationBar from './NavBar';
import Footer from './Footer';

export default function Main() {
    return (
        <div>
            
            {/* <a href="/"><h1>Welcome to San Francisco de Asis</h1></a><hr/>
            <nav>
                <button><a href="/en-home">English </a></button>
                <button><a href="/sp-pagína-principal" >Español</a></button>
                
            </nav><br/>
            <button><a href="/admin-login" > Admin Login</a></button> */}
            <MainNavigationBar/>
            <Footer/>
        </div>
    )
}
// This component will determine whether a user is logged in or not and provide the appropriate NavBar version