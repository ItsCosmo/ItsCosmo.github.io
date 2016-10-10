import React, {Component} from 'react';
import Results from './Results';
import Selector from './Selector';

import {
  getVehicleId,
  setVehicleId,
  setLeaseData,
  getLeaseData,
} from './configuration';

class Lease extends Component {

  constructor(props) {
    super(props);
    this.state = this.getSelectedVehicleState();
  }

  changeAllotment = e => {
    setLeaseData('allotment', e.target.value);
    this.setState({
      allotment: e.target.value
    })
  };

  changeTerm = e => {
    setLeaseData('term', e.target.value);
    this.setState({
      term: e.target.value
    })
  };

  changeMileage = e => {
    setLeaseData('initial', e.target.value);
    this.setState({
      initialMileage: e.target.value
    });
  };

  changeToday = e => {
    setLeaseData('today', e.target.value);
    this.setState({
      todayMileage: e.target.value
    });
  };

  changeName = e => {
    setLeaseData('name', e.target.value);
    this.setState({
      vehicleName: e.target.value
    })
  };

  changeDate = e => {
    setLeaseData('date', e.target.value);
    this.setState({
      leaseDate: e.target.value
    })
  };

  changeId = id => {
    setVehicleId(id);
    this.setState(this.getSelectedVehicleState());
  };

  getSelectedVehicleState = () => {
    const id = getVehicleId() || 1;
    const data = getLeaseData();
    return {
      vehicleId: id,
      vehicleName: data.name || '',
      leaseDate: data.date || '',
      initialMileage: data.initial || 0,
      todayMileage: data.today || 0,
      term: data.term || 0,
      allotment: data.allotment || 0,
    };
  };

  render() {
    return (
      <div className="tracker">
        <Selector id={this.state.vehicleId} onClick={this.changeId}/>
        <div className="today leasedata">
          <label>
            Today's odometer reading
            <input type="text" value={this.state.todayMileage} onChange={this.changeToday}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Vehicle name
            <input type="text" value={this.state.vehicleName} onChange={this.changeName}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Date of lease
            <input type="date" value={this.state.leaseDate} onChange={this.changeDate}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Initial mileage
            <input type="text" value={this.state.initialMileage} onChange={this.changeMileage}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Term of lease (months)
            <input type="text" value={this.state.term} onChange={this.changeTerm}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
           Mileage limit
            <input type="text" value={this.state.allotment} onChange={this.changeAllotment}/>
          </label>
        </div>
        <Results
          today={this.state.todayMileage}
          date={this.state.leaseDate}
          initial={this.state.initialMileage}
          term={this.state.term}
          allotment={this.state.allotment}
        />
      </div>
    )

  }
}

export default Lease;