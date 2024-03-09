import React, { useEffect, useRef, useState } from 'react';
import TestonomialCard from '../TestonomialCard/TestonomialCard';
import SchoolCarousel from '../SchoolCarousel/SchoolCarousel';
import { Image } from '@/components/ui/image';
import playbuttonwebp from '../../../../assets/Images/Schools/playbuttonwebp.webp';
import schoolsTest from '../../../../assets/Images/Schools/teacherSchools.webp';
import CommaIcon from '../../../../assets/Images/comma.webp';
import ScreenshotTestonomial from '../../../../assets/Images/Schools/Thumbnail-01.webp';

import dynamic from 'next/dynamic';

const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);
function Testonomial() {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        videoContainerRef.current &&
        videoContainerRef?.current?.contains(event.target as Node)
      ) {
        setShowVideoPopup(false);
        document.body.style.overflow = 'auto';
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleShowVideo = () => {
    document.body.style.overflow = 'hidden';
    setShowVideoPopup(true);
  };
  const getYtUrl = (url: string) => {
    if (url?.includes('embed')) return url + '&autoplay=1';
  };
  const array = [<TestonomialCard key={0} />];
  return (
    <div className='mx-auto xl:max-w-6xl w-full'>
      {showVideoPopup ? (
        <div
          className="fixed h-screen inset-0 bg-black/20 z-[79] pt-7 flex justify-between items-center"
          aria-hidden="true"
          ref={videoContainerRef}
        >
          <div
            className={
              'mx-auto bg-black rounded-lg aspect-video absolute z-50 mt-10 left-0 right-0 max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[500px]'
            }
          >
            <div className="absolute -top-3 -right-3 bg-black text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer duration-200 transition-all text-2xl pb-1">
              x
            </div>
            <DynamicVideoComponent
              src={`${getYtUrl(
                'https://www.youtube.com/embed/imjUfcxa9wQ?si=jL6jxXvIkEF2xudK'
              )}`}
              title={'YT-video'}
              className={'h-full w-full  rounded-lg'}
            />
          </div>
        </div>
      ) : null}
      <div className="font-bold md:leading-[48px] md:text-[32px] leading-[30px] text-[20px] text-[#1B2124] text-center pt-[20px] pb-[5px]">
        What schools are saying
      </div>
      <div
        style={{
          border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
          boxShadow: '0px 4px 0px 0px #000',
        }}
        className=" max-w-6xl  rounded  sm:p-6 mx-4 sm:mx-6 xl:mx-auto p-4 md:gap-8 gap-5 flex flex-col sm:flex-row border border-black">
        <div className="relative">
          <Image
          onClick={handleShowVideo} 

            src={ScreenshotTestonomial.src}
            className={
              'w-full h-[166px] sm:h-[270px] cursor-pointer sm:w-[400px] xl:w-[480px] rounded bg-no-repeat bg-cover bg-center'
            }
          />
          <Image
          onClick={handleShowVideo} 
          src={playbuttonwebp.src}
            alt='playbuttonwebp'
            className={
              'h-14 w-14 bg-center cursor-pointer bg-no-repeat bg-contain absolute bottom-2 md:bottom-7 lg:bottom-3 left-2'
            }
          />
        </div>
        <div className=" relative">
          <Image
            src={CommaIcon.src} 
            alt='CommaIcon'
            className={
              'w-10 h-7 bg-center bg-no-repeat bg-contain mb-3.5'
            }
          />

          <div className="sm:text-base text-sm text-[#3D3D3D] font-medium sm:mb-6  mb-3">
            The Bloom curriculum is exceptional, and the team behind it is equally impressive. Their dedication and kindness in delivering quality education are truly commendable. We are grateful for their unwavering support and commitment to excellence in all aspects of their work.
          </div>
          <div className="lg:absolute bottom-0 w-full">
            <div className="mt-7 flex flex-row items-center gap-3 w-full">
              <Image src={schoolsTest.src} alt='CommaIcon' className={'h-10 w-10 bg-no-repeat bg-cover rounded-full'} />
              <div  className='w-full'>
                <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D] ">
                  Ms. Ankur Jaipuria
                </div>
                <hr className="my-[6px] bg-coolGray-700 h-0.5 " />
                <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D]">
                  Director, Srishti International School, Jaipur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto xl:max-w-6xl w-full pt-[20px] px-4 md:px-0">
        <SchoolCarousel array={array} className="gap-8" />
      </div>
    </div>
  );
}

export default Testonomial;
