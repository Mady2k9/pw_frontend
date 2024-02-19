import React, { useEffect, useRef, useState } from 'react';
import ExamCard from '../ExamCard/ExamCard';
import Style from '../../Components/Components/MostLovedFeatureSection/Mostloved.module.css';
import Image from '../Atoms/Image/Image';

const color = {
  0: ['#81B6E4', '#BCD8F1', '#BCD8F1', '#F1F5FE'],
  1: ['#EDB84F', '#F7E0B4', '#F7E0B4', '#FFF6E5'],
  2: ['#64A478', '#ADCFB7', '#ADCFB7', '#DFF1E4'],
};
const cardData = [1, 2, 3, 4, 5, 6];

const TestPass: React.FC<object> = () => {
  const [doSwipe, setDoSwipe] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        setDoSwipe(container.scrollLeft);
      }
    };
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSwipeScroll = () => {
    const container = containerRef.current;
    if (container) container.scrollLeft += container.clientWidth;
  };
  const handleSwipeLeftScroll = () => {
    const container = containerRef.current;
    if (container) container.scrollLeft -= container.clientWidth;
  };
  return (
    <div className="bg-gradient-to-b from-[#F1F5FE] to-[white] py-10 relative">
      <div className="flex justify-center items-center flex-col ">
        <div className="inline-flex items-center justify-center w-full">
          <Image
            bgImagetitle={'/line.webp'}
            className={'h-[1px] w-[489px] bg-center bg-contain bg-no-repeat'}
          />
          <div className=" border text-[12px] leading-[18px] font-[600] text-[#3d3d3d] px-[15px] rounded-2xl bg-[#DDEBF8] mx-[10px] whitespace-nowrap">
            Newly Launched
          </div>
          <Image
            bgImagetitle={'/line.webp'}
            className={'h-[1px] w-[489px] bg-center bg-contain bg-no-repeat'}
          />
        </div>
        <div className="md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] font-[700] text-[#1B2124] mt-[20px]">
          Explore Test Pass
        </div>
        <div className="md:text-[18px] md:leading-[28px] text-[14px] leading-[20px] font-[500] text-[#1B2124] pt-[9px]">
          Discover the key features of our PW Test Series
        </div>
      </div>
      <Image
        bgImagetitle={'TestSeriesStar.webp'}
        className={
          'md:h-[65px] md:w-[50px] h-[36px] w-[28px] bg-center bg-contain bg-no-repeat absolute  md:top-[88px] md:left-[93px] top-[70px] left-[27px]'
        }
      />
      <Image
        bgImagetitle={'TestSeriesStar.webp'}
        className={
          'md:h-[65px] md:w-[50px] h-[36px] w-[28px] bg-center bg-contain bg-no-repeat absolute  md:top-[101px] md:right-[70px] top-[70px] right-[22px]'
        }
      />
      <Image
        bgImagetitle={'TestSeriesStar.webp'}
        className={
          'md:h-[41px] md:w-[31px] bg-center bg-contain bg-no-repeat absolute  bottom-[96px] left-[72px]'
        }
      />
      <Image
        bgImagetitle={'TestSeriesStar.webp'}
        className={
          'h-[41px] w-[32px] bg-center bg-contain bg-no-repeat absolute  bottom-[199px] right-[90px]'
        }
      />
      <div
        className={`flex max-w-6xl m-auto flex-col my-8 gap-4 p-4 xl:p-0 relative`}
      >
        <div
          ref={containerRef}
          className="flex flex-row items-center  justify-between overflow-x-scroll gap-5"
        >
          {cardData.map((_data, index) => {
            const indexed = (index % 3) as keyof typeof color;
            return <ExamCard key={index} color={color[indexed]} />;
          })}
        </div>
        {containerRef.current ? (
          doSwipe + (containerRef.current?.clientWidth || 0) <
            (containerRef.current?.scrollWidth || 0) && (
            <div
              onClick={handleSwipeScroll}
              className={` ${Style.swipeButton} absolute top-[50%] right-0 border rounded-full bg-white py-1 shadow-md px-4`}
            >
              <Image
                bgImagetitle={'swipe-right-arrow.webp'}
                className={
                  ' xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
                }
              />
            </div>
          )
        ) : (
          <div
            onClick={handleSwipeScroll}
            className={` ${Style.swipeButton} absolute top-[50%] right-0 border rounded-full bg-white py-1 shadow-md px-4`}
          >
            <Image
              bgImagetitle={'swipe-right-arrow.webp'}
              className={
                'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        )}
        {doSwipe != 0 && (
          <div
            onClick={handleSwipeLeftScroll}
            className={` ${Style.leftswipeButton}  absolute top-[50%] left-0 border rounded-full bg-white py-1 shadow-md px-4`}
          >
            <Image
              bgImagetitle={'swipe-left-arrow.webp'}
              className={
                'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TestPass;
