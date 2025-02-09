import React, { memo } from 'react';
import Freelearning from '../FreeLearningResources/freelearning';
import { MenuItems } from './FooterTypeD';
import { soicalMediaData } from '@/deprecated/shared/StaticData/SocialMedia';
import GooglePlayeStoreIcon from '../../../../assets/Images/google-play-badge.webp';
import appleStoreIcon from '../../../../assets/Images/apple-store-badge.webp';
import eventTracker from '../../EventTracker/eventTracker';
import Logo from '@/components/icons/Logo';
import NextImage from '@/components/ui/next-image';

export interface footerProps {
  showFreeLearning?: boolean;
  footerData: any;
}

const Footer: React.FC<footerProps> = ({ showFreeLearning, footerData }) => {

  footerData = footerData?.data || footerData;
  if (!footerData?.filter) {
    return <></>;
  }
  const footerlastSectionData = footerData?.filter(
    (value: { section: number }) => value?.section === 3,
  )?.[0]?.menuItems;
  const footerFreeLernData = footerData?.filter(
    (value: { section: number }) => value?.section === 2,
  );
  const footerFirstSectionData = footerData?.filter(
    (value: { section: number }) => value?.section === 1,
  );
  const googleStoreEvent = (download_source: string, click_source: string) => {
    eventTracker.appDownloadClick(download_source, click_source);
  };
  const appStoreEvent = (download_source: string, click_source: string) => {
    eventTracker.appDownloadClick(download_source, click_source);
  };
  return (
    <>
      <footer className=" bg-[#F8F8F8] text-center border-b-2 lg:text-left">
        <div className="mx-auto max-w-6xl xl:px-0 xl:py-8 px-4 py-4 xl:w-[95%]">
          <div className="md:flex md:flex-col md:justify-between xl:flex xl:flex-row  ">
            <div className="mb-6 md:mb-0 xl:w-[40%] md:w-[100%] ">
              <div className="flex gap-4 items-center">
                <a aria-label="pw-logo" href="https://pw.live/">
                  <Logo size={48} />
                </a>

                <div className="self-center font-[700]  text-[#1B2124]  text-[18px] leading-[28px]">
                  Physics Wallah
                </div>
              </div>

              <div className="pt-3 font-[500] text-[#3D3D3D] text-sm  text-left">
                {
                  'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
                }
              </div>
              <div className="2xl">
                <div className="grid content-between md:justify-start col-span-12 md:col-span-4 space-y-2">
                  <div className="whitespace-nowrap text-[#989DA5] md:block hidden"></div>
                  <div className={'flex d-md-items-end gap-4 py-6'}>
                    <a
                      aria-label="google-store"
                      href={`https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NextImage onClick={() =>
                        googleStoreEvent('google_play', 'footer')
                      } alt={'google_play'} src={GooglePlayeStoreIcon.src} width={'135'} height={'40'}
                                 loading={'lazy'} />
                    </a>

                    <a
                      aria-label="apple-store"
                      href={`https://apps.apple.com/in/app/physics-wallah/id1641443555`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NextImage onClick={() =>
                        googleStoreEvent('app_store', 'footer')
                      } alt={'App Store'} src={appleStoreIcon.src} width={'120'} height={'40'} loading={'lazy'} />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-[24px] md:mb-0 lg:mt-0 mt-[20px] ">
                  <div className="text-[16px] md:text-[20px] font-[600] mb-[10px] text-start">
                    Let’s get social :
                  </div>
                  <div className="flex w-[204px] justify-between ">
                    {soicalMediaData.map((data) => (
                      <a aria-label={data.url} href={data.url} key={data.url}>
                        <NextImage alt={data.url} src={data.image} width={24} height={24} loading={'lazy'} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="xl:w-[50%]  grid xl:grid-cols-3 gap-5 md:grid-cols-3 md:place-items-start grid-cols-2 md:pt-6 xl:pt-0 xl:mr-[60px]">
              {footerFirstSectionData?.[0]?.menuItems?.map(
                (menuItems: MenuItems) => {
                  return (
                    <div key={menuItems?.menuTitle}>
                      <div
                        className="mb-2 font-[600] text-start text-[#1B2124]  xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
                        {menuItems?.menuTitle}
                      </div>
                      {menuItems?.menuItems?.map((val) => {
                        return (
                          <ul
                            key={val?.menuTitle}
                            className="font-[400] text-start text-[#757575]   text-[14px] leading-[20px]"
                          >
                            <li className="mb-2">
                              <a href={val?.redirectionUrl}>
                                <div className="hover:underline text-[#3D3D3D] hover:text-black">
                                  {val?.menuTitle}
                                </div>
                              </a>
                            </li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </footer>

      {showFreeLearning && (
        <Freelearning
          footerlastSectionData={footerlastSectionData}
          footerFreeLernData={footerFreeLernData[0]}
        />
      )}
    </>
  );
};
export default memo(Footer);
