import React, {useState,useEffect} from 'react';
import pvp from '../assets/pvp.gif';
import Long from '../assets/Longest.gif';
import Clock from './Clock';

const Player = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Feb 10,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });


  return (
    <div className="container">
    <div className='row justify-content-center'>
       <div className=" col-md-6">
        <div className='mb-2' >
        
       <img className=' d-block ms-0 w-100 ' src={pvp} alt="pvp-coming-soon" />
       </div>

       <div className='' >
       <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
       <img className=' d-block ms-0 w-100 running' src={Long} alt="Longest-Running-Reward" />
       </div>

       </div>
    </div>
    </div>
  );
}

export default Player;