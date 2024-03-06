import React from 'react';
function CenterInformations({
  color,
  details,
}: {
  color: string;
  details: string;
}) {
  return (
    <>
      <div className="flex  items-center gap-[6px]">
        <div
          className="h-4 w-4 md:h-5 md:w-5"
          style={{ backgroundColor: color }}
        ></div>
        <div className="font-[600] md:text-[16px] md:leading-[24px] text-[14px] leading-[22px] text-[#1B2124]]">
          {details}
        </div>
      </div>
    </>
  );
}

export default CenterInformations;
