import React, { useState, memo } from 'react';
import Image from '../../Atoms/Image/Image';
import { MostLovedFeatureCardProps } from './MostLovedCardType';

const MostLovedFeatureCard = ({
  cardData,
}: {
  cardData: MostLovedFeatureCardProps;
}) => {
  const [iconChange, setIconChange] = useState(false);
  const handleMouseEnter = () => {
    setIconChange(true);
  };
  const handleMouseLeave = () => {
    setIconChange(false);
  };
  return (
    <div className="xl:min-w-[310px] min-w-[286px] border border-[#D9DCE1] xl:p-6 p-4 shadow-md rounded-md flex flex-col gap-y-3.5 ">
      <Image
        bgImagetitle={cardData?.dwebBackGroundImage}
        className={
          'xl:w-[262px] m-auto w-[236px] xl:h-[210px] h-[170px] rounded-md bg-center bg-contain bg-no-repeat'
        }
      />
      <div>
        <div className="xl:text-2xl text-lg mb-[2px] font-semibold text-[#1B2124]">
          {cardData?.title}
        </div>

        <div className="xl:text-lg text-sm mb-[7px] text-[#3D3D3D]">
          {cardData?.subTitle}
        </div>

        <div className="xl:text-sm text-xs text-[#757575] ">
          {cardData?.description}
        </div>
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-2 hover:gap-12 delay-200  self-end justify-end w-[60%] "
      >
        <div
          className={`text-base cursor-pointer ${
            iconChange ? 'text-[#5A4BDA]' : 'text-[#1B2124]'
          } `}
        >
          Explore
        </div>
        <div
          className={` py-1 px-3 rounded-full  ${
            iconChange ? `bg-[#5A4BDA]` : `bg-[#F8F8F8] `
          }`}
        >
          <Image
            bgImagetitle={
              iconChange
                ? '/most-loved-white-icon.webp'
                : '/loved-explore-arrow.webp'
            }
            className={
              'cursor-pointer py-1 px-3 w-[19px] h-[16px] bg-center bg-contain bg-no-repeat'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default memo(MostLovedFeatureCard);
