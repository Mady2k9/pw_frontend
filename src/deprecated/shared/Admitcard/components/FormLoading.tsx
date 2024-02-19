import React from 'react';
import LoadingLottie from './lotties/LoadingLottie';

const FormLoading = () => {
  return (
    <div className="w-full bg-white rounded-md p-2 z-10 shadow-md">
      <div className="h-40 w-full flex justify-center">
        <LoadingLottie></LoadingLottie>
      </div>
      <div className="w-full text-center mb-4">
        <p className="font-semibold md:text-4xl text-xl m-1">Please Wait</p>
        <p className="text-lg m-1">Your details are being submitted...</p>
      </div>
    </div>
  );
};

export default FormLoading;
