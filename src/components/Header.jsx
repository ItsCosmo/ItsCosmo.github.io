import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

require('./Header.scss');

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="banner">
          <div className="logo" />
        </div>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/auto" activeClassName="active">Auto</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;

