import React, {Component} from "react";
import Lease from "./Lease";
import Config from "./Config";

require('./Auto.scss');

class Auto extends Component {

  componentDidMount() {
    document.title = "The Kleimeyer Group - Auto"
  }

  render() {
    return (
      <div className="leaseapp">
        <div className="title">Auto Lease Tracker</div>
        <div className="content">
          <Config />
          <Lease />
        </div>
      </div>
    )
  }
}

export default Auto;


