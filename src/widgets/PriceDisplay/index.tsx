import { cn, Currency, formatCurrency, formatNumber } from '@/lib/utils';
import Image from 'next/image';
import DiscountImage from '@/assets/icons/discount.webp';

interface PriceDisplayProps {
  amount?: number;
  discount?: number;
  total?: number;
  compact?: boolean;
  currency?: Currency;
}

export default function PriceDisplay({ currency, compact, total, discount, amount }: PriceDisplayProps) {
  amount = amount || 0;
  discount = discount || 0;
  total = total || amount;
  currency = currency || 'INR';
  return <div className={cn('flex items-center justify-between w-full', {
    'flex-col items-start gap-1': compact,
  })}>
    <div className={'flex items-center'}>
      {
        <div className={'flex gap-1  flex-row items-center font-semibold text-primary'}>
          {total ? formatCurrency(total, currency) : 'FREE'}
        </div>
      }
      {
        discount > 0 &&
        <div className={'flex gap-1 text-sm pl-2 flex-row items-center font-medium text-zinc-500 line-through'}>
          {amount && formatCurrency(amount, currency)}
        </div>
      }

    </div>
    {
      discount > 0 && <>
        {compact ? <div
          className={'bg-[#DFF1E4] flex space-x-1.5 text-xs px-2.5 py-1 rounded-md font-semibold'}>
          <Image src={DiscountImage.src} alt={'Discount'} width={13} height={13} />
          <span className={'whitespace-nowrap text-xs text-[#1B7938]'}>{formatNumber(discount)}% Off</span>
        </div> : <div className={'flex'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="28"
            className={'-mr-[3px]'}
            viewBox="0 0 11 24"
            fill="none"
          >
            <path
              d="M1.07059 12.6562C0.743397 12.2799 0.743397 11.7201 1.07059 11.3438L10.5 0.5L10.5 23.5L1.07059 12.6562Z"
              fill="#DFF1E4"
            />
          </svg>

         {discount > 0  && <div
            className={'bg-[#DFF1E4]  flex space-x-1.5 text-xs px-2.5 py-1.5 rounded font-semibold'}>
            <Image src={DiscountImage.src} alt={'Discount'} width={14} height={15} />
            <span className={'whitespace-nowrap text-[#1B7938]'}>Discount of {formatNumber(discount)}% applied</span>
          </div>}
        </div>}
      </>
    }
  </div>;
}
