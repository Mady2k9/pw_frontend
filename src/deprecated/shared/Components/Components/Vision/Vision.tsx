/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import VisionBgImage from '../../../../assets/Images/vision-bg.svg';
import VisionBgMobImage from '../../../../assets/Images/Our-Vision-mweb.webp';
import visionWeb from '../../../../assets/Images/vision.webp';
import visionMweb from '../../../../assets/Images/vision-mweb.webp';
import starImage from '../../../../assets/Images/star.webp';

const VisionSection = () => {
  return (
    <>
      <div
        className="mx-auto bg-no-repeat bg-cover bg-bottom py-3 sm:block hidden"
        style={{
          backgroundImage: `url(${VisionBgImage.src})`,
        }}
      >
        <div className="max-w-6xl flex py-[24px] px-[16px] md:py-[30px] justify-between flex-col xl:flex-row m-auto">
          <div className="xl:text-left xl:w-[50%] w-full py-[20px]">
            <h2 className="font-[700] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-[#1B2124]">
              Our Vision
            </h2>
            <div className="flex pt-[16px] gap-2.5 text-sm md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>To democratize education at scale in India.</span>
            </div>
            <div className="flex text-sm gap-2.5 md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>
                To ensure every child has access to quality education at the
                most affordable costs.
              </span>
            </div>
            <div className="flex text-sm gap-2.5 md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>
                To allow every child to realize his/her dream, live up to their
                true potential and be their lifelong learning partner.
              </span>
            </div>
          </div>

          <div className="mx-auto">
            
            <Image
              bgImagetitle={visionWeb.src}
              className={
                'sm:block hidden h-[336px] w-[580px] bg-center bg-no-repeat bg-contain'
              }
            />
          </div>
        </div>
      </div>

      <div
        className="mx-auto bg-bottom bg-cover bg-no-repeat sm:hidden block"
        style={{
          backgroundImage: `url(${VisionBgMobImage.src})`,
        }}
      >
        <div className="flex py-[24px] px-[16px] justify-between flex-col m-auto">
          <div className="w-full">
            <h2 className="font-[700] text-[20px] leading-[30px] text-[#1B2124]">
              Our Vision
            </h2>
            <div className="flex pt-[16px] gap-2.5 text-sm md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>To democratize education at scale in India.</span>
            </div>
            <div className="flex text-sm gap-2.5 md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>
                To ensure every child has access to quality education at the
                most affordable costs.
              </span>
            </div>
            <div className="flex text-sm gap-2.5 md:text-[18px] leading-[28px] md:px-0 items-center xl:text-start text-[#3D3D3D] mb-3.5 font-[500]">
              <span>
                <Image
                  bgImagetitle={starImage.src}
                  className={
                    'h-[32px] w-[32px] bg-center bg-no-repeat bg-contain'
                  }
                />
              </span>
              <span>
                To allow every child to realize his/her dream, live up to their
                true potential and be their lifelong learning partner.
              </span>
            </div>
          </div>

          <div className="mx-auto">
            <Image
              bgImagetitle={visionMweb.src}
              className={
                'sm:hidden block h-[183px] w-[328px] bg-center bg-no-repeat bg-contain'
              }
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(VisionSection);
