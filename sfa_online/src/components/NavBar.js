import React from 'react'

export default function EnglishNavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <a className="nav-title">San Francisco de Asis</a>
                <ol>
                    <button class="nav-item active" >Home</button>
                    <button class="nav-item active" >Events</button>
                    <button class="nav-item active" >Gallery</button>
                    <button class="nav-item active" >About Us</button>
                </ol>
            </nav>
        </div>
    )
}
