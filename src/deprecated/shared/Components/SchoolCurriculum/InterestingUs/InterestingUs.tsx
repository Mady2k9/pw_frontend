import React, { useEffect, useRef, useState } from 'react';
import { Image } from '@/components/ui/image';
import Button from '../ReusableButton/ReusableButton';
import Modal from '../Modal/Modal';
import Frame from '../../../../assets/Images/Schools/Frame.webp';
import InterestingUsCard from '../InterestingUsCard/InterestingUsCard';
import {IntrestingData} from './SchoolsIntrestingWithjson';

function InterestingUs({isInViewport,refValue}:{isInViewport:boolean, refValue:any} ) {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };
  console.log(IntrestingData.IntrestingCardData,'IntrestingData.IntrestingCardData');
  return (
    <div className="flex w-full items-center max-w-6xl  flex-col mx-auto pt-[28px] md:pt-12">
      <div className="flex flex-col md:flex-row items-center relative">
        <div className="font-bold md:leading-[48px] md:text-[30px] leading-[30px] text-[20px] text-[#1B2124] text-center hidden sm:block">
          Making Learning <span className="text-[#FF6D0A]">Interesting</span>{' '}
          With Us
        </div>
        <div className="font-bold md:leading-[48px] md:text-[32px] leading-[30px] text-[20px] text-[#1B2124] text-center block sm:hidden">
          Making Learning <br />
          <span className="text-[#FF6D0A]">Interesting</span> <br />
          With Us
        </div>
        <div className="absolute sm:top-[17px] sm:right-[-127px] top-[64px] right-[-70px]">
          <img src={Frame.src} alt="easy too" className="w-[55px] h-[17px]" />
          <div
            className={`sm:mt-[-50px] sm:ml-[18px] mt-[-47px] ml-[20px] animate-spin relative `}
            style={{
              transform: 'rotate(15.00deg)',
              animation: `rotateAnimation  2s linear infinite`,
            }}
          >
            <style>
              {`
      @keyframes rotateAnimation {
        0% {
          transform: rotate(15deg);
        }
        50% {
          transform: rotate(20deg);
        }
        100% {
          transform: rotate(10deg);
        }
      }
    `}
            </style>
            <div className=" bg-[#FF6D0A] rounded-full text-[#F1F5FE] font-semibold md:text-sm text-[10px] py-2 px-3 ">
              and Easy too
            </div>
          </div>
        </div>
      </div>
      <div className="font-medium md:leading-[28px] md:text-[18px] leading-[20px] text-[14px] text-[#1B2124] pt-2 text-center">
        Preparing students for a bright future by making learning engaging &
        accessible
      </div>
      {/* "visual"  */}
      <div className="my-12 flex flex-wrap gap-5 mx-auto justify-center">
      {/* {IntrestingData.IntrestingCardData.map((cardData, index) => ( */}
      {IntrestingData.IntrestingCardData.map((cardData, index) => (
        <InterestingUsCard
          key={index}
          data={{
            image: cardData.image,
            heading: cardData.heading,
            subheading: cardData.subheding
          }}
        />
      ))}

      </div>
      <Button
        className={
          'xl:w-[200px] xl:h-[52px] w-[176px] h-[48px] text-[#fff] text-[16px] md:text-[18px] md:leading-[28px] font-[600] rounded-lg bg-[#1B2124] flex items-center justify-center cursor-pointer'
        }
        title={'Get Started'}
        handleClick={handleButtonClick}
      />
      {isCardVisible && <Modal />}
    </div>
  );
}

export default InterestingUs;
