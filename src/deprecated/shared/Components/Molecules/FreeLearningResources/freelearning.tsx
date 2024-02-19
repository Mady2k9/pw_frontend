import React, { memo } from 'react';
import FreeLearningLastSection from './FreeLearningLastSection';
import FreeLearningBlock from './FreeLearningBlock';
import {
  FreeLernItems,
  MenuLastItemsType,
  menuItemsDatas,
} from './FreelearnType.d';
export interface FreelearningProps {
  footerFreeLernData: FreeLernItems;
  footerlastSectionData: MenuLastItemsType[];
}

const Freelearning: React.FC<FreelearningProps> = ({
  footerlastSectionData,
  footerFreeLernData,
}) => {
  const compareByLength = (a: any, b: any) =>
    b.menuItems.length - a.menuItems.length;
  const sortedFooterFreeLernData =
    footerFreeLernData?.menuItems?.sort(compareByLength);
  return (
    <div className=" bg-[#F8F8F8] py-8 text-left">
      <div className="mx-auto max-w-6xl xl:px-0 px-4">
        <div className="mb-6 font-[700]  text-[#3D3D3D]   text-[24px] leading-[32px] text-start">
          Free Learning Resources
        </div>
        <div>
          <div className="w-full">
            <div className="flex flex-row flex-wrap">
              {sortedFooterFreeLernData?.map((data: menuItemsDatas) => (
                <FreeLearningBlock key={data?.menuTitle} data={data} />
              ))}
            </div>
          </div>
        </div>
        <FreeLearningLastSection
          footerlastSectionData={footerlastSectionData}
        />
      </div>
    </div>
  );
};
export default memo(Freelearning);
