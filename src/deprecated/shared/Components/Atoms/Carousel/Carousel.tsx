import { ReactElement, useEffect, useRef, useState } from 'react';
import Image from '../Image/Image';
import SwipeRightIcon from '../../../../assets/Images/swipe-right-arrow.webp';
import SwipeLeftIcon from '../../../../assets/Images/swipe-left-arrow.webp';

const Carousel = ({
  array,
  className,
  hideArrow,
}: {
  array: ReactElement[];
  className?: string;
  hideArrow?: boolean;
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
  return (
    <div className="relative">
      <div
        id="content"
        ref={containerRef}
        className={`${className} overflow-hidden scroll-smooth flex overflow-x-scroll slideBarRemove`}
      >
        {array.map((data, i) => data)}
      </div>
      {hideArrow ? (
        ''
      ) : containerRef.current ? (
        swipedData + (containerRef.current?.clientWidth || 0) <
          (containerRef.current?.scrollWidth || 0) && (
          <div
            className="absolute top-0 right-0 h-full w-[160px] md:flex flex-col hidden justify-center items-end"
            style={{
              backgroundImage:
                'linear-gradient(267deg, #FFF 24.98%, rgba(255, 255, 255, 0.00) 97.47%',
            }}
          >
            <div
              onClick={handleSwipeScroll}
              className={` rounded-full bg-white shadow-md flex items-center justify-center h-[40px] w-[40px] `}
            >
              <Image
                bgImagetitle={`${SwipeRightIcon.src}`}
                className={
                  'w-[14px] h-[14px] z-10 bg-center bg-contain bg-no-repeat'
                }
              />
            </div>
          </div>
        )
      ) : (
        <div
          className="absolute top-0 right-0 h-full w-[160px] md:flex flex-col hidden justify-center items-end "
          style={{
            backgroundImage:
              'linear-gradient(267deg, #FFF 24.98%, rgba(255, 255, 255, 0.00) 97.47%',
          }}
        >
          <div
            onClick={handleSwipeScroll}
            className={` rounded-full bg-white shadow-md flex items-center justify-center h-[40px] w-[40px] `}
          >
            <Image
              bgImagetitle={`${SwipeRightIcon.src}`}
              className={
                'w-[14px] h-[14px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        </div>
      )}
      {!hideArrow && swipedData != 0 && (
        <div
          className="absolute top-0 left-0 h-full w-[160px] md:flex flex-col  justify-center items-start hidden"
          style={{
            backgroundImage:
              'linear-gradient(267deg, rgba(255, 255, 255, 0.00)  24.98%, #fff 97.47%',
          }}
        >
          <div
            onClick={handleSwipeLeftScroll}
            className={` rounded-full bg-white shadow-md flex items-center justify-center h-[40px] w-[40px] `}
          >
            <Image
              bgImagetitle={`${SwipeLeftIcon.src}`}
              className={
                'w-[14px] h-[14px] z-10 bg-center bg-contain bg-no-repeat'
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
