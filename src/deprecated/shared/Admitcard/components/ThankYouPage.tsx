import React, { memo } from 'react';
import Success from './lotties/Success';
import ConfettiLottie from './lotties/ConfettiLottie';

type Props = {
  resubmitHandler: () => void;
  startPrepCTA: () => void;
};

const ThankYouPage: React.FC<Props> = ({ resubmitHandler, startPrepCTA }) => {
  return (
    <div className="w-full bg-white rounded-md p-1 z-10 shadow-md">
      <div className="flex justify-center">
        <div className="md:h-72 md:w-72 h-40 w-40">
          <Success></Success>
          <div className="md:-mt-64 -mt-36">
            <ConfettiLottie></ConfettiLottie>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle">
        <p className="font-semibold md:text-3xl text-center text-sm xl:text-4xl">
          You have won access to JEE Preparation Package!
        </p>
        <p className="text-center m-2 md:px-10 text-xs md:text-base">
          Thank you for submitting your admit card details
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex justify-end">
          <button
            className="bg-black text-white m-2 md:m-4 rounded-md md:w-44 w-full h-[48px]"
            onClick={startPrepCTA}
          >
            Start Preparation
          </button>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-white text-black border border-[#D9DCE1] p-2 m-2 md:m-4 rounded-md md:w-44 w-full h-48px"
            onClick={resubmitHandler}
          >
            Resubmit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ThankYouPage);
