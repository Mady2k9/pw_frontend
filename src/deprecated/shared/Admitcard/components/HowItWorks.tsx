import React, { useEffect, useRef } from 'react';
import Works1 from '../../../assets/Images/admitcard/Works1.svg';
import Works2 from '../../../assets/Images/admitcard/Works2.svg';
import Works3 from '../../../assets/Images/admitcard/Works3.svg';
import Image from 'next/image';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <p className="m-1 font-bold md:text-4xl text-2xl">Know How It Works?</p>
      </div>
      <div className="my-4">
        <div className="w-full flex flex-col md:flex-row md:px-4 mt-12">
          <div
            className={`w-full md:w-1/2 flex justify-center items-center md:border-r-2 md:border-r-[#D9DCE1] ${styles.scroll}`}
          >
            <img
              src={Works1.src}
              alt={''}
              className="h-[152px] w-[212px] md:h-[274px] md:w-[382px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col p-4 md:p-20 align-middle md:text-left text-center md:my-16">
            <div className="flex justify-center md:justify-start">
              <div className="rounded-full h-6 w-6 md:h-8 md:w-8 bg-black text-white flex flex-col justify-center align-middle p-1 md:p-3 text-center">
                1
              </div>
            </div>
            <p className="font-bold md:text-3xl m-1 text-[16px] mt-4">
              Fill your admit card details
            </p>
            <p className="m-1 text-sm md:text-base">
              Enter the details mentioned in the form above
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse md:px-4 mt-8 md:m-0">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={Works2.src}
              alt={''}
              className="h-[152px] w-[212px] md:h-[274px] md:w-[382px]"
            />
          </div>
          <div
            className={`w-full md:w-1/2 flex flex-col p-4 md:p-20 align-middle md:text-left text-center  md:border-r-2 md:border-r-[#D9DCE1] ${styles.scroll}`}
          >
            <div className="flex justify-center md:justify-start">
              <div className="rounded-full h-6 w-6 md:h-8 md:w-8 bg-black text-white flex flex-col justify-center align-middle p-1 md:p-3 text-center">
                2
              </div>
            </div>

            <p className="font-bold text-[16px] md:text-3xl m-1 mt-4">
              Verify Your Number
            </p>
            <p className="m-1 text-sm md:text-base">
              Verify your JEE Mobile Number or use PW Registered Mobile Number
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:px-4 md:m-0 mt-8">
          <div
            className={`w-full md:w-1/2 flex justify-center items-center md:border-r-2 md:border-r-[#D9DCE1] ${styles.scroll}`}
          >
            <img
              src={Works3.src}
              alt={''}
              className="h-[152px] w-[212px] md:h-[274px] md:w-[382px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col p-4 md:p-20 align-middle md:text-left text-center md:my-16">
            <div className="flex justify-center md:justify-start">
              <div className="rounded-full h-6 w-6 md:h-8 md:w-8 bg-black text-white flex flex-col justify-center align-middle p-1 md:p-3 text-center">
                3
              </div>
            </div>

            <p className="font-bold text-[16px] md:text-3xl m-1 mt-4">
              Win access to JEE Preparation Bundle!
            </p>
            <p className="m-1 text-sm md:text-base">
              Get free access to JEE Prep package (Tests, PYQs and more) and
              other exciting rewards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
