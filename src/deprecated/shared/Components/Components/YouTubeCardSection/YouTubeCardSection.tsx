import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';
import YouTubeCards from '../../Molecules/YouTubeCards/YouTubeCards';
import { YouTubeCardsSectionProps } from './YouTubeDataType.d';
import Button from '../../Atoms/Button/Button';

const YouTubeCardsSection = ({
  youtubeData,
}: {
  youtubeData: YouTubeCardsSectionProps;
}) => {
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedYoutubeData = youtubeData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  return (
    <div className="my-6 2xl:max-w-6xl m-auto mb-[80px] flex flex-col items-center justify-center">
      <div className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center ">
        {youtubeData.sectionTitle}
      </div>

      <div className="md:text-[18px] text-[#3d3d3d] text-[14px] md:leading-[24px] leading-[20px] font-[500] text-center ">
        {youtubeData.sectionSubTitle}
      </div>

      <Marquee pauseOnHover>
        <div className="flex  w-full my-5 md:my-6 xl:my-8">
          {sortedYoutubeData?.map((data) => (
            <YouTubeCards
              key={data.channelName}
              mainTitle={data.channelName}
              SubscriberValue={data.subscribers}
              Subscribers={'Subscribers'}
              Varient={
                data.subscribers < 1
                  ? 'Silver'
                  : data.subscribers < 10
                  ? 'Gold'
                  : data.subscribers < 50
                  ? 'Diamond'
                  : ''
              }
            />
          ))}
        </div>
      </Marquee>
      <Button
        className={` px-[28px] py-[14px] w-[240px] sm:text-lg rounded-md transition-all duration-200 items-center font-semibold leading-[27px] text-[17px]`}
        title={youtubeData?.cta.text}
        backGroundColor={youtubeData?.cta.backGroundColor}
        textColor={youtubeData?.cta.textColor}
        hoverColor={youtubeData?.cta.hoverColor}
        ctaRedirectionUrl={youtubeData?.cta.ctaRedirectionUrl}
      />
    </div>
  );
};
export default memo(YouTubeCardsSection);
