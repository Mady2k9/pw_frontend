import React, { memo, useEffect, useState } from 'react';
import { HeroSectionProps } from './HeroSectionType';
import LoginButton from '../../Atoms/LoginButton/LoginButton';
import Style from './HeroSection.module.css';
import Image from '../../Atoms/Image/Image';
import studentMweb from '../../../../assets/Images/hero-student-m.webp';
import studentWeb from '../../../../assets/Images/hero-student-w.webp';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import HeroSectionBgImage from '../../../../assets/Images/bgSecondComp.webp';
import NextImage from '@/components/ui/next-image';

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
  return (
    <>
      <div
        className="mx-auto relative"
        style={{
          // backgroundImage: `url(${HeroSectionBgImage.src})`,
        }}
      >
        <NextImage alt={'Bg-image-hero-section'} src={HeroSectionBgImage.src} className={''} fill={true}/>
        {/* <div className="2xl:max-w-6xl mx-auto bg-purple-200"> */}
        <div
          className="max-w-6xl flex items-center  sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto">
          <div className="text-center xl:text-left xl:w-[36%] w-full ">
            {/*<TransitionWrapper>*/}
              <h1
                className="font-bold text-2xl px-[50px] md:px-0 text-[#1B2124]  xl:text-[40px] md:text-[32px] md:leading-[48px] xl:leading-[50px] mb-[6px]">
                {/* {HeroSectionData?.sectionTitle} */}
                Bharat’s{' '}
                <span className="text-[#5A4BDA]">
                    Biggest & Most Trusted
                  </span>{' '}
                Educational Platform
              </h1>
            {/*</TransitionWrapper>*/}
            {/*<TransitionWrapper>*/}

              <div
                className="text-sm md:text-[16px] px-4 md:px-0 text-center xl:text-start text-[#3D3D3D] mb-3.5 xl:mb-10">
                {HeroSectionData?.sectionSubTitle}
              </div>
            {/*</TransitionWrapper>*/}
            {/*<TransitionWrapper>*/}
              <LoginButton
                text={'Get Started'}
                className={'px-[28px] py-[14px] w-[240px]'}
              />
            {/*</TransitionWrapper>*/}

          </div>

          <div className="sm:py-4 py-6">
            {/*<TransitionWrapper>*/}
              <div
                className="relative  justify-items-center sm:text-[14px] sm:leading-[20px] text-[12px] leading-[18px] font-[500]">
                {/*<TransitionWrapper>*/}
                  <NextImage
                    src={studentMweb.src}
                    alt={'student image'}
                    width={320}
                    height={225}
                    className={
                      'sm:hidden block bg-center bg-no-repeat bg-contain'
                    }
                  />
                  <NextImage
                    src={studentWeb.src}
                    alt={'student image'}
                    width={600}
                    height={318}
                    className={
                      'sm:block hidden bg-center bg-no-repeat bg-contain'
                    }
                  />
                {/*</TransitionWrapper>*/}

                <div
                  className={`${Style.animsc} bg-white p-2  sm:h-[36px] h-[34px] absolute sm:right-[180px] sm:top-[85px] right-[85px] top-[48px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                >
                  <div className="w-[20px] h-full absolute flex right-[-13px] top-0 z-[-1]">
                    <div
                      className="bg-white sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                  </div>
                  <p className={`${Style.anims}`}>Alakh Sir, What is PW?</p>
                </div>

                {
                  lineCounter > 0 && <div
                    className={`${Style.animac} animate-[#ff00ff] bg-[#140D52] p-2 sm:h-[36px] h-[34px] text-white absolute sm:left-[170px] sm:top-[158px] left-[85px] top-[115px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]`}
                  >
                    <div className="w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]">
                      <div
                        className="bg-[#140D52] sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45"></div>
                    </div>
                    <p className={`${Style.anima}`}>
                      PW is India’s leading Edtech
                    </p>
                  </div>
                }
                {
                  lineCounter > 1 && <div
                    className={`${Style.animbc} animate-[#ff00ff] bg-[#140D52] px-2 pt-1 pb-2 sm:h-[30px] h-[28px] text-white absolute sm:left-[170px] sm:top-[185px] left-[85px] top-[141px] rounded-md z-[1] shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:w-[222px] w-[195px]`}
                  >
                    <div
                      className={`w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]`}
                    ></div>
                    <p className={`${Style.animb}`}>
                      Company that is democratizing
                    </p>
                  </div>
                }
                {
                  lineCounter > 2 && <div
                    className={`${Style.animcc} animate-[#ff00ff] bg-[#140D52] px-2 pt-1 pb-2 sm:h-[30px] h-[28px] text-white absolute sm:left-[170px] sm:top-[208px] left-[85px] top-[161px] rounded-md z-[1] shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:w-[222px] w-[195px]`}
                  >
                    <div className="w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]"></div>
                    <p className={`${Style.animc}`}>education at Scale.</p>
                  </div>
                }
              </div>
            {/*</TransitionWrapper>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
