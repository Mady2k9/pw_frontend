import React from 'react';
import Image from '../Atoms/Image/Image';
import HomeImageIcon from '../../../assets/Images/Icon.webp';
import cheveronRightIcon from '../../../assets/Images/chevron-right.webp';

export interface BreadcrumbSectionProps {
  mainHeadingData: string[];
  mainHeading: string;
  breadCrumbInitialValue: string;
}
const Breadcrumb: React.FC<BreadcrumbSectionProps> = ({
  mainHeadingData,
  mainHeading,
  breadCrumbInitialValue,
}) => {
  return (
    <div className="mx-auto xl:max-w-6xl w-full mb-3 overflow-x-scroll">
      <ol className="list-none  inline-flex gap-2 items-center">
        <li className="flex items-center ">
          <a aria-label="home-icon" href="https://pw.live/">
            <Image
              bgImagetitle={HomeImageIcon.src}
              className={'h-4 w-4 bg-center bg-contain bg-no-repeat'}
            />
          </a>
        </li>
        <Image
          bgImagetitle={cheveronRightIcon.src}
          className={'h-3 w-3 bg-center bg-contain bg-no-repeat'}
        />
        <a href={'/'}>
          <div
            className={`${
              mainHeadingData?.slice(3)
                ? 'text-[#757575] hover:text-[#1B2124]'
                : 'text-[#5A4BDA]'
            } font-[600] text-[12px] leading-[24px] truncate`}
          >
            {mainHeading?.toUpperCase()} {breadCrumbInitialValue}
          </div>
        </a>
        {mainHeadingData?.slice(3)?.map((data: string) => (
          <div key={data} className="flex items-center gap-1.5">
            {data != mainHeading?.replace(' ', '-').toLowerCase() && (
              <Image
                bgImagetitle={cheveronRightIcon.src}
                className={'h-3  w-3 bg-center bg-contain bg-no-repeat'}
              />
            )}
            <a aria-label="breadcrum-link" href={data}>
              <div className="font-[600]  text-[#5A4BDA] capitalize text-[12px] leading-[24px] truncate">
                {`${
                  data === mainHeading?.replace(' ', '-').toLowerCase()
                    ? ''
                    : data?.split('?')[0] +
                      ' ' +
                      mainHeading?.toUpperCase() +
                      ' ' +
                      breadCrumbInitialValue
                }`}
              </div>
            </a>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
