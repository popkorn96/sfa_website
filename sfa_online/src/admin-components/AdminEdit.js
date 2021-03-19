import React from 'react'

export default function AdminEdit() {
    return (
        <div>
            <h1>Admin Page</h1>
            <h3>Info</h3>
            <h4>English Pages</h4>
                <button>Edit Home Page</button><br/>
                <button>Edit Events Page</button><br/>
                <button>Edit Gallery Page</button><br/>
                <button>Edit Donations Page</button><br/>
                <button>Edit About Us Page</button><br/>
            <h4>Spanish Pages</h4>
                <button>Edit Página Principal</button><br/>
                <button>Edit Eventos</button><br/>
                <button>Edit Galería</button><br/>
                <button>Edit Donaciónes</button><br/>
                <button>Edit Sobre Nosotros</button><br/>
            <h4>General Pages</h4>
                <button>Announcements</button><br/>
                <button></button><hr/>
                <button>Logout</button>
        </div>
    )
}

// Only allow access to this page when admin user is logged in
// To create admin user, user authentication through sms, email or google auth is required
// 