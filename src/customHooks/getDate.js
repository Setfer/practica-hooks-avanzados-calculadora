import { useState, useEffect } from 'react';

const UseGetTime = function () {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return { time };
};

export default UseGetTime;

