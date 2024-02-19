import Button from '../Atoms/Button/Button';
import Discount from '../../../assets/Images/Discount.webp';
import Image from '../Atoms/Image/Image';
import { formatCurrency } from '@/deprecated/shared/Components/BatchCard/BatchPrice';
const DetailsBatchAction = ({
  originalCost,
  updatedCost,
  discount,
  buyNowSlug,
}: {
  originalCost: number;
  updatedCost: number;
  discount: number;
  buyNowSlug: string;
}) => {
  return (
    <div className="flex flex-row  items-center justify-between mt-[20px] w-[100%">
      <div className="xl:hidden block">
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-1 flex-row items-center ">
            {updatedCost && (
              <div
                className={
                  'text-[16px] text-[#5A4BDA] font-[700] leading-[24px]'
                }
              >
                {' '}
                {formatCurrency(updatedCost)}{' '}
              </div>
            )}
            {discount > 0 && (
              <div className={' text-[14px] text-[#757575] line-through'}>
                {formatCurrency(originalCost)}
              </div>
            )}
          </div>
          {discount > 0 && (
            <div className="px-[4px] h-[20px] bg-[#E3F4E8] rounded-[6px] text-[10px] leading-[16px] font-[700] text-[#0C5939] flex flex-row items-center justify-center gap-1">
              <Image
                bgImagetitle={`${Discount.src}`}
                className={
                  'bg-center bg-cover bg-no-repeat w-[16px] h-[16px] rounded-full'
                }
              />
              <div
                className={'whitespace-nowrap'}
              >{`Discount of ${discount}% OFF`}</div>
            </div>
          )}
        </div>
      </div>
      <a
        href={`/study/batches/${buyNowSlug}/batch-overview`}
        className="w-full flex justify-end"
      >
        <Button
          className={
            ' border border-[#5A4BDA] hover:bg-[#4437B8] font-semibold bg-[#5A4BDA] text-[#FFFFFF] py-[10px] xl:w-[100%] w-[160px] px-5 rounded-md'
          }
          title={'Buy Now'}
        />
      </a>
    </div>
  );
};

export default DetailsBatchAction;
