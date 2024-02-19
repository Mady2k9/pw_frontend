import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import CommaIcon from '../../../../assets/Images/comma.webp';

export interface studentLoveCardProps {
  studentName: string;
  exam: string;
  rank: string;
  testimonial: string;
  icon: string;
}

const StudentLoveCard: React.FC<studentLoveCardProps> = ({
  studentName,
  exam,
  rank,
  testimonial,
  icon,
}) => {
  return (
    <div
      style={{ boxShadow: '0px 1px 8px 0px #00000014' }}
      className=" bg-white justify-between sm:min-w-[370px] min-h-[304px] min-w-[286px] p-4 sm:p-6 sm:gap-y-[18px] gap-y-[12px] flex flex-col rounded "
    >
      <div>
        <Image
          bgImagetitle={`${CommaIcon.src}`}
          className={
            'mb-2.5 sm:mb-3.5 h-8 w-10 bg-center bg-no-repeat bg-contain '
          }
        />

        <div className="text-[#3D3D3D] font-medium sm:text-base text-sm">
          {testimonial}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="border-2 p-1 border-[#D9DCE1] rounded-full">
          <Image
            bgImagetitle={icon}
            className={
              'h-9 w-9 bg-center rounded-full overflow-hidden bg-no-repeat bg-contain'
            }
          />
        </div>
        <div>
          <div className="text-base text-[#1B2124] font-bold">
            {studentName}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#5A4BDA] text-xs font-semibold border-r-3 border-black ">
              {rank}
            </div>
            <hr className="border h-4" />
            <div className="text-[#5A4BDA] text-xs font-semibold">{exam}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StudentLoveCard);
