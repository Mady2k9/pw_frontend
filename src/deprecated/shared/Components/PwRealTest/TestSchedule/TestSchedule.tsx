import React from 'react';
import { Image } from '@/components/ui/image';
import registOpen from '../../../../assets/Images/PwRealTest/registOpen.webp';
import registClose from '../../../../assets/Images/PwRealTest/registClose.webp';
import IdCard from '../../../../assets/Images/PwRealTest/id-card.webp';
import Exam from '../../../../assets/Images/PwRealTest/exam.webp';
function TestSchedule() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 ">
      <div className="w-full bg-white my-5 border rounded-lg p-6 shadow">
        <div className="flex md:justify-between pb-5 ">
          <div className="xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] font-[700] text-[#1B2124] ">
            PW REAL Test Schedule
          </div>
          {/* <div className="bg-[#5A4BDA] h-[48px] w-[126px] sm:flex p-3 gap-2 rounded-md hidden">
            <Image
              bgImagetitle={'ButtonLeft.webp'}
              className={'h-5 w-5 bg-center bg-contain bg-no-repeat pt-3'}
            />
            <div className='text-[16px] leading-[24px] font-[600] text-[#FFF]'>Syllabus</div>
          </div> */}
        </div>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">
          <div className="bg-[#F8F8F8] xl:p-6  p-3 items-center rounded-md">
            <div className="flex sm:flex-row gap-5">
              <Image
                src={`${registOpen.src}`}
                alt='registOpen'
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] font-[700] text-[#3D3D3D]">
                  Registration Opening Date
                </div>
                <div className="xl:text-[16px] xl:leading-[22px] text-[14px] leading-[20px] font-[500] text-[#3D3D3D]">
                  {' '}
                  4th March 2024
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] xl:p-6  p-3 items-center rounded-md">
            <div className="flex sm:flex-row gap-5">
              <Image
                src={`${registClose.src}`}
                alt='registClose'
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] font-[700] text-[#3D3D3D]">
                  Registration Closing Date
                </div>
                <div className="xl:text-[16px] xl:leading-[22px] text-[14px] leading-[20px] font-[500] text-[#3D3D3D]">
                  {' '}
                  17st March 2024
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] xl:p-6  p-3 items-center rounded-md">
            <div className="flex sm:flex-row gap-5">
              <Image
                src={`${IdCard.src}`}
                alt='id-card'
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] font-[700] text-[#3D3D3D]">
                  Admit Card Release Date
                </div>
                <div className="xl:text-[16px] xl:leading-[22px] text-[14px] leading-[20px] font-[500] text-[#3D3D3D]">
                  {' '}
                  31st March 2024
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] xl:p-6  p-3 items-center rounded-md">
            <div className="flex sm:flex-row gap-5">
              <Image
                src={`${Exam.src}`}
                alt='exam'
                className={
                  'h-[48px] w-[48px] xl:h-[84px] xl:w-[85px] bg-center bg-contain bg-no-repeat rounded-full'
                }
              />
              <div className="flex flex-col justify-center gap-3">
                <div className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] font-[700] text-[#3D3D3D]">
                  Exam Conducting Date
                </div>
                <div className="xl:text-[16px] xl:leading-[22px] text-[14px] leading-[20px] font-[500] text-[#3D3D3D]">
                  {' '}
                  7th April 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#5A4BDA] h-[48px] w-[100%] flex justify-center  p-3 gap-2 rounded-md sm:hidden mt-4 content-center">
          <Image
            bgImagetitle={'ButtonLeft.webp'}
            className={'h-5 w-5 bg-center bg-contain bg-no-repeat pt-3'}
          />
          <div className='text-[16px] leading-[24px] font-[600] text-[#FFF]'>Syllabus</div>
        </div> */}
      </div>
    </div>
  );
}

export default TestSchedule;
