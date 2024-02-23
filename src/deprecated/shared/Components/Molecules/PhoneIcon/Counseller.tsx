import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import CallIcon from '../../../../assets/Images/callerIcons.webp';
// import TransitionWrapper from '../TransitionWrapper/TransitionWrapper';

export interface CouncellingPopupProps {
  mainTitle: string;
  popDesciptions: string;
  popImage: string;
  popNumber: string;
}

const Counselling: React.FC<CouncellingPopupProps> = ({
  mainTitle,
  popDesciptions,
  popImage,
  popNumber,
}) => {
  return (
    <div className="md:w-[360px] shadow-lg ml-auto rounded-md h-[192px] w-[328px] py-6 px-2.5 bg-[#FFF] ">
      <div className="flex  justify-between ">
        <div>
          <div className="font-[700]  text-[#2B2B2B]   text-[16px] leading-[24px] ">
            {mainTitle}
          </div>
          <div className="font-[500]  text-[#2B2B2B]   text-[14px] leading-[22px] ">
            {popDesciptions}
          </div>
        </div>
        <Image
          bgImagetitle={popImage}
          className={'h-[78px] w-[79px] bg-center bg-no-repeat bg-contain'}
        />
      </div>

      <div className="flex justify-center p-3 w-full h-[48px] border rounded-lg mt-4 border-indigo-500 gap-2.5">
        <Image
          bgImagetitle={`${CallIcon.src}`}
          className={'h-4 w-4 bg-center bg-no-repeat bg-contain mt-1'}
        />
        <a href={`tel:${popNumber}`}>
          {' '}
          <div className="w-[83px] h-[22px] font-semibold hidden sm:block text-indigo-500">
            {popNumber}
          </div>{' '}
          <div className="w-[83px] h-[22px] font-semibold block sm:hidden text-indigo-500">
            0{popNumber}
          </div>{' '}
        </a>
      </div>
    </div>
  );
};
export default memo(Counselling);
