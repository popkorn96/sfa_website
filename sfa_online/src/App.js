import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import Routes from './components/Routes';
import AdminRoutes from './components/AdminRoutes';


function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <Router>
      <div className="App">
        <Main />
        <Routes setToken={setToken}/>
      </div>
    </Router>
    );
  }
  return (
    <Router>
    <div className="App">
      <AdminRoutes />
    </div>
  </Router>
  );
}

export default App;

// React Router keeps your UI in sync with the URL. 
// It has a simple API with powerful features like lazy code loading, 
// dynamic route matching, and location transition handling built right in. 
// Make the URL your first thought, not an after-thought.

// We use this structure to be able to navigate from the main page and allow
// the user to choose a language, nesting the Routes component 
//  lets us use multiple routes and keep our Main component on every page
// later on, I will update the Main component for a Navigation Bar component 
// so that styling and concept are complimentary