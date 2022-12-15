import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'magnific-popup/dist/jquery.magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
import 'font-awesome/css/font-awesome.min.css';

import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";



export class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="*" exact={true} component={Main} />
          </Switch>
      </Router>
    );
  }
}

export default App;
