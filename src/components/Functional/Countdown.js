"use client"
import { useState } from "react";
const Countdown = () => {
  let countDownDate = new Date("Feb 29, 2024 00:00:00").getTime();
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  //   console.log(countDownDate);
  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)) );
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) );
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) );
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000) );

    if (distance < 0) {
      clearInterval(x);
     setDays("00")
     setHours("00")
     setMinutes("00")
     setSeconds("00")
    }
  }, 1000);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-primary ">
          <span id="days" className="countdown font-mono text-3xl lg:text-5xl">
            {days}
          </span>
          days
        </div>
        <div
          id="hours"
          className="flex flex-col p-2 bg-neutral rounded-box text-primary"
        >
          <span className="countdown font-mono text-3xl lg:text-5xl">{hours}</span>
          hours
        </div>
        <div
          id="minutes"
          className="flex flex-col p-2 bg-neutral rounded-box text-primary"
        >
          <span className="countdown font-mono text-3xl lg:text-5xl">{minutes}</span>
          min
        </div>
        <div
          id="seconds"
          className="flex flex-col p-2 bg-neutral rounded-box text-primary"
        >
          <span className="countdown font-mono text-3xl lg:text-5xl">{seconds}</span>
          sec
        </div>
        
    
      </div>
  );
};

export default Countdown;
