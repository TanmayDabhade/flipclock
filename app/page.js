'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Home() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex space-x-6 text-white">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="text-6xl bg-white text-black p-8 rounded-md shadow-md">
            {formatTimeUnit(time.hours())}
          </div>
          <span className="mt-4 text-lg uppercase">Hours</span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="text-6xl bg-white text-black p-8 rounded-md shadow-md">
            {formatTimeUnit(time.minutes())}
          </div>
          <span className="mt-4 text-lg uppercase">Minutes</span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="text-6xl bg-white text-black p-8 rounded-md shadow-md">
            {formatTimeUnit(time.seconds())}
          </div>
          <span className="mt-4 text-lg uppercase">Seconds</span>
        </div>
      </div>
    </div>
  );
}
