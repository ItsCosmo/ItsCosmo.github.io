import React from "react";

const millisPerDay = 24 * 60 * 60 * 1000;

const Results = ({today, date, initial, term, allotment}) => {

  const numberOfDays = () => {
    return Math.ceil((Date.now() - Date.parse(date)) / millisPerDay);
  };

  const leaseDays = () => {
    return 365 * term / 12;
  };

  const milesAllottedPerDay = () => {
    return allotment / leaseDays();
  };

  const milesAllotted = () => {
    return milesAllottedPerDay() * numberOfDays();
  };

  const milesDriven = () => {
    return today - initial;
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

  const percentageOfAllotment = () => {
    const pct = Math.abs(Math.round(10 * (Math.round(1000*expectedMiles()/allotment) / 10 - 100)) / 10);

    if (expectedMiles() < allotment) {
      return `${pct}% under limit`;
    }

    if (expectedMiles() > allotment) {
      return `${pct}% over limit`;
    }

    return 'perfect!'

  };

  return (
    <div className="results">
      <div>
        <span className="big">{numberOfDays()}</span><span> days since start of lease.</span>
      </div>
      <div>
        <span className="big">{Math.round(milesAllottedPerDay())}</span><span> miles allotted per day.</span>
      </div>
      <div>
        <span className="big">{Math.round(milesAllotted())}</span><span> total miles allotted so far.</span>
      </div>
      <div>
        <span className="big">{milesDriven()}</span><span> miles driven.</span>
      </div>
      { milesDriven() < milesAllotted() ?
        <div>Congratulations, you are under the allotted mileage. Happy Driving!</div> :
        <div>
          <span className="warning">Warning</span>, you are over the allotted mileage by <span
          className="big">{Math.round(milesOverLimit())}</span> miles.
          <div>
            This is equivalent to about <span className="big">{Math.round(daysOverLimit())}</span> days worth of
            driving. Slow down!
          </div>
          <div>
            You have driven an average of <span className="big">{Math.round(averageMilesPerDay())}</span> miles per day.
          </div>
        </div>
      }
      <div>
        At the present rate you will have driven <span className="big">{Math.round(expectedMiles())}</span> miles at
        end of lease ({percentageOfAllotment()}).
      </div>
    </div>
  )
};

export default Results;

