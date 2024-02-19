import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import Image from '../../Atoms/Image/Image';
import PoupLogin from '../PoupLogin/PoupLogin';
import { useRouter } from 'next/router';
import eventTracker from '../../EventTracker/eventTracker';

function Test({ secenData }: { secenData: any }) {
  const [showMore, setShowMore] = useState(2);
  const toggleViewCategories = () => {
    if (showMore === 2) setShowMore(secenData?.TestSeriesDetails.length);
    else setShowMore(2);
  };

  const router = useRouter();
  const handleClick = () => {
    // eventTracker.authPageVisit('home_page');
    const baseUrl =
      'https://staging.physicswallah.live/study/test-series?childUrl=%2F';
    window.location.href = `https://staging.physicswallah.live/auth?redirect_url=${baseUrl}`;

    // router.push('/study');
  };
  return (
    <>
      <div>
        <section className="p-4 mt-4 bg-white relative rounded-md drop-shadow-md">
          <div className="absolute sm:top-[-130px] top-[-110px]"></div>
          <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
            {secenData.title}
          </h1>

          {secenData?.TestSeriesDetails?.slice(0, showMore).map((item: any, index: any) => (
            <div key={index} className="p-4 flex  justify-between border  sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md gap-2">
              <div className="flex flex-col w-[90%]">
                <div className="rounded-full bg-[#DFF1E4] px-[10px] text-[#17662F]  text-[12px]  leading-[18px] font-[600] w-[44px] ">
                  {item?.type}
                </div>
                <div className="text-[#3D3D3D]  text-[18px]  leading-[28px] font-[700] my-[12px]">
                  {item?.name}
                </div>
                <div className="flex items-center gap-[8px] w-full flex-wrap">
                  <img src="/ClipPath.webp" className="h-[13px] w-[9px]" />
                  <div className="text-[#3D3D3D]  text-[14px]  leading-[20px] font-[500] whitespace-nowrap">
                    {item?.Questions}
                  </div>
                  <hr className="border h-4" />
                  <div className="text-[#3D3D3D]  text-[14px]  leading-[20px] font-[500] whitespace-nowrap">
                    {item?.marks}
                  </div>
                  <hr className="border h-4" />

                  <div className="text-[#3D3D3D]  text-[14px]  leading-[20px] font-[500] whitespace-nowrap">
                    {item?.time}
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src="/ebook.webp" className="h-[13px] w-[9px]" />
                  <div className="text-[#3D3D3D]  text-[14px]  leading-[20px] font-[500] whitespace-nowrap">
                    {item?.startDate}
                  </div>
                </div>
              </div>
              {item?.type ? (
                <div
                  className="flex flex-col justify-center items-center "
                  onClick={handleClick}
                >
                  <Image
                    bgImagetitle={'/ArrowTest.webp'}
                    className={
                      'md:h-[32px] md:w-[32px] h-[24px] w-[24px] bg-center bg-contain bg-no-repeat'
                    }
                  />
                  <div className="md:text-[14px]  md:leading-[20px] text-xs font-[700] text-[#5A4BDA] whitespace-nowrap">
                    Take Test
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col justify-center items-center "
                  onClick={handleClick}
                >
                  <Image
                    bgImagetitle={'/lock.webp'}
                    className={
                      'md:h-[32px] md:w-[32px] h-[24px] w-[24px] bg-center bg-contain bg-no-repeat'
                    }
                  />
                  <div className="md:text-[14px]  md:leading-[20px] text-xs font-[700] text-[#575757] ">
                    Locked
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button
            className={
              'bg-[#F1EFFF] w-full text-[#5A4BDA] text-[16px] leading-[24px] font-[600] text-center h-[48px] rounded-lg'
            }
            title={
              showMore && showMore > 6
                ? 'View Less'
                : 'View All Categories  (' +
                  secenData?.TestSeriesDetails?.length +
                  ')'
            }
            onClick={toggleViewCategories}
          />
        </section>
      </div>
    </>
  );
}

export default Test;
