import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import FAQ from '@/widgets/FAQ';
import { ITestPassData } from '@/api/interfaces/test-series';
import { imageToImageUrl, stringToSlug } from '@/lib/utils';
import Link from 'next/link';
import TestPassCard from '@/widgets/TestPassCard';

export interface TestPassShortListProps {
  title: string,
  items: ITestPassData[],
  showMoreLink?: string,
  page_source?: string,
}

export default function TestPassShortList({ title, items, showMoreLink, page_source }: TestPassShortListProps) {
  return <div className={''} id={'short-list-wrapper'}>
    <div className={'container '}>
      <h4 className={'text-xl md:text-3xl font-bold'}>{title}</h4>
    </div>
    <div className={'overflow-x-auto container scrollbar-hide w-full'}>
      <div className={'flex flex-nowrap gap-4 py-4'}>
        {/* {
          items?.slice(0, 3).map((item, index) => {
            return <div className={'min-w-[320px] w-full md:w-auto md:flex-1'} key={index}>
              <TestPassCard data={item} />
            </div>;
          })
        } */}
      </div>
    </div>
    <div className={'container'}>
      {
        showMoreLink && <Link href={showMoreLink || ''}>
          <Button variant={'secondary'} className={'text-primary mt-2 w-full'}>
            View All Test Pass <span
            className={'hidden md:block text-3xl pl-1 text-primary font-thin'}> &rsaquo;</span>
          </Button>
        </Link>
      }
    </div>
  </div>;
}
