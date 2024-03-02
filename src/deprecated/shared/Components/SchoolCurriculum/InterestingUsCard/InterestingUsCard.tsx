import React from 'react';
import { Image } from '@/components/ui/image';

function InterestingUsCard({ data }: { data: { image: string, heading: string, subheading: string } }) {
  return (
    <div className='flex flex-col items-center p-4 gap-4 md:w-[360px] w-[90%] justify-center  border border-gray-300 rounded-md bg-white shadow-md'>
      <Image src={data.image} alt='imagein' className='w-[80px] h-[80px]' />
      <div>
        <div className='font-bold text-lg'>{data.heading}</div>
        <div className='font-medium text-base mt-2'>{data.subheading}</div>
      </div>
    </div>
  )
}

export default InterestingUsCard;
