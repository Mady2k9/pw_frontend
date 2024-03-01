import React, { useEffect, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import { CaraouselDataType } from './CarouselType';
import eventTracker from '../../EventTracker/eventTracker';
import PrimaryRightIcon from '../../../../assets/Images/swipe-right-arrow.webp';
import PrimaryLeftIcon from '../../../../assets/Images/swipe-left-arrow.webp';
import RightSecondaryArrow from '../../../../assets/Images/right-arrow-carousel.webp';
import LeftSecondaryArrow from '../../../../assets/Images/left-arrow-carousel.webp';
import { useGlobal } from '@/contexts/global';

function Caraousel({
                     showPrimaryArrow,
                     showSecondaryArrow,
                     setIntervalTime,
                     carouselData,
                     mwebImageClassName,
                     dwebImageClassName,
                     imageUpperDiv,
                     containerClass,
                   }: {
  showPrimaryArrow?: boolean;
  showSecondaryArrow?: boolean;
  setIntervalTime?: number;
  carouselData: CaraouselDataType[];
  containerClass: string;
  imageUpperDiv?: string;
  mwebImageClassName: string;
  dwebImageClassName: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToforward = () => {
    const isLastSlide = currentIndex === carouselData?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function goToCurrent(slideIndex: number) {
    setCurrentIndex(slideIndex);
  }

  useEffect(() => {
    const carouselGoOn = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex > carouselData?.length - 2) {
        setCurrentIndex(0);
      }
    }, setIntervalTime);
    return () => clearInterval(carouselGoOn);
  }, [carouselData?.length, currentIndex, setIntervalTime]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [carouselData]);

  const bannerEventTrigger = (banner_id: string, banner_link: string) => {
    eventTracker.landingPageBannerClick(banner_id, banner_link);
  };
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedCaraouselData = carouselData?.sort(compareByDisplayOrder);
  const { userInteracted } = useGlobal();
  return (
    <>
      <div
        className={`${containerClass} overflow-hidden w-[100vw] relative group`}
      >
        <div
          className={`transition-transform duration-1000 flex ease-in-out`}
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / carouselData?.length
            }%)`,
            width: `${carouselData?.length * 100}%`,
          }}
        >
          {sortedCaraouselData?.map((slide, index) => (
            <a
              key={index}
              href={slide?.redirectionUrl}
              rel="noopener noreferrer"
              className={`${imageUpperDiv} flex-1 w-[100vw] `}
            >
              <img
                onClick={() =>
                  bannerEventTrigger(slide?.dwebImage, slide?.redirectionUrl)
                }
                src={slide?.dwebImage}
                alt={slide?.altTag || ''}
                className={`hidden lg:block ${dwebImageClassName}`}
              />
              <img
                onClick={() =>
                  bannerEventTrigger(slide?.dwebImage, slide?.redirectionUrl)
                }
                src={slide?.mwebImage}
                alt={slide?.altTag || ''}
                className={`lg:hidden ${mwebImageClassName}`}
              />
            </a>
          ))}
        </div>
        {showSecondaryArrow && (
          <>
            <div
              onClick={goToPrevious}
              className={
                'h-full absolute duration-500 opacity-0 transition-opacity group-hover:opacity-100 left-0 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-black500 top-0'
              }
            >
              <Image
                bgImagetitle={`${LeftSecondaryArrow.src}`}
                className={
                  'w-[18px] h-[32px] cursor-pointer bg-transparent lg:block hidden bg-center bg-no-repeat bg-contain'
                }
              />
            </div>
            <div
              onClick={goToforward}
              className={
                'h-full absolute opacity-0 transition-opacity group-hover:opacity-100 right-0 flex flex-col items-center justify-center p-8 bg-gradient-to-r to-black500 from-transparent top-0'
              }
            >
              <Image
                bgImagetitle={`${RightSecondaryArrow.src}`}
                className={
                  'w-[18px] h-[32px] cursor-pointer bg-transparent lg:block hidden bg-center bg-no-repeat bg-contain'
                }
              />
            </div>
          </>
        )}
        {showPrimaryArrow && (
          <div className={''}>
            <div
              style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
              onClick={goToPrevious}
              className={` xl:flex items-center justify-center h-10 w-10 hidden  absolute top-[50%] left-0 translate-y-[-50%] border  rounded-full bg-white py-1 shadow-md px-4`}
            >
              <Image
                bgImagetitle={`${PrimaryLeftIcon.src}`}
                className={
                  ' w-[24px] h-[24px] z-10 bg-center bg-contain bg-no-repeat'
                }
              />
            </div>
            <div
              style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
              onClick={goToforward}
              className={` xl:flex items-center justify-center h-10 w-10 hidden absolute top-[50%] right-0 translate-y-[-50%] border rounded-full bg-white py-1 shadow-md px-4`}
            >
              <Image
                bgImagetitle={`${PrimaryRightIcon.src}`}
                className={
                  ' w-[24px] h-[24px] z-10 bg-center bg-contain bg-no-repeat'
                }
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex md:gap-5 gap-2 justify-center z-20">
        {carouselData?.map((_slides, slideIndex) => (
          <div onClick={() => goToCurrent(slideIndex)} key={slideIndex}>
            <div
              className={` ${
                currentIndex === slideIndex
                  ? 'border-black'
                  : 'border-[#D9DCE1] '
              } border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Caraousel;
