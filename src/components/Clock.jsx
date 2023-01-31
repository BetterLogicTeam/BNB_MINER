import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ">
    <div>
      <section className="timer-container">
        <section className="timer">
          <div className="clock d-flex rounded-top">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p className="seconds">{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
    </div>
    </div>
    </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;