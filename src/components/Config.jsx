import React, {Component} from 'react';
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
      <div>
        <div className="today">
          <label>
            Today's Mileage
            <input type="text" value={this.state.todayMileage} onChange={this.changeToday}/>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Name of Vehicle
            <div className="inputContainer">
              <input type="text" value={this.state.vehicleName} onChange={this.changeName}/>
            </div>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Date of Lease
            <div className="inputContainer">
              <input type="date" value={this.state.leaseDate} onChange={this.changeDate}/>
            </div>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Initial Mileage
            <div className="inputContainer">
              <input type="text" value={this.state.initialMileage} onChange={this.changeMileage}/>
            </div>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Term Of Lease
            <div className="inputContainer">
              <input type="text" value={this.state.term} onChange={this.changeTerm}/><span>Months</span>
            </div>
          </label>
        </div>
        <div className="leasedata">
          <label>
            Lease Mileage Allotment
            <div className="inputContainer">
              <input type="text" value={this.state.allotment} onChange={this.changeAllotment}/>
            </div>
          </label>
        </div>
      </div>
    )

  }
}

export default Config;