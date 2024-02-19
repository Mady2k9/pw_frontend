import Image from '../Atoms/Image/Image';
import Text from '../Atoms/Text/Text';
import DiscountIcon from '../../../assets/Images/clip.webp';

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    // Optional: you can specify these options to control the display further
    minimumFractionDigits: 0, // Minimum number of digits after the decimal point
    maximumFractionDigits: 0, // Maximum number of digits after the decimal point
  }).format(amount);
};

export const formatDate = (date: string) => {
  const inputDate = new Date(date);
  const day = inputDate.getDate();
  const month = inputDate.toLocaleString('en-US', { month: 'long' });
  const year = inputDate.getFullYear();
  return `${month} ${day}, ${year}`;
};
const BatchPrice = ({
  originalCost,
  updatedCost,
  discount,
}: {
  originalCost: number;
  updatedCost: number;
  discount: number;
}) => {
  return (
    <div className="flex flex-row items-center justify-between px-[4px]">
      <div className="flex flex-col">
        {
          <div className="flex gap-1 flex-row items-center ">
            {updatedCost && updatedCost > 0 ? (
              <Text
                style={'text-[16px] text-[#5A4BDA] font-[700] leading-[24px]'}
                title={formatCurrency(updatedCost)}
              />
            ) : (
              <Text
                style={'text-[16px] text-[#5A4BDA] font-[700] leading-[24px]'}
                title={'FREE'}
              />
            )}
            {discount > 0 && (
              <Text
                style={' text-[14px] text-[#757575] line-through'}
                title={formatCurrency(originalCost)}
              />
            )}
          </div>
        }
        <Text
          style={
            'text-[10px] leading-[16px] text-[#757575] font-[500] font-[#757575]'
          }
          title={'(FOR FULL COURSE)'}
        />
      </div>
      {discount > 0 && (
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="24"
            viewBox="0 0 11 24"
            fill="none"
          >
            <path
              d="M1.07059 12.6562C0.743397 12.2799 0.743397 11.7201 1.07059 11.3438L10.5 0.5L10.5 23.5L1.07059 12.6562Z"
              fill="#DFF1E4"
            />
          </svg>
          <div className="ml-[-3px] rounded-[8px] font-semibold gap-1 text-[10px] flex bg-[#DFF1E4] text-[#1B7938] p-[6px] flex-row items-center justify-center">
            <Image
              bgImagetitle={DiscountIcon.src}
              className="w-[12px] h-[12px]  bg-contain  bg-center bg-no-repeat my-[2px] mx-[4px]"
            />
            {`Discount of ${discount}% OFF`}
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchPrice;
