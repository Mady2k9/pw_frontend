import Image from '../Atoms/Image/Image';
import Text from '../Atoms/Text/Text';

const TestSeriesCardInfo = ({
  usedFor,
  startDate,
  endDate,
}: {
  usedFor: string;
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="flex flex-col px-[1px] gap-1.5 my-4 ">
      <div className="flex flex-col gap-[8px] ">
        <div className="flex gap-3 items-center">
          <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
            <img src="/StarTest.webp" className="h-[24px] w-[24px]" />
          </div>
          <Text
            style={'text-[12px] leading-[18px] font-[500]  text-[#1B2124]'}
            title={usedFor}
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
            <img src="/StarTest.webp" className="h-[24px] w-[24px]" />
          </div>
          <div className="text-[12px] leading-[18px] font-[500]  text-[#1B2124]">
            {endDate}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex items-center px-[4px]">
            <img src="/StarTest.webp" className="h-[24px] w-[24px]" />
          </div>
          <div className="text-[12px] leading-[18px] font-[500]  text-[#1B2124]">
            {startDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeriesCardInfo;
