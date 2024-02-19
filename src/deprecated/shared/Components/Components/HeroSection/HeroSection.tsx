import React, { memo, useEffect, useState } from 'react';
import { HeroSectionProps } from './HeroSectionType';
import Style from './HeroSection.module.css';

import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import Button from '../../Atoms/Button/Button';

const HeroSection = ({
  HeroSectionData,
}: {
  HeroSectionData: HeroSectionProps;
}) => {
  const [lineCounter, setLineCounter] = useState(1);
  useEffect(() => {
    if (window.innerWidth < 720) {
      setTimeout(() => {
        setLineCounter(2);
      }, 3000);
      setTimeout(() => {
        setLineCounter(3);
      }, 3000);
    } else {
      setTimeout(() => {
        setLineCounter(2);
      }, 10);
      setTimeout(() => {
        setLineCounter(3);
      }, 10);
    }
  }, []);
  function createHtml() {
    return { __html: HeroSectionData?.sectionTitle };
  }
  //console.log('HeroSectionData', HeroSectionData);
  return (
    <>
      <div
        className="mx-auto"
        style={{
          backgroundColor: `${HeroSectionData?.sectionProps?.gradientCss}`,
        }}
      >
        <div className="max-w-6xl flex items-center  sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto">
          <div className="lg:w-1/2 w-full">
            <div className="text-center xl:text-left w-full xl:w-[68%]">
              <TransitionWrapper>
                <div dangerouslySetInnerHTML={createHtml()} />
              </TransitionWrapper>
              <TransitionWrapper>
                <div className="text-sm md:text-[16px] px-4 md:px-0 text-center xl:text-start text-[#3D3D3D] mb-3.5 xl:mb-10">
                  {HeroSectionData?.sectionSubTitle}
                </div>
              </TransitionWrapper>
              <TransitionWrapper>
                <Button
                  className={` px-[28px] py-[14px] w-[240px] sm:text-lg rounded-md transition-all duration-200 items-center font-semibold leading-[27px] text-[17px]`}
                  title={HeroSectionData?.cta.text}
                  backGroundColor={HeroSectionData?.cta.backGroundColor}
                  textColor={HeroSectionData?.cta.textColor}
                  hoverColor={HeroSectionData?.cta.hoverColor}
                  ctaRedirectionUrl={HeroSectionData?.cta.ctaRedirectionUrl}
                />
              </TransitionWrapper>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="sm:py-4 py-6">
              <TransitionWrapper>
                <div className="relative px-[20px] lg:px-0 sm:text-[14px] sm:leading-[20px] text-[12px] leading-[18px] font-[500]">
                  <div className=" sm:block hidden">
                    <div
                      className="h-[360px]"
                      style={{
                        background: `url(${HeroSectionData?.sectionProps.dWeb[1].icon}), url(${HeroSectionData?.sectionProps.dWeb[0].icon})`,
                        backgroundPosition: 'left bottom, right top',
                        backgroundSize: '250px 250px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <div
                      className={`${Style.animsc} bg-white p-2 text-[${HeroSectionData?.sectionProps.dWeb[0].textColor}]  sm:h-[36px] h-[34px] absolute sm:right-[172px] sm:top-[92px] right-[129px] top-[48px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                    >
                      <div className="w-[20px] h-full absolute flex right-[-13px] top-0 z-[-1]">
                        <div className="bg-white sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                      </div>
                      <p className={`${Style.anims}`}>
                        {HeroSectionData?.sectionProps.dWeb[0].text}
                      </p>
                    </div>
                    <div
                      className={`${Style.animac} bg-[#140D52] sm:h-[40px] h-[34px] text-[${HeroSectionData?.sectionProps.dWeb[1].textColor}] absolute sm:left-[168px] sm:top-[190px] left-[130px] top-[252px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                    >
                      <div className="w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]">
                        <div className="bg-[#140D52] sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                      </div>
                      <p
                        className={`${Style.typewriter} p-2 bg-[#140D52] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                      >
                        {HeroSectionData?.sectionProps.dWeb[1].text}
                      </p>
                    </div>
                  </div>
                  <div className="sm:hidden block">
                    <div
                      className="h-[360px]"
                      style={{
                        background: `url(${HeroSectionData?.sectionProps.mWeb[1].icon}), url(${HeroSectionData?.sectionProps.mWeb[0].icon})`,
                        backgroundPosition: 'left bottom, right top',
                        backgroundSize: '150px 150px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <div
                      className={`${Style.animsc} bg-white p-2 text-[${HeroSectionData?.sectionProps.mWeb[0].textColor}]  sm:h-[36px] h-[34px] absolute sm:right-[172px] sm:top-[92px] right-[129px] top-[48px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                    >
                      <div className="w-[20px] h-full absolute flex right-[-13px] top-0 z-[-1]">
                        <div className="bg-white sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                      </div>
                      <p className={`${Style.anims}`}>
                        {HeroSectionData?.sectionProps.mWeb[0].text}
                      </p>
                    </div>
                    <div
                      className={`${Style.animac} bg-[#140D52] text[${HeroSectionData?.sectionProps.mWeb[1].textColor}] absolute sm:left-[168px] sm:top-[190px] left-[130px] top-[252px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                    >
                      <div className="w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]">
                        <div className="bg-[#140D52] sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                      </div>
                      <p
                        className={`${Style.typewriter} p-2 bg-[#140D52] rounded-md shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                      >
                        {HeroSectionData?.sectionProps.mWeb[1].text}
                      </p>
                    </div>
                  </div>
                </div>
              </TransitionWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
