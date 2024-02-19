import React, { useState } from 'react';
import Image from '../../../Atoms/Image/Image';
import { useRouter } from 'next/router';

function ExploreCard({ classItem }: { classItem: any }) {
  const routes = useRouter();
  const tabUrl = routes.query.tab;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      {classItem.subjects.map((subject: Subject, index: number) => (
        <a
          href={`https://www.pw.live/study/${tabUrl}/${subject.name}`}
          key={subject.name}
          className="group"
        >
          <div
            className="flex md:min-w-[240px] md:max-w-[240px] md:h-[100px] min-w-[180px] max-w-[180px] h-[80px] mb-2 rounded-lg transition-transform transform animate__animated"
            style={{
              boxShadow: `${
                hoveredCard === index ? '' : '0px 4px 0px 0px #1B2124'
              }`,
              border:
                '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
              transform: hoveredCard === index ? 'translateY(5px)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex w-[65%] items-center md:p-5 p-3 ">
              <div className="md:text-[20px] md:leading-[30px] text-[16px] leading-[24px] font-semibold group-hover:absolute group-hover:z-0">
                {subject.name}
              </div>
            </div>
            <div
              className="flex items-center md:w-[100px] group-hover:md:w-[150px]  md:h-[98px] w-[80px] h-[78px] rounded-full flex-row-reverse"
              style={{
                backgroundColor: `${subject.Backcolor}`,
                borderRadius: '70% 10px 10px 70%',
              }}
            >
              <Image
                bgImagetitle={subject.image}
                className={`md:w-[52px] md:h-[52px] w-[40px] h-[40px]  bg-center bg-cover bg-no-repeat mr-5 `}
              />
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default ExploreCard;
