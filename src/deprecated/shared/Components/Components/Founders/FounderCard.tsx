import React from 'react';
import Image from '../../Atoms/Image/Image';
import alakhImg from '../../../../assets/Images/alakh-sir-image.webp';

export default function FounderCard({ isShown }: { isShown: boolean }) {
  return (
    <>
      <div className="flex justify-center py-3 ">
        <Image
          bgImagetitle={alakhImg.src}
          className={
            'md:h-[168px] md:w-[168px] h-[100px] w-[100px] bg-center bg-no-repeat bg-contain'
          }
        />
      </div>
      <div className="py-1 font-[700] md:text-[24px] md:leading-[32px] text-[20px] leading-[30px] text-[#3D3D3D]">
        Alakh Pandey
      </div>
      <div className="font-[500] md:text-[16px] md:leading-[24px] text-[14px] leading-[22px] text-[#3D3D3D]">
        Founder and CEO
      </div>
      <div className="pt-3 px-1 font-[600] md:text-[20px] md:leading-[32px] text-[16px] leading-[30px] text-[#1B2124] italic">
        “My aim is to democratize and transform the education landscape in
        Bharat.”
      </div>
    </>
  );
}
