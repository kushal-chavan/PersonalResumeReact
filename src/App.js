import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";

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
