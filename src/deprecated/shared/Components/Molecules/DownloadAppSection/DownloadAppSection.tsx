import React from 'react';
import DownloadRightImages from './DownloadRightImages';
import DownloadStoreBadges from './DownloadStoreBadges';
import TransitionWrapper from '../TransitionWrapper/TransitionWrapper';
import eventTracker from '../../EventTracker/eventTracker';
import { downloadAppSectionType } from './downloadAppType';

function DownloadAppSection({
  downloadAppData,
}: {
  downloadAppData: downloadAppSectionType;
}) {
  const handleGaEventClick = (i: number) => {
    if (i == 0) {
      eventTracker.appDownloadClick('google_play', 'normal');
    } else {
      eventTracker.appDownloadClick('app_store', 'normal');
    }
  };
  return (
    <div
      style={{
        background: `${downloadAppData?.sectionProps?.backGroundColor}`,
      }}
      className={`my-10 min-h-[350px]  overflow-hidden sm:mx-4 xl:mx-auto relative max-w-6xl m-auto shadow-md justify-between xl:p-10 p-4 md:flex rounded-md`}
    >
      <div className="my-auto">
        <TransitionWrapper>
          <div className="font-bold text-[#1B2124] xl:leading-[48px] leading-[30px] md:text-2xl xl:text-left text-center  text-[20px] xl:text-[32px] mb-4 md:mb-3">
            {downloadAppData?.sectionTitle}
          </div>
        </TransitionWrapper>

        <div className="xl:mb-10 mb-8 text-[#1B2124]">
          <TransitionWrapper>
            <div
              dangerouslySetInnerHTML={{
                __html: downloadAppData?.sectionSubTitle,
              }}
            ></div>
          </TransitionWrapper>
        </div>
        <TransitionWrapper>
          <div className="flex md:gap-3.5 gap-2 md:justify-start justify-center sm:mb-0 mb-10">
            {downloadAppData?.sectionProps?.appDownloadOption?.map(
              (data, i) => (
                <DownloadStoreBadges
                  key={data.redirectionUrl}
                  badgeStoreUrl={data?.redirectionUrl}
                  badgeStoreImage={data?.image}
                  className={
                    'cursor-pointer w-[135px] h-[40px] bg-center bg-no-repeat bg-cover'
                  }
                  onClick={() => handleGaEventClick(i)}
                />
              )
            )}
          </div>
        </TransitionWrapper>
      </div>
      <TransitionWrapper>
        <DownloadRightImages
          src={downloadAppData?.sectionProps?.dwebImage}
          className=" xl:w-[301px] xl:h-[376px] w-[200px] sm:h-[450px] h-[248px] mb-[-30px] sm:mb-[-130px] xl:mb-[-65px] m-auto  bg-center bg-contain  bg-no-repeat "
        />
      </TransitionWrapper>
    </div>
  );
}

export default DownloadAppSection;
