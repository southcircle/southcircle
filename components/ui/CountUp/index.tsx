'use client'
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  amount: number;
  duration: number;
}

const CountUp: React.FC<CountUpProps> = ({ amount, duration }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = amount / (duration / 100); // Calculate how much to increment by per interval

    const timer = setInterval(() => {
      start += increment;
      if (start >= amount) {
        setCount(amount);
        clearInterval(timer); // Stop when the final amount is reached
      } else {
        setCount(Math.ceil(start)); // Round the value to display a whole number
      }
    }, 100); // 100ms interval

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [amount, duration]);

  return <div className='font-baseneue text-9xl'>{count}</div>;
};

export default CountUp;
