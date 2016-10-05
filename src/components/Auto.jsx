import React, {Component} from "react";
import Lease from "./Lease";

require('./Auto.scss');

class Auto extends Component {

  componentDidMount() {
    document.title = "The Kleimeyer Group - Auto"
  }

  render() {
    return (
      <div className="leaseapp">
        <div className="title">Auto Lease Tracker</div>
        <Lease />
      </div>
    )
  }
}

export default Auto;


