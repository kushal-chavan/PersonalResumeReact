import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";
import 'animate.css';
import 'magnific-popup/dist/jquery.magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
import 'font-awesome/css/font-awesome.min.css';


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="*" exact={true} component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
