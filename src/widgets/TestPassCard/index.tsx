import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { IOffering, ITestPassData } from '@/api/interfaces/test-series';
import Link from 'next/link';

export interface IColorType {
  bgColor: string;
  borderColor: string;
  icon: { level1: string; level2: string };
}

const TestPassCard = ({ data, color }: {
  data: ITestPassData,
  color: IColorType
}) => {
  return <div
    className={'flex flex-col md:w-[360px] w-[320px] rounded-tl-xl rounded-tr-xl border-2'}
    style={{ borderColor: color.borderColor }}>
   <div
     className={'bg-white border-b-2 h-24  border-dashed border-[#D9DCE1] p-4 pb-6 w-full rounded-tl-xl rounded-tr-xl flex flex-col'}>
     <div className="flex flex-row w-full justify-between">
       <div className="flex flex-row items-center gap-4 ">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
           <g clipPath="url(#clip0_8401_37945)">
             <rect width="28" height="28" rx="5" fill={color.icon.level1} />
             <circle cx="21.3156" cy="5.72188" r="7.8" fill={color.icon.level2} />
             <rect y="15.6016" width="13.52" height="13.52" fill={color.icon.level2} />
           </g>
           <defs>
             <clipPath id="clip0_8401_37945">
               <rect width="28" height="28" rx="5" fill="white" />
             </clipPath>
           </defs>
         </svg>
         <div className=" text-[16px] leading-6 font-bold">{data.title}</div>
       </div>
       {data.planTitle && <div
         className="bg-gradient-to-r from-[#C58F27] to-[#EDB84F] text-white rounded-sm px-[10px] text-[12px] leading-[18px] font-semibold flex items-center justify-center"> {data.planTitle} </div>
       }
     </div>
     <div className="px-[42px] flex flex-row items-center gap-2 ">
       {data.postDiscountPrice &&
         <div className="flex text-[16px] leading-6 font-bold text-[#5A4BDA] gap-1 ">
  <span>
  ₹
  </span>
           <span>
  {data.postDiscountPrice}
  </span>
         </div>}
       <div className=" line-through text-[12px] font-semibold leading-[18px] text-lighter">
         {data.price}
       </div>
       {data.discount >0  &&
         <div className="flex text-[12px] font-semibold leading-[18px] text-[#1B7938] gap-1">
  <span>
  {data.discount }%
  </span>
           <span>
  OFF
  </span>
         </div>}
     </div>
   </div>
   <div className="w-full h-[260px] flex flex-col justify-between p-4"
          style={{ backgroundColor: color.bgColor }}>
       <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hide">
         {data.meta.map((item: IOffering, index: number) => <div key={index} className="flex flex-ro items-center gap-2 ">
           <div className="h-6 w-6 min-w-6 min-h-6  bg-white border rounded-full flex items-center justify-center">
             <Image src={item.icon} className="w-full h-full" />
           </div>
           <div className='text-[12px] text-[#3d3d3d]'
             dangerouslySetInnerHTML={{
               __html: item.text,
             }} />

         </div>)}
       </div>
       <Link href={`/study/test-series?childUrl=%2Ftest-pass%2F${data._id}%2Foverview`} target={'_blank'} className={'w-full '}>
       <Button className={'w-[100%] min-h-[40px] mt-[16px]'} onClick={() => {
       }}
        >{'Get Pass'}</Button>
        </Link>
      </div>
      
  </div>;
};

export default TestPassCard;
