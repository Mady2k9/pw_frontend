const TestPass = ({testPassCardData}:{testPassCardData: any}) =>{
    return <div 
    className={'flex flex-col min-w-[360px] rounded-tl-[12px] rounded-tr-[12px] border-[#DDEBF8] border-[2px]'}>
 <div className={'bg-white border-b-2  border-dashed border-[#D9DCE1] p-[16px] pb-[24px] w-full rounded-tl-[12px] rounded-tr-[12px] flex flex-col'}>
  <div className="flex flex-row w-full justify-between">
 <div className="flex flex-row items-center gap-[16px] ">
 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<g clip-path="url(#clip0_8401_37945)">
<rect width="26" height="26" rx="5" fill="#81B6E4"/>
<circle cx="21.3156" cy="5.72188" r="7.8" fill="#BCD8F1"/>
<rect y="15.6016" width="13.52" height="13.52" fill="#BCD8F1"/>
</g>
<defs>
<clipPath id="clip0_8401_37945">
<rect width="26" height="26" rx="5" fill="white"/>
</clipPath>
</defs>
</svg>
<div className="text-[16px] leading-[24px] font-[700]"> SSC + Banking Pass</div>
 </div>
<div className="bg-gradient-to-r from-[#C58F27] to-[#EDB84F] text-white rounded-[4px] px-[10px] text-[12] leading-[18px] font-[600] flex items-center justify-center"> 1 year </div>
  </div>
<div className="px-[42px] flex flex-row items-center ">
   <div className="flextext-[16px] leading-[24px] font-[700] text-[#5A4BDA] gap-1 mr-[8px]">
  <span >
  ₹
  </span>
  <span>
    24000
  </span>
   </div>
   <div className=" line-through mr-[12px] text-[12px] leading-[18px] font-[500]">
8500
   </div>
   <div className="flex text-[12px] leading-[18px] font-[600] text-[#1B7938] gap-1 mr-[8px]">
  <span >
  10%
  </span>
  <span>
  OFF
  </span>
   </div>
</div>
 </div>
 <div className="bg-[#DDEBF8] w-full h-[260px] p-[16px]">

 </div>
</div>
}

export default TestPass;
