import React, { memo } from 'react';
import { MenuLastItemsType } from './FreelearnType.d';
function FreeLearningLastSection({
  footerlastSectionData,
}: {
  footerlastSectionData: MenuLastItemsType[];
}) {
  return (
    <div>
      <div className="py-6 flex flex-col text-left gap-5">
        {footerlastSectionData?.map((data: MenuLastItemsType) => (
          <div key={data?.menuTitle} className=" flex flex-col gap-1">
            <div className="text-[#3d3d3d] text-base font-[600]">
              {data?.menuTitle}
            </div>
            <div className="text-[#757575] text-xs">{data?.description}</div>
          </div>
        ))}
      </div>
      <hr className="border mb-[18px]" />
      <div className="flex md:flex-row flex-col justify-between items-center gap-y-2 ">
        <div className="flex justify-center md:justify-start gap-3 items-center">
          <a href="https://www.pw.live/privacy-policy">
            <div className="xl:text-[#3D3D3D] xl:text-[14px] xl:leading-[18px] xl:font-[500] text-xs">
              Privacy Policy
            </div>
          </a>
          <hr className="border h-4" />
          <a href="https://www.pw.live/terms-and-conditions">
            <div className="xl:text-[#3D3D3D] xl:text-[14px] xl:leading-[18px] xl:font-[500] text-xs">
              Terms of use
            </div>
          </a>
        </div>
        <div className="text-center xl:text-[#3D3D3D] xl:text-[14px] xl:leading-[18px] xl:font-[500] text-[12px] text-[#1B2124]">
          Copyright © 2024 Physics Wallah Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default memo(FreeLearningLastSection);
