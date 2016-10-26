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
    const pct = Math.abs(Math.round(10 * (Math.round(1000 * expectedMiles() / allotment) / 10 - 100)) / 10);

    if (expectedMiles() < allotment) {
      return `${pct}% under limit`;
    }

    if (expectedMiles() > allotment) {
      return `${pct}% over limit`;
    }

    return 'perfect!'

  };

  const daysPct = Math.round(100 * numberOfDays() / leaseDays());
  const allotPct = Math.round(100 * milesDriven() / milesAllotted());

  return (
    <div className="results">
      <div style={{width: '50%', borderRight: '1px solid #ccc'}}>
        <div>
          <span className="big">{numberOfDays()}</span><span> days since start of lease.</span>
          <div style={{backgroundColor: 'blue', width: `${daysPct}%`, height: '1rem'}}></div>
        </div>
        <div>
          <span className="big">{Math.round(milesAllottedPerDay())}</span><span> miles allotted per day.</span>
        </div>
        <div>
          <span className="big">{Math.round(milesAllotted())}</span><span> total miles allotted so far.</span>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <span className="big">{milesDriven()}</span><span> miles driven.</span>
          <div style={{backgroundColor: 'blue', width: `${allotPct}%`, height: '1rem'}}></div>
        </div>
      </div>
      { milesDriven() < milesAllotted() ?
        <div>
          <div className="congrats">Congratulations!</div>
          <p>You are under the allotted mileage by <span className="big">{Math.round(Math.abs(milesOverLimit()))}</span> miles. Happy Driving!</p>
        </div> :
        <div>
          <div className="warning">Warning</div>
          <p>You are over the allotted mileage by <span className="big">{Math.round(milesOverLimit())}</span> miles.</p>
          <p>
            This is equivalent to about <span className="big">{Math.round(daysOverLimit())}</span> days worth of
            driving. Slow down!
          </p>
        </div>
      }
      <p>
        You have driven an average of <span className="big">{Math.round(averageMilesPerDay())}</span> miles per day.
      </p>
      <p>
        At the present rate you will have driven <span className="big">{Math.round(expectedMiles())}</span> miles at
        end of lease ({percentageOfAllotment()}).
      </p>
    </div>
  )
};

export default Results;

