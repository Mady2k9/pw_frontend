import React, { useState } from 'react';
import Image from '../../Atoms/Image/Image';
import Link from 'next/link';

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
          className={`border xl:min-w-[366px] relative max-w-[350px] rounded-lg min-w-[320px] p-3.5 md:p-4 bg-white shadow-md transition-transform transform ${
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
          <div
            className={`border text-[12px] leading-[18px] font-[600] text-white px-[15px] py-[3px] rounded-2xl bg-${item.bgColor} mx-[10px] whitespace-nowrap absolute top-[-12px] z-10 left-[121px]`}
            style={{ backgroundColor: item.bgColor }}
          >
            {item.TopTitle}
          </div>

          <div className="flex flex-col justify-between gap-[27px] pb-2">
            <Image
              bgImagetitle={item.mwebImage}
              className={
                'md:w-[320px] md:h-[202px] w-[97%] h-[202px] mx-auto bg-center bg-no-repeat bg-cover mt-2 rounded-lg'
              }
            />
            <div className="text-center">
              <div
                className={`font-bold leading-[32px] text-[24px]`}
                style={{ color: `${item.bgColor}` }}
              >
                {item.title}
              </div>
              <div className="font-[500] leading-[24px] text-[16px] text-[#3D3D3D]">
                {item.description}
              </div>
            </div>
            <a href={`/school-curriculum/desc?tab=${item.title}`}>
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
                <div className="font-semibold text-[#FFFFFF] text-center">
                  Learn More
                </div>

                <Image
                  bgImagetitle={'/arrow-small-right.webp'}
                  className={`w-5 h-5 bg-center bg-no-repeat bg-cover rounded-lg ${
                    hoveredIndex === index ? 'group-hover:block' : 'hidden'
                  }`}
                />
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default PublishingCard;
