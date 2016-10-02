import React from "react";
import {
  getInitialMileage,
  getVehicleName,
  getLeaseDate,
  getMileageAllotment,
  getLeaseTerm,
  getTodayMileage
} from './configuration';

const millisPerDay = 24 * 60 * 60 * 1000;

const Lease = () => {

  const numberOfDays = () => {
    return Math.ceil((Date.now() - Date.parse(getLeaseDate())) / millisPerDay);
  };

  const leaseDays = () => {
    return 365 * getLeaseTerm() / 12;
  };

  const milesAllottedPerDay = () => {
    return getMileageAllotment() / leaseDays();
  };

  const milesAllotted = () => {
    return milesAllottedPerDay() * numberOfDays();
  };

  const milesDriven = () => {
    return getTodayMileage() - getInitialMileage();
  };

  const milesOverLimit = () => {
    return milesDriven() - milesAllotted();
  };

  const daysOverLimit = () => {
    return milesOverLimit() / milesAllottedPerDay();
  };

  const averageMilesPerDay = () => {
    return milesDriven() / numberOfDays();
  };

  const expectedMiles = () => {
    return averageMilesPerDay() * leaseDays();
  };

  return (
    <div>
      <div>
        <span className="big">{numberOfDays()}</span><span> days since start of lease.</span>
      </div>
      <div>
        <span className="big">{Math.round(milesAllottedPerDay())}</span><span> miles allotted per day.</span>
      </div>
      <div>
        <span className="big">{Math.round(milesAllotted())}</span><span> total miles allotted.</span>
      </div>
      <div>
        <span className="big">{milesDriven()}</span><span> miles driven.</span>
      </div>
      { milesDriven() < milesAllotted() ?
        <div>Congratulations, you are under the allotted mileage. Happy Driving!</div> :
        <div>
          <span className="warning">Warning</span>, you are over the allotted mileage  by <span className="big">{Math.round(milesOverLimit())}</span> miles.
          <div>
            This is equivalent to about <span className="big">{Math.round(daysOverLimit())}</span> days worth of driving. Slow down!
          </div>
          <div>
            You have driven an average of <span className="big">{Math.round(averageMilesPerDay())}</span> miles per day.
          </div>
        </div>
      }
      <div>
        At the present rate you will have driven <span className="big">{Math.round(expectedMiles())}</span> miles at end of lease.
      </div>
    </div>
  )
};

export default Lease;

