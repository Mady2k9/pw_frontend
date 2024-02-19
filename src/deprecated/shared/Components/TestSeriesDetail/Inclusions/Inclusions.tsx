import React, { useState } from 'react';
import TestseriesData from '../../../../jsonFiles/testseriesDescriptions.json';
import DownloadPdf from '../../DownloadPdf/DownloadPdf';

function Inclusions({ ref }: { ref: any }) {
  return (
    <>
      <section className="p-[24px] bg-white relative rounded-md drop-shadow-md w-full">
        <div className="absolute sm:top-[-130px] top-[-117px]"></div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
            {TestseriesData?.data?.firstSection?.title}
          </h1>
          <div className="flex flex-wrap xl:gap-[32px] gap-[6px] ">
            {TestseriesData?.data?.firstSection?.Information.map(
              (item, index) => (
                <div key={index}>
                  <div
                    className={` border-l-4 px-[12px]`}
                    style={{ borderColor: `${item?.borderColor}` }}
                  >
                    <div className="md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] font-[700] text-[#1B2124]">
                      {item?.value}
                    </div>
                    <div className="md:text-[14px] md:leading-[20px] text-[12px] leading-[18px] font-[500] text-[#757575] pt-[4px] whitespace-nowrap">
                      {' '}
                      {item.details}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="w-full md:leading-[28px] leading-[22px] md:text-[18px] text-[14px] ">
            {TestseriesData?.data?.firstSection?.bulletPoint
              ?.slice(0, 4)
              .map((item, index: number) => (
                <p key={index} className="mb-[12px] flex gap-2">
                  <img
                    src={item?.bulletImage}
                    alt="check"
                    className="h-[32px] w-[32px]"
                  />
                  {item?.content}
                </p>
              ))}
          </div>
          <DownloadPdf />
        </div>
      </section>
    </>
  );
}

export default Inclusions;
