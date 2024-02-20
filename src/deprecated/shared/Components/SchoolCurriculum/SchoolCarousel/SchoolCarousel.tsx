import { ReactElement, useEffect, useRef, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import SwipeRightIcon from '../../../../assets/Images/VectorRight.webp';
const SchoolCarousel = ({
  array,
  className,
}: {
  array: ReactElement[];
  className?: string;
}) => {
  const [swipedData, setSwipedData] = useState(0);
  const [isHovered, setHovered] = useState(false);
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
        {array.map((data) => data)}
      </div>
      {containerRef.current ? (
        swipedData + (containerRef.current?.clientWidth || 0) <
          (containerRef.current?.scrollWidth || 0) && (
          <div
            className="absolute top-0 right-[2px] h-full w-[160px] md:flex flex-col hidden justify-center items-end"
            // style={{
            //   backgroundImage:
            //     'linear-gradient(267deg, #FFF 24.98%, rgba(255, 255, 255, 0.00) 97.47%',
            // }}
          >
            <div>
              <div className=" py-3  sm:flex flex sm:flex-row  items-center justify-center mb-4">
                <div
                  className={
                    'w-[36px] h-[32px]  rounded-lg bg-[#FFFFFF] border-[#1B2124] border flex items-center justify-center cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated'
                  }
                  onClick={handleSwipeScroll}
                  style={{
                    boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #1B2124'}`,
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <Image
                    bgImagetitle={`${SwipeRightIcon.src}`}
                    className={
                      'w-[10px] h-[10px] bg-center bg-no-repeat bg-cover rounded-lg '
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div
          className="absolute top-0 right-[2px] h-full w-[160px] md:flex flex-col hidden justify-center items-end "
          // style={{
          //   backgroundImage:
          //     'linear-gradient(267deg, #FFF 24.98%, rgba(255, 255, 255, 0.00) 97.47%',
          // }}
        >
          <div className="  py-3  sm:flex flex sm:flex-row  items-center justify-center mb-4">
            <div
              className={
                'w-[36px] h-[32px]  rounded-lg bg-[#FFFFFF] border-[#1B2124] border flex items-center justify-center cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated'
              }
              onClick={handleSwipeScroll}
              style={{
                boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #1B2124'}`,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Image
                bgImagetitle={`${SwipeRightIcon.src}`}
                className={
                  'w-[10px] h-[10px] bg-center bg-no-repeat bg-cover rounded-lg '
                }
              />
            </div>
          </div>
        </div>
      )}
      {swipedData != 0 && (
        <div
          className="absolute top-0 left-[-21px] h-full w-[160px] md:flex flex-col  justify-center items-start hidden"
          // style={{
          //   backgroundImage:
          //     'linear-gradient(267deg, rgba(255, 255, 255, 0.00)  24.98%, #fff 97.47%',
          // }}
        >
          <div className=" px-4 py-3 sm:px-6 sm:flex flex sm:flex-row  items-center justify-center mb-4 absolute z-10">
            <div
              className={
                'w-[36px] h-[32px]  rounded-lg bg-[#FFFFFF] border-[#1B2124] border flex items-center justify-center cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated'
              }
              onClick={handleSwipeLeftScroll}
              style={{
                boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #1B2124'}`,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Image
                bgImagetitle={`${SwipeRightIcon.src}`}
                className={
                  'w-[10px] h-[10px] bg-center bg-no-repeat bg-cover rounded-lg '
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolCarousel;
