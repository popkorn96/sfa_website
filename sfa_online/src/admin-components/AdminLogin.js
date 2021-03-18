import React from 'react'

export default function AdminLogin() {
    return (
        <div>
            <h1>Admin Login</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button>Submit</button><br/>
            <button><a href="/admin-edit">Admin Edit</a></button>
        </div>
    )
}
