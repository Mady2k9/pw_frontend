import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import MissionSectionBgImage from '../../../../assets/Images/mission-bg.svg';
import equity from '../../../../assets/Images/equity.webp';
import componentCard from '../../../../assets/Images/component-cards.webp';
import globe from '../../../../assets/Images/globe-academic.webp';

const MissionSection = () => {
  return (
    <>
      <div
        className="mx-auto md:py-[40px] pt-[18px]"
        style={{
          backgroundImage: `url(${MissionSectionBgImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-6xl md:py-[32px] pt-[20px] px-[16px] mx-auto">
          <h2 className="font-[700] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-white">
            Our Mission
          </h2>
        </div>
        <div className="max-w-6xl md:flex md:flex-col lg:flex lg:flex-row justify-around items-center md:pb-[40px] py-[24px] px-[16px] mx-auto">
          <div className="md:columns-4 columns-12 md:w-[356px] sm:w-full h-[120px] my-[20px] rounded-lg relative">
            <div className="w-[76px] h-[86px] rounded-lg bg-[#1B7938] absolute top-[-3px] left-[-3px]"></div>

            <div className="w-[76px] h-[86px] rounded-lg bg-[#1B7938] absolute bottom-[-3px] right-0"></div>

            <div className="w-[97%] h-auto rounded-lg bg-[#FFF1F3] absolute bottom-1 right-1 top-1 left-1">
              <div className="pt-[30px] pb-[30px] px-[24px] flex gap-x-4">
                <div>
                  <Image
                    bgImagetitle={equity.src}
                    className={
                      'h-[56px] w-[56px] bg-center bg-no-repeat bg-contain'
                    }
                  />
                </div>
                <div className="text-sm md:text-[18px] px-4 md:px-0 md:text-center items-center xl:text-start text-[#1B2124] font-[600] leading-7">
                  To aim for{' '}
                  <span className="text-[#5A4BDA]">Equity and inclusivity</span>{' '}
                  in Education
                </div>
              </div>
            </div>
          </div>

          <div className="md:columns-4 columns-12 md:w-[356px] sm:w-full h-[120px] my-[20px] rounded-lg relative">
            <div className="w-[76px] h-[86px] rounded-lg bg-[#F1EFFF] absolute top-[-3px] left-[-3px]"></div>

            <div className="w-[76px] h-[86px] rounded-lg bg-[#F1EFFF] absolute bottom-[-3px] right-0"></div>

            <div className="w-[97%] h-auto rounded-lg bg-[#FFFBEF] absolute bottom-1 right-1 top-1 left-1">
              <div className="pt-[30px] pb-[30px] px-[24px] flex gap-x-4">
                <div>
                  <Image
                    bgImagetitle={globe.src}
                    className={
                      'h-[56px] w-[56px] bg-center bg-no-repeat bg-contain'
                    }
                  />
                </div>
                <div className="text-sm md:text-[18px] px-4 md:px-0 md:text-center items-center xl:text-start text-[#1B2124] font-[600] leading-7">
                  To reach <span className="text-[#5A4BDA]">learners</span> in
                  every corner of the country
                </div>
              </div>
            </div>
          </div>
          <div className="md:columns-4 columns-12 md:w-[356px] sm:w-full h-[120px] my-[20px] rounded-lg relative">
            <div className="w-[76px] h-[86px] rounded-lg bg-[#E31B4D] absolute top-[-3px] left-[-3px]"></div>

            <div className="w-[76px] h-[86px] rounded-lg bg-[#E31B4D] absolute bottom-[-3px] right-0"></div>

            <div className="w-[97%] h-auto rounded-lg bg-[#E7F6FA] absolute bottom-1 right-1 top-1 left-1">
              <div className="pt-[30px] pb-[30px] px-[24px] flex gap-x-4">
                <div>
                  <Image
                    bgImagetitle={componentCard.src}
                    className={
                      'h-[56px] w-[56px] bg-center bg-no-repeat bg-contain'
                    }
                  />
                </div>
                <div className="text-sm md:text-[18px] px-4 md:px-0 md:text-center items-center xl:text-start text-[#1B2124] font-[600] leading-7">
                  To build a
                  <span className="text-[#5A4BDA] mx-1">business</span>
                  sustainability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MissionSection);
