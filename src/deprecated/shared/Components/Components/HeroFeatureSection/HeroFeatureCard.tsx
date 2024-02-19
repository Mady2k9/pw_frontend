import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
export interface HeroFeatureCardsdProps {
  mainTitle: string;
  subTitle: string;
  CardImage: string;
}

const HeroFeatureCards: React.FC<HeroFeatureCardsdProps> = ({
  mainTitle,
  subTitle,
  CardImage,
}) => {
  return (
    <>
      <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px]  lg:w-[240px] flex flex-col text-center">
        <div className="self-center mb-2.5 md:mb-3.5">
          <Image
            bgImagetitle={CardImage}
            className={
              'sm:w-12 sm:h-12 w-8 h-8 bg-center bg-no-repeat bg-cover'
            }
          />
        </div>
        <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
          {mainTitle}
        </div>
        <div className="md:text-base text-xs font-medium text-[#1B2124]">
          {subTitle}
        </div>
      </div>
    </>
  );
};
export default memo(HeroFeatureCards);
