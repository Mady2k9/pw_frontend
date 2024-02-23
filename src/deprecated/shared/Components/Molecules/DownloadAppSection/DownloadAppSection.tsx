import React from 'react';
import DownloadList from './DownloadListData';
import DownloadRightImages from './DownloadRightImages';
import DownloadStoreBadges from './DownloadStoreBadges';
import BlueTickIcon from '../../../../assets/Images/blue-tick.webp';
import GooglePlayeStoreIcon from '../../../../assets/Images/google-play-badge.webp';
import appleStoreIcon from '../../../../assets/Images/apple-store-badge.webp';
import AlakhSirRightImage from '../../../../assets/Images/download-app-right-image.webp';
import TransitionWrapper from '../TransitionWrapper/TransitionWrapper';
import eventTracker from '../../EventTracker/eventTracker';

function DownloadAppSection() {
  const downloadListData = [
    {
      title: 'Live & recorded classes available at ease',
      beforeImage: `${BlueTickIcon.src}`,
    },
    {
      title: 'Dashboard for progress tracking',
      beforeImage: `${BlueTickIcon.src}`,
    },
    {
      title: 'Millions of practice questions at your fingertips',
      beforeImage: `${BlueTickIcon.src}`,
    },
  ];
  const googleStoreEvent = (download_source: string, click_source: string) => {
    eventTracker.appDownloadClick(download_source, click_source);
  };
  const appStoreEvent = (download_source: string, click_source: string) => {
    eventTracker.appDownloadClick(download_source, click_source);
  };
  return (
    <div className="bg-gradient-to-b my-10 min-h-[350px]  overflow-hidden sm:mx-4 xl:mx-auto from-[#F1EFFF] to-[#DEDAFF] relative max-w-6xl m-auto  shadow-md justify-between xl:p-10 p-4 md:flex rounded-md">
      <div className="my-auto">
        <TransitionWrapper>
          <div className="font-bold text-[#1B2124] xl:leading-[48px] leading-[30px] md:text-2xl xl:text-left text-center  text-[20px] xl:text-[32px] mb-4 md:mb-3">
            Join 15 Million students on the app today!
          </div>
        </TransitionWrapper>

        <div className="xl:mb-10 mb-8 text-[#1B2124]">
          {downloadListData.map((data) => (
            <TransitionWrapper key={data.title}>
              <DownloadList
                key={data.title}
                title={data.title}
                blueTickImage={data.beforeImage}
                className={'sm:text-base text-sm'}
              />
            </TransitionWrapper>
          ))}
        </div>
        {/* <DownloadNumberLink /> */}
        <TransitionWrapper>
          <div className="flex md:gap-3.5 gap-2 md:justify-start justify-center sm:mb-0 mb-10">
            <DownloadStoreBadges
              badgeStoreUrl={
                'https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala'
              }
              badgeStoreImage={`${GooglePlayeStoreIcon.src}`}
              className={
                'cursor-pointer w-[135px] h-[40px] bg-center bg-no-repeat bg-cover'
              }
              onClick={() => googleStoreEvent('google_play', 'normal')}
            />

            <DownloadStoreBadges
              badgeStoreUrl={
                'https://apps.apple.com/in/app/physics-wallah/id1641443555'
              }
              badgeStoreImage={`${appleStoreIcon.src}`}
              className={
                'cursor-pointer w-[135px] h-[40px] bg-center bg-no-repeat bg-cover'
              }
              onClick={() => appStoreEvent('app_store', 'normal')}
            />
          </div>
        </TransitionWrapper>
      </div>
      <TransitionWrapper>
        <DownloadRightImages
          src={`${AlakhSirRightImage.src}`}
          className=" xl:w-[301px] xl:h-[376px] w-[200px] sm:h-[450px] h-[248px] mb-[-30px] sm:mb-[-130px] xl:mb-[-65px] m-auto  bg-center bg-contain  bg-no-repeat "
        />
      </TransitionWrapper>
    </div>
  );
}

export default DownloadAppSection;
