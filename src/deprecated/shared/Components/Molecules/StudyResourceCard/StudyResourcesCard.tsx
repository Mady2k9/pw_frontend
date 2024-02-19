import React, { memo, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import eventTracker from '../../EventTracker/eventTracker';
import RightArrow from '../../../../assets/Images/loved-explore-arrow.webp';

const StudyResourcesCard = ({
  mainTitle,
  discription,
  bgColor,
  hoverColor,
  redirectionUrl,
  dwebImage,
}: {
  mainTitle: string;
  discription: string;
  StudyResourcesCardImage: string;
  bgColor: string;
  hoverColor: string;
  redirectionUrl: string;
  mwebImage: string;
  dwebImage: string;
}) => {
  const resourceEventTrigger = (card_click: string) => {
    eventTracker.studyResourceClick(card_click);
  };
  const [onHoverColor, setOnHoverColor] = useState(false);
  const inlineStyles = {
    backgroundColor: onHoverColor ? hoverColor : bgColor,
    boxShadow: onHoverColor ? '0px 8px 24px 0px #0000000F' : undefined,
  };
  return (
    <div
      onMouseEnter={() => setOnHoverColor(true)}
      onMouseLeave={() => setOnHoverColor(false)}
      onClick={() => {
        resourceEventTrigger(mainTitle);
        window.open(redirectionUrl, '_blank');
      }}
      style={inlineStyles}
      className={`xl:min-w-[360px] cursor-pointer transition-all duration-200 md:min-w-[232px] rounded-lg min-w-[286px] max-h-[370px] p-6 group`}
    >
      <a
        href={redirectionUrl}
        className="flex cursor-pointer justify-between mb-1.5 items-center "
      >
        <div className="font-semibold  text-[#1B2124]   xl:text-[24px] xl:leading-[32px] text-[18px] leading-[28px] text-start">
          {mainTitle}
        </div>
        <div className="" style={{ transitionDuration: '1s' }}>
          <Image
            bgImagetitle={`${RightArrow.src}`}
            className="h-4 w-5 bg-center bg-no-repeat bg-contain xl:mr-12 group-hover:mr-0 duration-200 xl:opacity-0 group-hover:opacity-100 transition-all"
          />
        </div>
      </a>

      <div className="font-[500]  text-[#757575]   text-[12px] leading-[18px]  xl:text-[14px] xl:leading-[20px] text-start">
        {discription}
      </div>
      <div className="flex justify-center mt-4">
        <Image
          bgImagetitle={dwebImage}
          className={`${
            onHoverColor ? ' scale-110 transition-all' : ''
          } xl:w-[312px] m-auto w-[268px] h-[180px] duration-200 md:w-[202px] xl:h-[210px] bg-center bg-no-repeat bg-contain`}
        />
      </div>
    </div>
  );
};
export default memo(StudyResourcesCard);
