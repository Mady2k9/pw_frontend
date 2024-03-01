import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ITestPassData } from '@/api/interfaces/test-series';

export interface IColorType {
  bgColor: string;
  borderColor: string;
  icon: { level1: string; level2: string };
}

const TestPassCard = ({ data, color }: {
  data: ITestPassData,
  color: IColorType
}) => {

  console.log(data, color);
  return <div
    className={'flex flex-col w-[360px] rounded-tl-[12px] rounded-tr-[12px] border-[2px]'}
    style={{ borderColor: color.borderColor }}>
  {/*  <div*/}
  {/*    className={'bg-white border-b-2 h-[92px]  border-dashed border-[#D9DCE1] p-[16px] pb-[24px] w-full rounded-tl-[12px] rounded-tr-[12px] flex flex-col'}>*/}
  {/*    <div className="flex flex-row w-full justify-between">*/}
  {/*      <div className="flex flex-row items-center gap-[16px] ">*/}
  {/*        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">*/}
  {/*          <g clipPath="url(#clip0_8401_37945)">*/}
  {/*            <rect width="26" height="26" rx="5" fill={color.icon.level1} />*/}
  {/*            <circle cx="21.3156" cy="5.72188" r="7.8" fill={color.icon.level2} />*/}
  {/*            <rect y="15.6016" width="13.52" height="13.52" fill={color.icon.level2} />*/}
  {/*          </g>*/}
  {/*          <defs>*/}
  {/*            <clipPath id="clip0_8401_37945">*/}
  {/*              <rect width="26" height="26" rx="5" fill="white" />*/}
  {/*            </clipPath>*/}
  {/*          </defs>*/}
  {/*        </svg>*/}
  {/*        <div className="text-[16px] leading-[24px] font-[700]">{data.title}</div>*/}
  {/*      </div>*/}
  {/*      {data.planTitle && <div*/}
  {/*        className="bg-gradient-to-r from-[#C58F27] to-[#EDB84F] text-white rounded-[4px] px-[10px] text-[12] leading-[18px] font-[600] flex items-center justify-center"> {data.planTitle} </div>*/}
  {/*      }*/}
  {/*    </div>*/}
  {/*    <div className="px-[42px] flex flex-row items-center ">*/}
  {/*      {data.price &&*/}
  {/*        <div className="flextext-[16px] leading-[24px] font-[700] text-[#5A4BDA] gap-1 mr-[8px]">*/}
  {/*<span>*/}
  {/*₹*/}
  {/*</span>*/}
  {/*          <span>*/}
  {/*{data.price}*/}
  {/*</span>*/}
  {/*        </div>}*/}
  {/*      <div className=" line-through mr-[12px] text-[12px] leading-[18px] font-[500]">*/}
  {/*        {data.postDiscountPrice}*/}
  {/*      </div>*/}
  {/*      {data.discount &&*/}
  {/*        <div className="flex text-[12px] leading-[18px] font-[600] text-[#1B7938] gap-1 mr-[8px]">*/}
  {/*<span>*/}
  {/*{data.discount}%*/}
  {/*</span>*/}
  {/*          <span>*/}
  {/*OFF*/}
  {/*</span>*/}
  {/*        </div>}*/}
  {/*    </div>*/}
  {/*  </div>*/}
  {/*  <div className="w-full h-[260px] flex flex-col justify-between p-[16px]"*/}
    {/*       style={{ backgroundColor: cardColor.bgColor }}>*/}
    {/*    <div className="flex flex-col gap-[8px] overflow-y-scroll scrollbar-hide">*/}
    {/*      {data.meta.map((item, index) => <div key={index} className="flex flex-ro items-center gap-2 ">*/}
    {/*        <div className="h-[24px] w-[24px] bg-white border rounded-[50%] flex items-center justify-center">*/}
    {/*          <Image src={item.icon} className=" h-[18px] w-[18px]" />*/}
    {/*        </div>*/}
    {/*        <div*/}
    {/*          dangerouslySetInnerHTML={{*/}
    {/*            __html: item.text,*/}
    {/*          }} />*/}

    {/*      </div>)}*/}
    {/*    </div>*/}
    {/*    <Button className={'w-full min-h-[40px] mt-[16px]'} onClick={() => {*/}
    {/*    }}*/}
    {/*    >{'View All'}</Button>*/}
    {/*  </div>*/}
  </div>;
};

export default TestPassCard;
