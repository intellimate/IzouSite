// import React from "react";
// import ReactDOM from "react-dom";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";
//
// import Layout from "./pages/Layout";
// import About from "./pages/About";
//
//
// const app = document.getElementById('app');
//
// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path="/" component={Layout}/>
//         <Route path="blub" component={About}/>
//     </Router>,
// app);

// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// Import the components.
import { DummyComponent } from './components/dummy-component.jsx'

// Define the root element.
const root = document.querySelector('main');

// Append the DummyComponent to the root element.
ReactDOM.render(<DummyComponent />, root);