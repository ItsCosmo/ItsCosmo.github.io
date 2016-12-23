import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import Auto from "./src/components/Auto";
import Home from "./src/components/Home";
import Header from "./src/components/Header";

require('./App.scss');

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div >
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/auto" component={Auto} />
    </Route>
  </Router>
), document.getElementById("root"));
