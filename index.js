import React, {Component} from "react";
import ReactDOM from "react-dom";
import Lease from "./src/components/Lease";
import Config from "./src/components/Config";

require('./Lease.scss');

class LeaseApp extends Component {

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

ReactDOM.render(<LeaseApp />, document.getElementById("root"));
