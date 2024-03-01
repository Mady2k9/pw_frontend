import React from 'react';
import { Image } from '@/components/ui/image';
import Icons from '../../../../assets/Images/PwRealTest/Icons.webp';
import Elearning from '../../../../assets/Images/PwRealTest/e-learning.webp';
import Group from '../../../../assets/Images/PwRealTest/Group.webp';
function TestBenefits() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 my-5">
      <div className="bg-[#FFF6E5]  border rounded-lg p-6 shadow">
        <div className="xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px]  font-[700] text-[#1B2124] pl-2 mb-5">
          How PW REAL Test benefits the students?
        </div>
        <div className="flex sm:flex-row flex-col justify-center  gap-7">
          <div className="  bg-white rounded-lg p-4 shadow">
            <div>
              <Image
                h-
                src={`${Icons.src}`}
                alt='Icons.webp'
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
            </div>
            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
              NTA Styled Test
            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
            It’s like a NEET before NEET so that students can get an actual hands on experience of how the exam is going to be like


            </div>
          </div>
          <div className="  bg-white rounded-md  shadow-lg p-4">
            <Image
              h-
              src={`${Elearning.src}`}
              alt='e-learning'
              className={
                'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
              }
            />

            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
            Pen-Paper Exam Practice
            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
            Students preparing online can get an experience of the offline papers so that they are well prepared for the final NEET exam. 

            </div>
          </div>
          <div className="  bg-white rounded-md shadow-lg p-4">
            <Image
              h-
              src={`${Group.src}`}
              alt='Group'
              className={
                'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
              }
            />

            <div className="text-[18px] leading-[28px] font-[700] text-[#1B2124] mt-3">
            Compete with students Nationwide

            </div>
            <div className="text-[14px] leading-[20px] font-[500] text-[#757575]">
            Get a chance to showcase your caliber and potential among students participating from PAN India

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestBenefits;
