import React, { useState } from 'react';
import {Image} from '@/components/ui/image';

import { useRouter } from 'next/router';
interface Subject {
  name: string;
  image: string;
  Backcolor: string;
  redirectionUrl: string;
  slug: string;
}
interface ExploreCardProps {
  classItem: any;
  cohortId: string;
  cohertSlug: string;
  schoolclass: string;
}

function ExploreCard({
  classItem,
  cohortId,
  cohertSlug,
  schoolclass,
}: ExploreCardProps) {
  const routes = useRouter();
  const tabUrl = routes.query.bookName;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = (subject: Subject) => {
    const newData = {
      categoryName: tabUrl,
      cohertId: cohortId,
      class: classItem.class,
      name: subject.name,
      cohertSlug: cohertSlug,
      batchSlug: classItem.slug,
      subjectSlug: subject.slug,
      schoolclass: schoolclass,
    };
    localStorage.setItem('clickedSubjects', JSON.stringify(newData));
    let baseUrl = `${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}school-curriculum/${tabUrl}/onboringPage`;
    if (localStorage.getItem('user')) {
      baseUrl = subject.redirectionUrl;
    }

    window.open(
      `${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/auth?redirect_url=${baseUrl}`,
      '_parent'
    );
  };
  return (
    <>
      {classItem.subjects.map((subject: Subject, index: number) => (
        <a
          key={subject.name}
          className="group"
          onClick={() => handleClick(subject)}
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
              <div className="md:text-[20px] md:leading-[30px] text-[16px] leading-[24px] font-semibold group-hover:absolute group-hover:z-0 group-hover:w-[30%]">
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
                src={subject.image}
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
