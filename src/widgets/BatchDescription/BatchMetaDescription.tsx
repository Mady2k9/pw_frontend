import { IBatch } from '@/api/interfaces/batch';
import pointerImage1 from '@/assets/images/Hero-section-Pointer-1.webp';
import pointerImage2 from '@/assets/images/Hero-Section-Pointer-2.webp';
import pointerImage3 from '@/assets/images/Hero-Section-Pointer-3.webp';
import { Image } from '@/components/ui/image';
import formatDate from '@/lib/date.utils';
import { useMemo } from 'react';

export default function BatchMetaDescription({ batch }: { batch: IBatch }) {
  const features = useMemo(() => {
    return batch.meta
      ?.filter((f: any) => f.value)
      .slice(0, 2);
  }, [batch.meta]);
  return <div className="flex flex-col gap-[12px] text-white">
    {batch.byName && (
      <div className="flex flex-row items-center   gap-2">
        <Image
          src={`${pointerImage1.src}`}
          className={
            'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] h-6 w-6'
          }
        />
        <div className="sm:text-[16px] text-white sm:leading-[24px] text-xs font-[500] ">
          {batch.byName}
        </div>
      </div>
    )}
    {
      features?.length > 0 && <div className="flex flex-row items-center  gap-2">
        <Image
          src={`${pointerImage2.src}`}
          className={
            'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] w-6 h-6'
          }
        />
        <div className="text-xs sm:text-[16px]  text-white flex-nowrap font-[500] sm:leading-[24px]">
          {
            features
              ?.map((data: any, i: number) => {
                return (
                  <span className={'text-white'} key={i}>
                      {data.value
                        ? `${data.value} ${data.key?.replace(
                          /_/g,
                          ' ',
                        )}`.toLowerCase()
                        : ''}
                    ,{' '}
                    </span>
                );
              })}{' '}
          & More
        </div>
      </div>
    }
    <div className="flex flex-row  items-center  gap-2">
      <Image
        src={`${pointerImage3.src}`}
        className={
          'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] w-6 h-6 '
        }
      />
      <div className="text-xs  text-white sm:text-[16px] font-[500] sm:leading-[24px]">
        Starts on {formatDate(batch.startDate)}
      </div>
    </div>
  </div>;
}
