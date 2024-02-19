import React, { useEffect, useState } from 'react';
import Image from '../../Atoms/Image/Image';
type SchoolHeaderProps = {
  isHomePage: boolean;
};
const SchoolHeader: React.FC<SchoolHeaderProps> = ({ isHomePage }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundColor =
    scrollPosition > 100
      ? 'bg-white border-b-[1px]'
      : isHomePage
      ? 'bg-[#FFF0E7]'
      : 'bg-white';

  return (
    <>
      <div
        className={`sticky top-0 w-full ${backgroundColor} z-40 flex justify-center`}
      >
        <div className="flex w-full items-center max-w-6xl  h-[60px] sm:h-[80px] px-4 xl:px-0 ">
          <a href="https://pw.live" aria-label="pw-logo">
            <Image
              bgImagetitle={'/pwlogo.webp'}
              className={
                'w-[40px] h-[40px] xl:w-[52px] xl:h-[55px] lg:w-[52px] lg:h-[55px] md:w-[42px] md:h-[41px] bg-center bg-no-repeat bg-contain'
              }
            />
          </a>
          <div className="font-bold md:leading-[30px] md:text-[20px] leading-[24px] text-[16px] ml-3">
            School Curriculum
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolHeader;
