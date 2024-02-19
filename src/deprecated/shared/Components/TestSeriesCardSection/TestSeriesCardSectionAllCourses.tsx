import { useEffect, useRef, useState } from 'react';
import Text from '../Atoms/Text/Text';
import Style from '../Components/MostLovedFeatureSection/Mostloved.module.css';
import { ResultType, BatchCardContainer } from './TestSeriesCardType';
import Image from '../Atoms/Image/Image';
import LeftSwipeArrow from '../../../assets/Images/swipe-left-arrow.webp';
import RightSwipeArrow from '../../../assets/Images/swipe-right-arrow.webp';
import TestSeriesCard from '../TestSeriesCard/TestSeriesCard';
import { BatchCardData } from '../BatchCardSection/BatchCardType';

const TestSeriesCardSectionAllCourses: React.FC<BatchCardContainer> = ({
  mainHeading,
  viewAllUrl,
  BatchData,
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
    <div
      className={` flex max-w-6xl m-auto flex-col xl:my-8 gap-4 p-4 xl:p-0 relative`}
    >
      <div className="flex xl:flex-row flex-col xl:items-center justify-between w-full">
        <Text
          style={
            'xl:text-[32px] text-[20px] leading-[48px] xl:mx-[6px] font-bold'
          }
          title={mainHeading}
        />
      </div>
      {/*<div*/}
      {/*  ref={containerRef}*/}
      {/*  className="slideBarRemove flex gap-2.5 md:gap-5 px-4 xl:px-[2px] pt-[10px] overflow-x-scroll scroll-smooth"*/}
      {/*>*/}
      {/*  {BatchData?.map((result: BatchCardData) => (*/}
      {/*    <TestSeriesCard*/}
      {/*      key={result?.title}*/}
      {/*      result={result}*/}
      {/*      showBatchCardDetails*/}
      {/*      showOnlineOfflineTag*/}
      {/*      showExploreButton={true}*/}
      {/*      showNewChip={true}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
      <a className="" href={viewAllUrl}>
        <div
          className={
            'w-full bg-[#F1EFFF] text-[#5A4BDA] hover:bg-[#D2CCFF] text-base font-semibold flex items-center justify-center px-6 py-[12px] rounded-[6px] cursor-pointer '
          }
        >
          View all Batches
          <span className="font-[600] mx-[6px] mt-[-2px] text-[24px]">
            &rsaquo;
          </span>
        </div>
      </a>
      <div>
        {containerRef?.current ? (
          swipedData + (containerRef?.current?.clientWidth || 0) <
            (containerRef?.current?.scrollWidth || 0) && (
            <div
              onClick={handleSwipeScroll}
              className={` ${Style.swipeButton} absolute top-[50%] right-[-20px] translate-y-[-50%] border rounded-full bg-white shadow-md px-4`}
            >
              <Image
                bgImagetitle={RightSwipeArrow.src}
                className={
                  ' xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
                }
              />
            </div>
          )
        ) : (
          <div
            onClick={handleSwipeScroll}
            className={` ${Style.swipeButton} absolute top-[50%] right-[-20px] translate-y-[-50%] border rounded-full bg-white  shadow-md px-4`}
          >
            <Image
              bgImagetitle={RightSwipeArrow.src}
              className={
                'xl:w-[10px] xl:h-[16px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        )}
        {swipedData != 0 && (
          <div
            onClick={handleSwipeLeftScroll}
            className={` ${Style.leftswipeButton} absolute top-[50%] left-[-20px] translate-y-[-50%] border rounded-full bg-white  shadow-md px-4`}
          >
            <Image
              bgImagetitle={LeftSwipeArrow.src}
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

export default TestSeriesCardSectionAllCourses;
