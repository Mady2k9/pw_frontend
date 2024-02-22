import React from 'react';
import Image from '../../Atoms/Image/Image';
import prateekImg from '../../../../assets/Images/co-founder.webp';

export default function FounderCard({ isShown }: { isShown: boolean }) {
  return (
    <>
      <div className="flex justify-center py-3 ">
        <Image
          bgImagetitle={prateekImg.src}
          className={
            'md:h-[168px] md:w-[168px] h-[100px] w-[100px] bg-center bg-no-repeat bg-contain'
          }
        />
      </div>
      <div className="py-1 font-[700] md:text-[24px] md:leading-[32px] text-[20px] leading-[30px] text-[#3D3D3D]">
        Prateek Maheshwari
      </div>
      <div className="font-[500] md:text-[16px] md:leading-[24px] text-[14px] leading-[22px] text-[#3D3D3D]">
        Co Founder
      </div>
      <div className="pt-2 px-3 font-[600] md:text-[20px] md:leading-[32px] text-[16px] leading-[30px] text-[#1B2124] italic">
        “Teachers add soul into technology, which is why in ed-tech, education
        comes before technology”
      </div>
    </>
  );
}
