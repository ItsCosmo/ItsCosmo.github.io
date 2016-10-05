import React, {Component} from 'react';
import Results from './Results';

import {
  setInitialMileage,
  getInitialMileage,
  setTodayMileage,
  getTodayMileage,
  setVehicleName,
  getVehicleName,
  setLeaseDate,
  getLeaseDate,
  setLeaseTerm,
  getLeaseTerm,
  setMileageAllotment,
  getMileageAllotment
} from './configuration';

class Config extends Component {

  state = {
    vehicleName: getVehicleName() || '',
    leaseDate: getLeaseDate() || '',
    initialMileage: getInitialMileage() || 0,
    todayMileage: getTodayMileage() || 0,
    term: getLeaseTerm() || 0,
    allotment: getMileageAllotment() || 0
  };

  constructor(props) {
    super(props);
  }

  changeAllotment = e => {
    setMileageAllotment(e.target.value);
    this.setState({
      allotment: e.target.value
    })
  };

  changeTerm = e => {
    setLeaseTerm(e.target.value);
    this.setState({
      term: e.target.value
    })
  };

  changeMileage = e => {
    setInitialMileage(e.target.value);
    this.setState({
      initialMileage: e.target.value
    });
  };

  changeToday = e => {
    setTodayMileage(e.target.value);
    this.setState({
      todayMileage: e.target.value
    });
  };

  changeName = e => {
    setVehicleName(e.target.value);
    this.setState({
      vehicleName: e.target.value
    })
  };

  changeDate = e => {
    setLeaseDate(e.target.value);
    this.setState({
      leaseDate: e.target.value
    })
  };

  render() {
    return (
      <div className="tracker">
        <div className="today leasedata">
          <label>
            Today's Mileage
            <input type="text" value={this.state.todayMileage} onChange={this.changeToday}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Name of Vehicle
            <input type="text" value={this.state.vehicleName} onChange={this.changeName}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Date of Lease
            <input type="date" value={this.state.leaseDate} onChange={this.changeDate}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Initial Mileage
            <input type="text" value={this.state.initialMileage} onChange={this.changeMileage}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Term Of Lease (Months)
            <input type="text" value={this.state.term} onChange={this.changeTerm}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Lease Mileage Allotment
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

export default Config;