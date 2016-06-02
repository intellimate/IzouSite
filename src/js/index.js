import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Article from "./components/Article";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Layout}/>
      <Route path="article" component={Article}/>
  </Router>,
app);
