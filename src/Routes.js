import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
// Dynamically imported components
const SearchPage = asyncComponent(() =>
    import('./Views/SearchPage/SearchPage').then(module => module.default)
);

class Routes extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={SearchPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
