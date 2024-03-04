import React from 'react';
import { Image } from '@/components/ui/image';
import realTest1 from '../../../../assets/Images/PwRealTest/realTest1.webp'
function AboutRealTest() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 my-5">
      <div className=" flex justify-between w-full xl:p-6 p-4 border rounded-lg bg-white shadow ">
        <div className="md:w-[80%]  flex flex-col">
          <div className="xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] font-[700] text-[#1B2124]">
          What is the PW REAL Test for NEET?
          </div>
          <div className=" md:text-base md:font-medium  text-[#3D3D3D] text-xs font-medium xl:pt-[20px] pt-[6px]">
          The PW REAL Test for{' '}
             NEET . is a significant event aimed at providing students with a genuine experience of the NEET exam process,
            <span className="font-bold">
              {' '}
              from registration to results
            </span>
            . It&apos;s designed to be just like the real deal, with questions on Physics, Chemistry, and Biology (Botany and Zoology) – covering everything you need to know. This test helps you see how ready you are for the NEET exam by mimicking its format, difficulty, time limits and exam process including admit card release, center allocation and results. Scheduled for 07th April, this event aims to enhance student&apos;s readiness and confidence through a simulated NEET like environment. So, the PW REAL Test for NEET is like a key tool to help you prepare better and do awesome in the actual NEET exam. Good luck, and give it your best shot in the PW REAL Test for NEET!

          </div>
        </div>
        <div className="sm:flex hidden items-center">
          <Image
            src={realTest1.src}
            alt="realTest"
            className={'h-[160px] w-[166px] bg-center bg-contain bg-no-repeat '}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutRealTest;
