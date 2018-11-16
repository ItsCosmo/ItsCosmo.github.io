import React, {Component} from "react";
import Lease from "./Lease";
import Help from "./Help";

require('./Auto.scss');

class Auto extends Component {

  state = {
    showInstructions: false
  };

  componentDidMount() {
    document.title = "The Kleimeyer Group - Lease"
  }

  toggleHelp = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  };

  render() {
    return (
      <div className="leaseapp">
        <div className="title">
          <div style={{marginRight: "1rem"}}>Auto Lease Tracker</div>
          <Help size="2rem" onClick={this.toggleHelp}/>
        </div>
        { this.state.showInstructions &&
        <div className="instructions">
          <h1>How to use the Auto Lease Tracker</h1>
          <p>Most vehicle lease contracts specify a mileage limit which you must stay within in order to avoid a
            penatly. Auto Lease Tracker helps you keep track of the mileage you are putting on your leased
            vehicle so you will know at a glance if you are driving at a rate which will put you over the
            specified limit.
          </p>
          <p>Auto Lease Tracker will track mileage data for up to three vehicles.</p>
          <h2>Step 1</h2>
          <p>Fill in the Vehicle name, Date of lease, Initial mileage, Term of lease and Mileage limit.</p>
          <ul>
            <li><i>Vehicle name.</i> The name of the vehicle, e.g. Hyundai Sonata.</li>
            <li><i>Date of lease.</i> The date your lease contract started.</li>
            <li><i>Initial mileage.</i> The mileage on the vehicle at the time the lease started. These
              miles do not count against your mileage limit.
            </li>
            <li><i>Term of lease.</i> The number of months you will be leasing the vehicle.</li>
            <li><i>Mileage limit.</i> The number of miles your are allowed to drive the vehicle over the
              lifetime of the lease without penalty. The 15,000 mile-per-year limitation on a 3-year lease would be
              entered as 45000.
            </li>
          </ul>
          <h2>Step 2</h2>
          <p>Enter the current odometer reading on your vehicle. Some statistics will be displayed, such as
            total miles driven, miles driven per day, and so on. A warning will be shown if
            you are driving too many miles on the vehicle, which may cause you to incur a penalty on your lease.
          </p>
          <p>All entered information will be saved locally to your browser. Other users of the site will not have
            access to this information (unless they also use your computer). This means, however, that if you
            access this site with a different browser, you will need to enter the information again.
          </p>
        </div>
        }
        <Lease />
      </div>
    )
  }
}

export default Auto;


