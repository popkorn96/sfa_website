import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import redux here
import {Provider} from 'react-redux';

import { createStore} from 'redux'; 
// ^ This creates a Redux store that holds the complete state of your app. There should only be a single store in the app.
// createStore(reducer, [preLoadedState], [enhancer])


// Import Reducers Here

// ^A Reducer is a reducing function that returns the next state tree, given the current state tree and an action to handle.

// Import MiddleWare Here

// Combine Reducers Here

// Create Redux Store Here (Remember to wrap <App/> with <Provider/> tags)


// To render a React element into a root DOM node, pass both to ReactDOM.render()

ReactDOM.render(
  // StrictMode is a tool for highlighting problems in an application 
  // It is able to :
  // a.) Identify components with unsage lifecycles
  // b.) Warning about legacy string ref API usage*
  // c.) Warning about deprecated findDOMNode usage
  // d.) Detecting unexpected side effects
  // e.) Detecting legacy context API

  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// *Refs provide a way to access DOM nodes or React elements created in the render method. 
// In the typical React dataflow, props are the only way that parent components interact with their children.