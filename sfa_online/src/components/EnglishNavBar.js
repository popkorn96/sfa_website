import React from 'react'

export default function EnglishNavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <ol>
                    <button class="nav-item active">Home</button>
                    <p className="nav-title">San Francisco de Asis</p>
                    <button class="nav-item active">Events</button>
                    <button class="nav-item active">Gallery</button>
                    <button class="nav-item active">About Us</button>
                </ol>
            </nav>
        </div>
    )
}