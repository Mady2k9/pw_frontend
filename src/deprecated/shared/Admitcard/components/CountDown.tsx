import React, { useEffect, memo } from 'react';

type CountDownProps = {
  seconds: number;
  setSeconds: (val: any) => void;
};

const CountdownTimer: React.FC<CountDownProps> = ({ seconds, setSeconds }) => {
  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds: number) => {
        return prevSeconds - 1;
      });
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${seconds}`;
  };

  return (
    <div>
      <p className="text-center text-[#5A4BDA]">{formatTime(seconds)}</p>
    </div>
  );
};

export default memo(CountdownTimer);
