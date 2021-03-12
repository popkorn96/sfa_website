import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main'


function App() {
  return (
    <Router>
    <div className="App">
      <Main />
    </div>
  </Router>
  );
}

export default App;

// React Router keeps your UI in sync with the URL. 
// It has a simple API with powerful features like lazy code loading, 
// dynamic route matching, and location transition handling built right in. 
// Make the URL your first thought, not an after-thought.