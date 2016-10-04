import React, {Component} from 'react';
import {Link} from 'react-router';

require('./Header.scss');

class Header extends Component {

  render() {
    return (
      <div className="home">
        <div className="header">
          <div>The Kleimeyer Group</div>
          <div className="tagline">representing excellence since 1959</div>
        </div>

        <Link to="/auto">Auto</Link>
      </div>
    )
  }
}

export default Header;

