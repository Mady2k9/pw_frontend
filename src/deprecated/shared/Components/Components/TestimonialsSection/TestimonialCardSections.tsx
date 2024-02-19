import React, { useEffect, useRef, useState, memo } from 'react';
import Style from '../MostLovedFeatureSection/Mostloved.module.css';
import TestimonialCard from '../../Molecules/TestimonialCard/TestimonialCard';
import Image from '../../Atoms/Image/Image';
import { StudentformProps } from './TestimonialType.d';
import SwipeRightIcon from '../../../../assets/Images/swipe-right-arrow.webp';
import SwipeLeftIcon from '../../../../assets/Images/swipe-left-arrow.webp';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';

const TestimonialCardSections = ({
  testinomialData,
}: {
  testinomialData: StudentformProps;
}) => {
  const [swipedData, setSwipedData] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        setSwipedData(container.scrollLeft);
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
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedTestimonialData = testinomialData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  return (
    <div className="items-center sm:w-full ">
      <div className="relative max-w-6xl m-auto">
        <div
          id="content"
          ref={containerRef}
          className={`${Style.slideBarRemove} overflow-hidden px-4 scroll-smooth xl:px-0 xl:w-full max-w-6xl m-auto flex gap-5 overflow-x-scroll`}
        >
          {sortedTestimonialData?.slice(1)?.map((data, i) => (
            <>
              <div key={data?.testimonial} className="md:block hidden">
                <TransitionWrapper delay={i < 3 ? i % 3 : 0}>
                  <TestimonialCard
                    studentName={data?.studentName}
                    exam={data?.exam}
                    rank={data?.rank}
                    testimonial={data?.testimonial}
                    icon={data?.icon}
                  />
                </TransitionWrapper>
              </div>
              <div key={data?.testimonial} className="md:hidden block">
                <TransitionWrapper>
                  <TestimonialCard
                    studentName={data?.studentName}
                    exam={data?.exam}
                    rank={data?.rank}
                    testimonial={data?.testimonial}
                    icon={data?.icon}
                  />
                </TransitionWrapper>
              </div>
            </>
          ))}
        </div>
        {containerRef.current ? (
          swipedData + (containerRef.current?.clientWidth || 0) <
            (containerRef.current?.scrollWidth || 0) && (
            <div
              onClick={handleSwipeScroll}
              className={` ${Style.swipeButton} absolute top-[50%] right-[-20px] border rounded-full bg-white py-1 shadow-md px-4`}
            >
              <Image
                bgImagetitle={`${SwipeRightIcon.src}`}
                className={
                  ' xl:w-[10px] xl:h-[16px] z-10 bg-center bg-cover bg-no-repeat'
                }
              />
            </div>
          )
        ) : (
          <div
            onClick={handleSwipeScroll}
            className={` ${Style.swipeButton} absolute top-[50%] right-[-20px] border rounded-full bg-white py-1 shadow-md px-4`}
          >
            <Image
              bgImagetitle={`${SwipeRightIcon.src}`}
              className={
                'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        )}
        {swipedData != 0 && (
          <div
            onClick={handleSwipeLeftScroll}
            className={` ${Style.leftswipeButton}  absolute top-[50%] left-[-20px] border rounded-full bg-white py-1 shadow-md px-4`}
          >
            <Image
              bgImagetitle={`${SwipeLeftIcon.src}`}
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

export default memo(TestimonialCardSections);
