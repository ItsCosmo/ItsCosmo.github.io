import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {

  componentDidMount() {
    document.title = "The Kleimeyer Group"
  }

  render() {
    return (
      <div>
        <p>While our busy designers are busily readying brand new content, please check out our Auto Leaser Tracker, available now.</p>
      </div>
    )
  }
}

export default Home;
