import React, { memo } from 'react';
import Image from '../Atoms/Image/Image';
import Text from '../Atoms/Text/Text';

const FeatureCard = ({
  mainTitle,
  discription,
  FeatureImage,
  bgColor,
}: {
  mainTitle: string;
  discription: string;
  FeatureImage: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`xl:min-w-[360px] md:min-w-[360px] min-w-[310px] w-full max-h-[212px] md:max-w-[360px] p-8 flex flex-col items-center rounded`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <Image
        bgImagetitle={FeatureImage}
        className={
          'xl:w-[56px] w-[56px] h-[56px] md:w-[56px] xl:h-[56px] bg-center bg-no-repeat bg-contain'
        }
      />

      <div className="mb-1.5 w-full">
        <Text
          style={
            'font-semibold  text-[#1B2124]   xl:text-[24px] xl:leading-[32px] text-[18px] leading-[28px] text-center'
          }
          title={mainTitle}
        />
      </div>
      <div className="mb-1.5 w-full">
        <Text
          style={
            'font-[500]  text-[#757575]   text-[12px] leading-[18px]  xl:text-[14px] xl:leading-[20px] text-center '
          }
          title={discription}
        />
      </div>
    </div>
  );
};
export default memo(FeatureCard);
