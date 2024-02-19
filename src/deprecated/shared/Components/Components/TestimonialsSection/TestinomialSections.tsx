import React, { memo, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from '../../Atoms/Image/Image';
import { StudentformProps } from './TestimonialType.d';
import PlayCircleIcon from '../../../../assets/Images/play-circle.webp';
import CommaIcon from '../../../../assets/Images/comma.webp';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';

const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);
const TestimonialCardSections = dynamic(
  () => import('./TestimonialCardSections'),
  {
    ssr: false,
  }
);

const StudentFrom = ({
  testinomialData,
}: {
  testinomialData: StudentformProps;
}) => {
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
    // const params = url?.split('v=');
    // console.log(params ,'aa')
    // const ytId = params[1];
    // console.log(params[1], 'aa')

    // return `https://www.youtube.com/embed/${ytId}`;
  };
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedTestimonialData = testinomialData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  return (
    <>
      <div className="bg-[#F8F8F8] py-10 gap-y-5 flex flex-col relative  ">
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
                src={`${getYtUrl(sortedTestimonialData[0]?.video)}`}
                title={'YT-video'}
                className={'h-full w-full  rounded-lg'}
              />
            </div>
          </div>
        ) : null}
        <div>
          <TransitionWrapper>
            <div className="xl:mb-8 md:mb-6 mb-5 flex flex-col animate-in slide-in-from-bottom delay-300 duration-1000">
              <h2 className="font-[700] mb-2 text-[#1B2124] text-xl  xl:text-[32px] xl:leading-[48px] text-center">
                {testinomialData?.sectionTitle}
              </h2>

              <div className="font-[500]  text-[#3D3D3D] text-sm  xl:text-lg text-center">
                {testinomialData?.sectionSubTitle}
              </div>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div
              style={{ boxShadow: '0px 1px 8px 0px #00000014' }}
              className=" max-w-6xl m-auto rounded bg-white  sm:p-6 mx-4 sm:mx-6 xl:mx-auto p-4 md:gap-8 gap-5 flex flex-col sm:flex-row "
            >
              <div className="relative">
                <Image
                  onClick={handleShowVideo}
                  bgImagetitle={sortedTestimonialData[0]?.dwebBannerImages}
                  className={
                    'w-full h-[166px] sm:h-[270px] cursor-pointer sm:w-[400px] xl:w-[480px] rounded bg-no-repeat bg-cover bg-center'
                  }
                />
                <Image
                  onClick={handleShowVideo}
                  bgImagetitle={`${PlayCircleIcon.src}`}
                  className={
                    'h-14 w-14 bg-center cursor-pointer bg-no-repeat bg-contain absolute bottom-2 md:bottom-7 lg:bottom-3 left-2'
                  }
                />
              </div>
              <div className=" relative">
                <Image
                  bgImagetitle={`${CommaIcon.src}`}
                  className={
                    'w-10 h-7 bg-center bg-no-repeat bg-contain mb-3.5'
                  }
                />

                <div className="sm:text-base text-sm text-[#3D3D3D] font-medium sm:mb-6  mb-3">
                  {sortedTestimonialData[0]?.testimonial}
                </div>
                <div className="lg:absolute bottom-0">
                  <div className="text-base text-[#1B2124] mb-1 font-bold">
                    {sortedTestimonialData[0]?.studentName}
                  </div>
                  <div className="flex gap-2">
                    <div className="text-[#5A4BDA] text-xs font-semibold border-r-3 border-black ">
                      {sortedTestimonialData[0]?.rank}
                    </div>
                    <hr className="border h-4" />

                    <div className="text-[#5A4BDA] text-xs font-semibold">
                      {sortedTestimonialData[0]?.exam}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionWrapper>
        </div>
        <TestimonialCardSections testinomialData={testinomialData} />
      </div>
    </>
  );
};
export default memo(StudentFrom);
