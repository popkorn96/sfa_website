import React, { useState } from 'react'
import NavBar from './NavBar'

export default function Main() {
    return (
        <div>
            <NavBar/>
            <a href="/"><h1>Welcome to San Francisco de Asis</h1></a><hr/>
            <nav>
                <button><a href="/en-home">English </a></button>
                <button><a href="/sp-pagína-principal" >Español</a></button>
                
            </nav><br/>
            <button><a href="/admin-login" > Admin Login</a></button>
        </div>
    )
}
