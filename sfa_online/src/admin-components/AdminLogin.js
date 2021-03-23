import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/admin-login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

export default function AdminLogin({setToken}) {
  const handleSubmit = async e => {
    console.log(`fetching..`)
  }
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
}

AdminLogin.propTypes = {
  setToken: PropTypes.func.isRequired
}
