import React, { useState } from 'react';
import { Image } from '@/components/ui/image';
import Link from 'next/link';
import Arrow from '../../../../assets/Images/Schools/arrow-small-right.webp';

interface PublishingCardProps {
  data: {
    title: string;
    description: string;
    mwebImage: string;
    dwebImage: string;
    TopTitle: string;
    bgColor: string;
  }[];
}
function PublishingCard({ data }: PublishingCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className={`border  relative w-[360px] rounded-lg  p-3.5 md:p-4 bg-white shadow-md transition-transform transform ${
            hoveredIndex === index
              ? 'hover:translate-y-1 animate__animated'
              : ''
          }`}
          style={{
            borderRadius: '12px',
            border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
            background: 'var(--PW-Gray-Palette-PW-White, #FFF)',
            boxShadow: `${
              hoveredIndex === index ? '' : '0px 4px 0px 0px #989DA5'
            }`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex justify-center items-center relative">
            <div
              className={`border text-[12px] leading-[18px]  font-[600] text-white px-[15px] py-[3px] rounded-2xl bg-${item.bgColor} mx-[10px] whitespace-nowrap absolute top-[-30px] z-10 `}
              style={{ backgroundColor: item.bgColor }}
            >
              {item.TopTitle}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[27px] pb-2 ">
            
            <Image src={`${item.mwebImage}`}  alt='Image'className={
                'md:w-[320px] md:h-[202px]  h-[181px] w-[296px] mx-auto bg-center bg-no-repeat bg-cover mt-2 rounded-lg'
              } />
            <div className="text-center">
              <div
                className={`font-bold md:leading-[32px] md:text-[24px] leading-[28px] text-[18px]`}
                style={{ color: `${item.bgColor}` }}
              >
                {item.title}
              </div>
              <div className="font-[500] md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D] mt-1">
                {item.description}
              </div>
            </div>
            <a href={`/school-curriculum/${item.title}`}>
              <div
                className={`flex justify-center items-center rounded-lg py-2 border border-[#1B2124] hover:bg-[#1B2124] bg-[#1B2124] gap-[10px] transition-transform transform ${
                  hoveredIndex === index
                    ? 'hover:translate-y-1 animate__animated'
                    : ''
                }`}
                style={{
                  background: 'var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
                  boxShadow: `${
                    hoveredIndex === index ? '' : '0px 4px 0px 0px #989DA5'
                  }`,
                }}
              >
                <div className="font-semibold text-[#FFFFFF] text-center md:leading-[20px] md:text-[14px] leading-[24px] text-[16px]">
                  Learn More
                </div>


                 <Image src={`${Arrow.src}`}  alt='Image' className={`w-5 h-5 bg-center bg-no-repeat bg-cover rounded-lg`} />
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default PublishingCard;
