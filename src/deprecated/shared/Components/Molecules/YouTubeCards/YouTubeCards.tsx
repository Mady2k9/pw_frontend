import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import Gold from '../../../../assets/Images/gold-button.webp';
import Silver from '../../../../assets/Images/Silver.webp';
import Diamond from '../../../../assets/Images/Diamond.webp';

export interface YouTubeCardsdProps {
  mainTitle: string;
  Subscribers: string;
  // EducationalPlatformCardImage: string;
  SubscriberValue: number;
  Varient: string;
}

const YouTubeCards: React.FC<YouTubeCardsdProps> = ({
  mainTitle,
  Subscribers,
  SubscriberValue,
  // EducationalPlatformCardImage,
  Varient,
}) => {
  let bgColor = '';
  let youTuubeIcon = '';
  if (Varient == 'Gold') {
    bgColor = 'linear-gradient(#FFEBC5 0%, #FFFFFF 22.79%, #FFE6BF 100% )';
    youTuubeIcon = Gold.src;
  } else if (Varient == 'Silver') {
    bgColor = 'linear-gradient(180deg, #C9C8C8 0%, #FFF 22.79%, #CDCDCD 100%)';
    youTuubeIcon = Silver.src;
  } else if (Varient == 'Diamond') {
    bgColor = 'linear-gradient(180deg, #C9C8C8 0%, #FFF 22.79%, #CDCDCD 100%)';
    youTuubeIcon = Diamond.src;
  }
  return (
    <div
      className=" h-[166px] min-[360px]:w-[290px] w-[360px] sm:w-[360px] p-3 justify-center gap-3 flex flex-col rounded-lg mx-2"
      style={{
        backgroundImage: `${bgColor}`,
      }}
    >
      <Image
        bgImagetitle={youTuubeIcon}
        className={'h-[56px] w-[80px] bg-center bg-no-repeat bg-cover mx-auto'}
      />

      <div className="mx-auto">
        <div className="font-[700]  text-[#1B2124]  text-[20px] leading-[30px] text-center pb-[8px]">
          {mainTitle}
        </div>
        <div className="flex justify-center gap-1">
          <div className="font-[600]  text-[#3D3D3D]  text-[16px] leading-[24px] gap-2">
            {SubscriberValue}M
          </div>

          <div className="font-[500]  text-[#757575]  text-[16px] leading-[24px]">
            {Subscribers}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(YouTubeCards);
