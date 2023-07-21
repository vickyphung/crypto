import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
 
);


//Setting up the Router
// The first component we'll explore is BrowserRouter which is underneath the hood a context provider allowing all the features of router to be available to its children. We want all of our application to have the router features so we'll wrap the App component in index.js and to make it more semantic we'll rename the component Router.
