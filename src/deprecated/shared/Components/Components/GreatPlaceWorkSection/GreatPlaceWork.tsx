import React, { memo, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import GpwBgImage from '../../../../assets/Images/gpw.webp';
import GpwBgMobImage from '../../../../assets/Images/gpw-mob.webp';
import GpwImage from '../../../../assets/Images/badge.webp';
import Button from '../../Atoms/Button/Button';
import { relative } from 'path';

const GreatPlaceWorkSection = ({ isInViewport }: { isInViewport: boolean }) => {
  const [showcontent, setShowContent] = useState(false);
  setTimeout(() => {
    if (isInViewport) {
      setShowContent(true);
    }
  }, 1000);
  console.log(showcontent, 'showcontent');
  return (
    <>
      <div
        className="mx-auto bg-no-repeat bg-cover sm:block hidden"
        style={{
          backgroundImage: `url(${GpwBgImage.src})`,
        }}
      >
        <div className="max-w-6xl flex items-center sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto">
          <div
            className={`w-full text-center lg:text-start ${
              showcontent ? 'opacity-90' : 'opacity-0'
            }`}
          >
            <h1 className="font-bold text-2xl px-[50px] md:px-0 text-[#EAAA2E]  xl:text-[40px] md:text-[40px] md:leading-[48px] xl:leading-[50px] mb-[8px]">
              PW is Officially a Great Place to Work !
            </h1>

            <div className="md:w-4/5 text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] px-4 md:px-0 text-center xl:text-start text-[#EAECEF] mb-3.5 xl:mb-6">
              Our team says that our culture is exceptional, and our
              certification serves as proof. Want to check out the Exciting
              world of PW?
            </div>

            <Button
              title={'Know More'}
              className={
                'px-[28px] py-[14px] md:w-[200px] w-[148px] md:h-[56px] h-[48px] rounded-md hover:bg-[#FFFFFF] transition-all duration-200 bg-[#FFFFFF] items-center text-[#3D3D3D] font-semibold md:leading-[28px] md:text-[18px] leading-[20px] text-[14px]'
              }
              ctaRedirectionUrl={'https://www.pw.live/updates'}
            />
          </div>

          <div className="sm:py-4 py-6 order-first md:order-first lg:order-last">
            <div
              className={`${
                isInViewport
                  ? 'animate-in slide-in-from-left delay-500 duration-1000'
                  : ''
              }`}
            >
              <Image
                bgImagetitle={GpwImage.src}
                className={
                  'h-[318px] w-[470px] lg:bg-right md:bg-center bg-no-repeat bg-contain'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto bg-no-repeat bg-cover sm:hidden block"
        style={{
          backgroundImage: `linear-gradient(rgb(0 0 0 / 76%), rgb(0 0 0 / 84%)), url(${GpwBgMobImage.src})`,
        }}
      >
        <div className="max-w-6xl flex items-center sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto">
          <div
            className={`w-full text-center lg:text-start ${
              showcontent ? 'opacity-90' : 'opacity-0'
            }`}
          >
            <h1 className="font-bold text-2xl px-[50px] md:px-0 text-[#EAAA2E]  xl:text-[40px] md:text-[40px] md:leading-[48px] xl:leading-[50px] mb-[8px]">
              PW is Officially a Great Place to Work !
            </h1>

            <div className="md:w-4/5 text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] px-4 md:px-0 text-center xl:text-start text-[#EAECEF] mb-3.5 xl:mb-6">
              Our team says that our culture is exceptional, and our
              certification serves as proof. Want to check out the Exciting
              world of PW?
            </div>

            <Button
              title={'Know More'}
              className={
                'px-[28px] py-[14px] md:w-[200px] w-[148px] md:h-[56px] h-[48px] rounded-md hover:bg-[#FFFFFF] transition-all duration-200 bg-[#FFFFFF] items-center text-[#3D3D3D] font-semibold md:leading-[28px] md:text-[18px] leading-[20px] text-[14px]'
              }
              ctaRedirectionUrl={'https://www.pw.live/updates'}
            />
          </div>

          <div className="sm:py-4 py-6 order-first md:order-first lg:order-last">
            <div
              className={`${
                isInViewport
                  ? 'animate-in slide-in-from-left delay-500 duration-1000'
                  : ''
              }`}
            >
              <Image
                bgImagetitle={GpwImage.src}
                className={
                  'block h-[147px] w-[95px] bg-center bg-no-repeat bg-contain'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(GreatPlaceWorkSection);
