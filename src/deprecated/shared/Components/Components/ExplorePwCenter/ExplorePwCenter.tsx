import React, { memo, useMemo } from 'react';
import ExploreCityCards from '../../Molecules/ExplorePwCityCards/ExplorePwCityCards';
import { exploreCityCardsType } from '../../Molecules/ExplorePwCityCards/ExplorePwCityCardsType';
import { ExplorePwCenterType } from './ExplorePwCenterType';
import eventTracker from '../../EventTracker/eventTracker';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ExplorePwCenter = ({
                           explorePWCenterData,
                         }: {
  explorePWCenterData: ExplorePwCenterType;
}) => {
  const centreEventTrigger = (page_source: string) => {
    eventTracker.centrePageVisit(page_source);
  };
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedCenterData = explorePWCenterData?.sectionProps?.centers?.sort(
    compareByDisplayOrder,
  );

  const handleClick = () => {
    centreEventTrigger('home_page');
  };

  const ButtonStyle = useMemo(() => {
    const x: any = {};
    if (explorePWCenterData?.cta?.backGroundColor) {
      x.backgroundColor = explorePWCenterData?.cta.backGroundColor;
    }
    if (explorePWCenterData?.cta?.textColor) {
      x.color = `${explorePWCenterData?.cta.textColor}`;
    }
    return x;
  }, [explorePWCenterData?.cta]);
  return (
    <>
      <TransitionWrapper delay={1}>
        <div
          className="my-10"
          style={{
            backgroundColor: `${explorePWCenterData?.sectionProps?.videoOverlayColor}`,
          }}
        >
          <div
            className={`sm:h-[650px] h-[500px] m-auto sm:flex bg-center bg-no-repeat bg-cover bg-opacity-70 overflow-hidden relative`}
            style={{
              backgroundColor: `${explorePWCenterData?.sectionProps?.videoOverlayColor}`,
            }}
          >
            <video
              src={explorePWCenterData?.sectionProps?.videoUrl}
              playsInline
              style={{ objectFit: 'cover' }}
              muted
              autoPlay
              loop
              controlsList="nofullscreen nodownload noremoteplayback"
              className="opacity-40 h-full w-full m-auto sm:flex items-center absolute top-0 z-0"
            />
            <div className="w-full mx-auto">
              <TransitionWrapper>
                <div
                  className="mx-auto text-[#fff] text-center z-[1] px-4 sm:h-[260px] h-[180px] flex flex-col justify-center">
                  <div
                    className="sm:text-[32px] sm:leading-[48px] text-[20px] leading-[30px] font-[700] mb-[14px] z-[1]">
                    {explorePWCenterData?.sectionTitle}
                  </div>
                  <div className="sm:text-[18px] sm:leading-[28px] text-[14px] leading-[20px] font-[500] z-[1]">
                    {explorePWCenterData?.sectionSubTitle}
                  </div>
                </div>
              </TransitionWrapper>
            </div>
          </div>
          <TransitionWrapper>
            <div
              className="flex items-center  justify-center xl:max-w-6xl lg:max-w-6xl sm:mt-[-425px] mt-[-345px] md:p-6 p-3.5 xl:p-0 mx-auto">
              <div
                className={` p-2.5 md:p-6 xl:p-8 rounded-lg md:rounded-2xl bg-white z-10 mb-[-20px]`}
                style={{ boxShadow: '0px 0px 12px 0px #0000001F' }}
              >
                <div className="my-4 gap-1.5 xl:my-0 xl:gap-1 flex flex-col">
                  <div className="text-center text-lg xl:text-2xl font-bold text-[#1B2124]">
                    {explorePWCenterData?.sectionProps?.title}
                  </div>
                  <div className=" flex justify-center items-center gap-1.5">
                    <hr className="w-[58px] xl:w-[126px] h-0 bg-[#B7B7B7]"></hr>
                    <div className="flex  gap-[2px] text-center">
                      <div className="text-sm xl:text-xl px-2 py-0 sm:py-2 font-semibold text-[#757575]">
                        Available in{' '}
                        <span className="text-[#5A4BDA]">
                          {explorePWCenterData?.sectionProps?.subtitle}{' '}
                        </span>
                        cities
                      </div>
                    </div>
                    <hr className="w-[58px] xl:w-[126px] h-0 bg-[#B7B7B7]"></hr>
                  </div>
                </div>
                <div className="xl:my-7 my-4 sm:gap-4 gap-y-4 flex flex-wrap justify-between">
                  {sortedCenterData?.map(
                    (value: exploreCityCardsType, key: number) => (
                      <ExploreCityCards key={key} exploreCityCardData={value} />
                    ),
                  )}
                </div>
                {
                  explorePWCenterData?.cta && <div className=" text-center">
                    <Link href={explorePWCenterData?.cta.ctaRedirectionUrl} >
                      <Button
                        className={`rounded-md transition-all duration-200 font-semibold text- w-[100%] lg:w-[240px] py-3.5`}
                        title={explorePWCenterData?.cta.text}
                        style={ButtonStyle}
                        onClick={handleClick}
                      >
                        {explorePWCenterData?.cta.text}
                      </Button>
                    </Link>
                  </div>
                }
              </div>
            </div>
          </TransitionWrapper>
        </div>
      </TransitionWrapper>
    </>
  );
};

export default memo(ExplorePwCenter);
