import { useRouter } from 'next/router';
import { ICohortOptions } from '@/api/interfaces/page';
import { cn } from '@/lib/utils';
import { ITestPassData } from '@/api/interfaces/test-series';
import { useEffect, useState } from 'react';
import { BatchNoDataGrid } from '../BatchList/BatchNoDataGrid';
import { BatchLoadingGrid } from '../BatchList/BatchLoadingGrid';
import TestPassCard from '../TestPassCard';
import { CardColors } from './TestPassCardColors';

export interface TestPassListProps {
  title?: string,
  cohort: ICohortOptions,
  testPass: ITestPassData[],
  showMoreLink?: string,
  page_source: string,
  testPassCount?: number;
}

export default function TestPassList({
                                              testPass,
                                              testPassCount,
                                            }: TestPassListProps) {
  const router = useRouter();
  const [card, setCard] = useState(testPass);
  const [loading, setLoading] = useState(false);
useEffect(()=>{setCard(testPass?.slice(0,6) || []);
   setLoading(false);
} , [testPass] )
  return <div className={''}>
  {testPassCount &&   <div className={'container text-[16px] font-medium pb-6 text-lighter'}><span className={''}>Showing <b
      className={'text-headings'}>‘{testPassCount}’</b> Total Test Passes</span></div>}
    <div className={'container w-full sm:pl-1.5'}>

    <div className={cn('grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start lg:grid-cols-3 gap-4 md:gap-6 md:px-2 w-full')}>
        {
          card?.map((item, index) => {
            return <div key={index} className={' max-w-[360px] w-full min-w-[300px]'}>
             <TestPassCard data={item} color={CardColors[index % 3]} />
            </div>;
          })
        }
      </div>
    </div>
     {
      testPass?.length === 0 && !loading && <BatchNoDataGrid onReset={() => {
        router.replace(router.asPath?.split('?')[0]);
      }} />
    }
   {
      (!testPass || loading )&& <div className={'container'}>
        <BatchLoadingGrid />
      </div>
    }
  </div>;
}
