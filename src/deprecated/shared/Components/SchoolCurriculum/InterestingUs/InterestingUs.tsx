import React, { useEffect, useRef, useState } from 'react';
import { Image } from '@/components/ui/image';
import Button from '../ReusableButton/ReusableButton';

import Modal from '../Modal/Modal';
import SendImageBoy from '../../../../assets/Images/BoyLerning.gif';
import SendImageStudent from '../../../../assets/Images/Student.gif';
import SendImageStudy from '../../../../assets/Images/Study.gif';
import AnimationsStyle from './InterestingUs.module.css';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import TransitionWrapperLeft from '../../SchoolCurriculumListing/SchoolTransitionWrapper/TransitionWrapperLeft';
import TransitionWrapperRight from '../../SchoolCurriculumListing/SchoolTransitionWrapper/TransitionWrapperRight';
import Frame from '../../../../assets/Images/Schools/Frame.webp';


function InterestingUs() {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };

  return (
    <div className="flex w-full items-center max-w-6xl px-8 flex-col mx-auto pt-[28px] md:pt-12">
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
      <div className="my-6 flex flex-col gap-1 ">
        <TransitionWrapperLeft>
          <div
            className={`flex flex-col sm:flex-row items-center justify-around`}
          >
            <div className="w-4/5 ms-6">
             
              <Image src={`${SendImageBoy.src}`} className={
                  'md:w-[358px] md:h-[256px] w-[200px] h-[120px] bg-bottom bg-cover bg-no-repeat'
                } alt='SendImageBoy'/>
            </div>
            <div className="w-full flex flex-col gap-4 pe-5 items-center justify-center">
              <div className="font-bold md:leading-[32px] md:text-[24px] leading-[28px] text-[18px] text-[#1B2124]">
                Visual Learning Experience for Every Chapter & Concept
              </div>

              <div className="text-[#3d3d3d] bg-white md:leading-[28px] md:text-[18px] leading-[20px] text-[14px] font-medium">
                Immerse in a dynamic and engaging e-learning experience that
                caters to students’ individual learning styles
              </div>
            </div>
          </div>
        </TransitionWrapperLeft>

        <TransitionWrapperRight>
          <div
            className={`flex flex-col sm:flex-row items-center justify-around  `}
          >
            <div className="w-full flex flex-col gap-3 pe-5 justify-center">
              <div className="font-bold md:leading-[32px] md:text-[24px] leading-[28px] text-[18px] text-[#1B2124]">
                Workbooks & Reading Material for Practice
              </div>

              <div className="text-[#3d3d3d] bg-white md:leading-[28px] md:text-[18px] leading-[20px] text-[14px] font-medium">
                Equipped with comprehensive workbooks and curated reading
                material that ensures ample practice
              </div>
            </div>
            <div className="md:w-3/5 order-first md:order-last">
              <Image src={`${SendImageStudent.src}`}  className={
                  'md:w-[358px] md:h-[256px] w-[200px] h-[120px] bg-bottom bg-cover bg-no-repeat '
                }
                alt="SendImageStudent"/>
            </div>
          </div>
        </TransitionWrapperRight>
        <TransitionWrapperLeft>
          <div
            className={`flex flex-col sm:flex-row items-center justify-around `}
          >
            <div className="md:w-4/5 ms-6">
             
              <Image src={`${SendImageStudy.src}`} alt='SendImageStudy' className={
                  'md:w-[358px] md:h-[256px] w-[200px] h-[120px] bg-bottom bg-cover bg-no-repeat '
                } />
            </div>
            <div className="w-full flex flex-col gap-3 pe-5 justify-center">
              <div className="font-bold md:leading-[32px] md:text-[24px] leading-[28px] text-[20px] text-[#1B2124]">
                Chapter-wise Quizzes & Tests
              </div>

              <div className="text-[#3d3d3d] bg-white md:leading-[28px] md:text-[18px] leading-[20px] text-[14px] font-medium">
                Enhance understanding and retention of each chapter with our
                interactive chapter-wise quizzes and tests
              </div>
            </div>
          </div>
        </TransitionWrapperLeft>
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
