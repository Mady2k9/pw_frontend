import React, { useEffect, useRef, useState, memo } from 'react';
import MostLovedCard from '../../Molecules/MostLovedFeatureCard/MostLovedFeatureCard';
import Style from './Mostloved.module.css';
import Image from '../../Atoms/Image/Image';
import { MostLovedProps } from './MostLovedType';

const MostLovedFeature = ({
  mostLovedData,
}: {
  mostLovedData: MostLovedProps;
}) => {
  const [swipedData, setSwipedData] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current;
    const handleScroll = () => {
      if (container) {
        setSwipedData(container?.scrollLeft);
      }
    };
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSwipeScroll = () => {
    const container = containerRef?.current;
    if (container) container.scrollLeft += container?.clientWidth;
  };
  const handleSwipeLeftScroll = () => {
    const container = containerRef?.current;
    if (container) container.scrollLeft -= container?.clientWidth;
  };

  return (
    <div className="py-10 max-w-6xl relative items-center sm:w-full m-auto ">
      <div className="px-4">
        <div className="xl:text-[32px] text-[#1B2124] xl:leading-[48px] md:text-2xl text-xl font-bold text-center mb-2">
          {mostLovedData?.sectionTitle}
        </div>

        <div className="xl:text-lg md:text-base text-[#3D3D3D] text-sm text-center xl:mb-[32px] md:mb-6 mb-3 ">
          {mostLovedData?.sectionSubTitle}
        </div>
      </div>
      <div className="mx-4 xl:m-auto max-w-6xl">
        <div
          id="content"
          ref={containerRef}
          className={`${Style.slideBarRemove} xl:max-w-[1162px] m-auto flex gap-5 overflow-x-scroll`}
        >
          {mostLovedData?.sectionProps?.map((data, index: number) => (
            <MostLovedCard cardData={data}  key={index}/>
          ))}
        </div>
      </div>
      {mostLovedData?.sectionProps?.length > 4 && (
        <div>
          {containerRef?.current ? (
            swipedData + (containerRef?.current?.clientWidth || 0) <
              (containerRef?.current?.scrollWidth || 0) && (
              <>
                <div
                  className={` absolute right-[-80px] h-[470px] w-[140px]  bg-white opacity-[99%] blur top-[150px] ${Style.scrollHidden} `}
                ></div>
                <div
                  onClick={handleSwipeScroll}
                  className={` ${Style.swipeButton} absolute top-[50%] right-0 border rounded-full bg-white py-1 shadow-md px-4`}
                >
                  <Image
                    bgImagetitle={'/swipe-right-arrow.webp'}
                    className={
                      ' xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
                    }
                  />
                </div>
              </>
            )
          ) : (
            <>
              <div
                className={`absolute right-[-80px]  h-[470px] w-[140px]  bg-white opacity-[99%] blur top-[150px]  ${Style.scrollHidden}`}
              ></div>
              <div
                onClick={handleSwipeScroll}
                className={` ${Style.swipeButton} absolute top-[50%] right-0 border rounded-full bg-white py-1 shadow-md px-4`}
              >
                <Image
                  bgImagetitle={'/swipe-right-arrow.webp'}
                  className={
                    'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
                  }
                />
              </div>
            </>
          )}

          {swipedData != 0 && (
            <>
              <div
                className={`absolute left-[-80px]  h-[470px] w-[140px]  bg-white opacity-[99%] blur top-[150px]  ${Style.leftscrollHidden}`}
              ></div>
              <div
                onClick={handleSwipeLeftScroll}
                className={` ${Style.leftswipeButton}  absolute top-[50%] left-0 border rounded-full bg-white py-1 shadow-md px-4`}
              >
                <Image
                  bgImagetitle={'/swipe-left-arrow.webp'}
                  className={
                    'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
                  }
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(MostLovedFeature);
