import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Text from '../Atoms/Text/Text';
import React, { memo } from 'react';
import { useRouter } from 'next/router';

export interface CourseHeroSectionProps {
  description: string;
  initialValue: string;
  mainHeading: string;
}

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  description,
  initialValue,
  mainHeading,
}) => {
  const router = useRouter();
  const dataFromurl = router.asPath.split('/');
  const mainHeadingData = dataFromurl[3]?.replace('-', ' ');
  return (
    <>
      <div className="bg-cover py-4 sm:py-6 px-4 xl:px-0 bg-no-repeat sm:bg-[url('/course-hero-bg-web.webp')] bg-[url('/course-hero-bg-Mweb.webp')]">
        <Breadcrumb
          mainHeadingData={dataFromurl}
          mainHeading={mainHeading}
          breadCrumbInitialValue={initialValue}
        />
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex-col xl:flex-row m-auto">
            <div className="text-center md:text-left flex flex-col gap-y-2 ">
              <h1 className="font-bold text-2xl text-[#1B2124] capitalize xl:text-[40px] md:text-[32px] md:leading-[48px] xl:leading-[50px]">
                {mainHeadingData === mainHeading?.toLowerCase()
                  ? ' '
                  : mainHeadingData?.split('?')[0]}{' '}
                <span className="text-[#5A4BDA] break-all">
                  {mainHeading?.toUpperCase()}
                </span>{' '}
                {initialValue}
              </h1>
              <Text
                style={' text-sm md:text-base text-[#3D3D3D] break-all'}
                title={description}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CourseHeroSection);
