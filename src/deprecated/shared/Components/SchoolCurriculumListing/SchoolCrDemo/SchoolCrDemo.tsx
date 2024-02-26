import React, { useEffect, useRef, useState } from 'react';
import {Image} from '@/components/ui/image';
import playbuttonwebp from '../../../../assets/Images/Schools/playbuttonwebp.webp';
import dots from '../../../../assets/Images/Schools/Dots.webp'
import StarVector from '../../../../assets/Images/Schools/StarVector.webp';
import VectorLeft from '../../../../assets/Images/Schools/Vector-left.webp';
import VectorRight from '../../../../assets/Images/Schools/Vector-right.webp';
import Pexels from '../../../../assets/Images/Schools/Pexels.webp';
import PexelsMweb from '../../../../assets/Images/Schools/PexelsMweb.webp';
import dynamic from 'next/dynamic';
const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);

function SchoolCrDemo() {
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
  return (
    <div className="py-10 relative overflow-hidden">
      {showVideoPopup ? (
        <div
          className="fixed h-screen inset-0 bg-black/20 z-50 flex justify-between items-center"
          aria-hidden="true"
          ref={videoContainerRef}
        >
          <div
            className={
              'mx-auto bg-black rounded-lg aspect-video absolute z-50 left-0 right-0 max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px]'
            }
          >
            <div className="absolute -top-3 -right-3 bg-black text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer duration-200 transition-all text-2xl pb-1">
              x
            </div>
            <DynamicVideoComponent
              src={`${getYtUrl(
                'https://www.youtube.com/embed/47H01638-9w?si=6zAj5IrAToauPPQp'
              )}`}
              title={'YT-video'}
              className={'h-full w-full  rounded-lg'}
            />
          </div>
        </div>
      ) : null}
      <div className="font-bold xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] text-[#1B2124] text-center ">
        Digital Resources Demo Video
      </div>
      <div className="mx-auto xl:max-w-6xl w-full    px-2 md:px-0  pt-6 relative ">
        <div
          style={{ backgroundImage: `url(${Pexels.src})` }}
          className="bg-center  bg-cover bg-no-repeat   h-[480px] w-full rounded-lg sm:flex items-center justify-center hidden "
        >
          {/* <img
            onClick={handleShowVideo}
            src="/playbuttonwebp.webp"
            alt="/playbuttonwebp.webp"
            className={
              'md:w-[72px] md:h-[72px] w-[48px]  h-[48px] bg-center bg-contain bg-no-repeat cursor-pointer hover:rounded-full hover:bg-[#FFD2B3] hover:shadow-2xl  ease-in-out duration-300'
            }
          /> */}
           <Image src={`${playbuttonwebp.src}`}
          onClick={handleShowVideo} 
          className={
            'md:w-[72px] md:h-[72px] w-[48px]  h-[48px] bg-center bg-contain bg-no-repeat cursor-pointer hover:rounded-full hover:bg-[#FFD2B3] hover:shadow-2xl  ease-in-out duration-300'
          }/>
          
        </div>
        <div
          style={{ backgroundImage: `url(${PexelsMweb.src})` }}
          className="bg-center  bg-cover bg-no-repeat   h-[216px] w-[96%] mx-auto rounded-lg flex items-center justify-center sm:hidden"
        >
          <Image
            onClick={handleShowVideo}
            src={`${playbuttonwebp.src}`}
            className={
              'md:w-[57px] md:h-[57px] w-[48px] h-[48px] bg-center bg-contain bg-no-repeat cursor-pointer '
            }
          />
        </div>
      </div>
      <div className="">
        <Image
          src={`${dots.src}`}
          className={
            'xl:h-[89px] md:w-[19px] xl:w-[28px] h-[42px] w-[28px] bg-center bg-contain bg-no-repeat absolute xl:bottom-[200px] xl:left-[118px] bottom-[90px] md:left-[-4px] left-[-5px] 2xl:left-[670px]'
          }
        />
        
        <Image
          src={`${dots.src}`}
          className={
            'xl:h-[89px]  h-[42px] w-[28px] md:w-[19px] xl:w-[28px] bg-center bg-contain bg-no-repeat absolute xl:top-[192px] xl:right-[109px] md:top-[113px] lg:right-[-5px] md:right-[-4px] top-[120px] right-[-4px] 2xl:right-[675px]'
          }
        />
        <Image
          src={`${StarVector.src}`}
          className={
            'xl:h-[124px] xl:w-[124px] md:h-[80px] md:w-[43px] bg-center bg-contain bg-no-repeat absolute top-[30px] left-[0px] hidden sm:block  2xl:left-[575px]'
          }
        />
        <Image
          src={`${VectorLeft.src}`}
          className={
            'h-[40px] w-[40px] bg-center bg-contain bg-no-repeat absolute top-[30px] left-[-5px] block sm:hidden'
          }
        />
        <Image
          src={`${StarVector.src}`}
          className={
            'xl:h-[124px] xl:w-[124px] md:h-[80px] md:w-[43px] bg-center bg-contain bg-no-repeat absolute xl:bottom-[30px] md:bottom-[-22px] right-[0px] 2xl:right-[575px] sm:block hidden'
          }
        />
        <Image
          src ={`${VectorRight.src}`}
          className={
            'h-[40px] w-[40px] bg-center bg-contain bg-no-repeat absolute bottom-[20px] right-[-5px] block sm:hidden'
          }
        />
      </div>
    </div>
  );
}

export default SchoolCrDemo;
