import React, { useEffect, useRef } from 'react';

function BannerSections({ setIsInViewPart }: { setIsInViewPart: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        setIsInViewPart(true);
      } else setIsInViewPart(false);
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(/Background.webp)` }}
        ref={targetRef}
        className="2xl:max-w-7xl m-auto bg-center bg-cover bg-no-repeat"
      >
        <div className="w-full border-b-2 border-b-grey-600 sticky sm:top-[79px] top-[59px] py-12 ">
          <div className="w-full  max-w-6xl px-3 xl:px-0 mx-auto">
            <div className="xl:text-[40px] xl:leading-[50px] text-[24px] leading-[32px] font-[700] text-[#FFF] ]">
              Lakshya JEE 2024 Test Series -12th JEE
            </div>
            <div className="xl:text-[14px] xl:leading-[20px] text-[12px] leading-[18px] font-[500] text-[#FFF] pt-[10px] pb-[18px]">
              Unlock your full potential to maximise your IIT JEE success with
              our intensive test series.
            </div>

            <div className="flex flex-col gap-[12px] ">
              <div className="flex gap-3 items-center">
                <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
                  <img src="/video.webp" className="h-[24px] w-[24px]" />
                </div>
                <div className="md:text-[16px] md:leading-[24px] text-[12px] leading-[18px] font-[500] text-[#FFF]">
                  Video solutions and detailed analysis for every paper
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
                  <img src="/StarTest.webp" className="h-[24px] w-[24px]" />
                </div>
                <div className="md:text-[16px] md:leading-[24px] text-[12px] leading-[18px] font-[500] text-[#FFF]">
                  Video solutions and detailed analysis for every paper
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
                  <img src="/consulting.webp" className="h-[24px] w-[24px]" />
                </div>

                <div className="md:text-[16px] md:leading-[24px] text-[12px] leading-[18px] font-[500] text-[#FFF]">
                  Video solutions and detailed analysis for every paper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSections;
