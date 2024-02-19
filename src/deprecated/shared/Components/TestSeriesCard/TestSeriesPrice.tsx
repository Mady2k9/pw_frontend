import Image from '../Atoms/Image/Image';
import Text from '../Atoms/Text/Text';

const TestSeriesPrice = ({
  originalCost,
  updatedCost,
  discount,
  showExploreButton,
}: {
  originalCost: string;
  updatedCost: string;
  discount: string;
  showExploreButton: boolean;
}) => {
  return (
    <div
      className={`${
        showExploreButton ? '' : 'flex-col sm:flex-row'
      } flex   items-center justify-between px-[4px]}`}
    >
      <div className="flex flex-col">
        <div className="flex gap-1 flex-row items-center ">
          <Text
            style={'text-[16px] text-[#5A4BDA] font-[700] leading-[24px]'}
            title={'₹' + updatedCost}
          />
          <Text
            style={' text-[14px] text-[#757575] line-through'}
            title={originalCost}
          />
        </div>
        <Text
          style={`${
            showExploreButton ? 'sm:flex hidden' : ''
          } text-[10px] leading-[16px] text-[#757575] font-[500] font-[#757575]`}
          title={'(FOR FULL COURSE)'}
        />
      </div>

      <div
        className={`${
          showExploreButton ? 'sm:flex hidden' : ''
        } flex flex-row items-center `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="24"
          viewBox="0 0 11 24"
          fill="none"
          className="hidden sm:block"
        >
          <path
            d="M1.07059 12.6562C0.743397 12.2799 0.743397 11.7201 1.07059 11.3438L10.5 0.5L10.5 23.5L1.07059 12.6562Z"
            fill="#DFF1E4"
          />
        </svg>
        <div className=" sm:hidden  ml-[-3px] rounded-[8px] font-semibold gap-1 text-[10px] leading-4 flex bg-[#DFF1E4] text-[#1B7938] p-[6px] flex-row items-center justify-center">
          <Image
            bgImagetitle={'/price.webp'}
            className="w-[12px] h-[12px]  bg-contain  bg-center bg-no-repeat my-[2px] mx-[4px]"
          />
          10% off
        </div>
        <div className="ml-[-3px] hidden  rounded-[8px] font-semibold gap-1 text-[10px] leading-4 sm:flex bg-[#DFF1E4] text-[#1B7938] p-[6px] flex-row items-center justify-center">
          <Image
            bgImagetitle={'/clip.webp'}
            className="w-[12px] h-[12px]  bg-contain  bg-center bg-no-repeat my-[2px] mx-[4px]"
          />
          Discount of 10% applied
        </div>
      </div>
    </div>
  );
};

export default TestSeriesPrice;
