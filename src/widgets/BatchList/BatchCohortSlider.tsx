import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useMemo } from 'react';
import Link from 'next/link';
import { imageToImageUrl } from '@/lib/utils';
import { ICohortOptions } from '@/api/interfaces/page';

export interface BatchCohortSliderProps {
  title: string,
  batches: any[],
  cohort: ICohortOptions,
  showMoreLink?: string
  page_source?: string,
}

export default function BatchCohortSlider({ title, batches, cohort, showMoreLink, page_source }: BatchCohortSliderProps) {
  return <div className={''} id={'short-list-wrapper' + cohort.cohortId}>
    <div className={'container '}>
      <h4 className={'text-xl md:text-3xl font-bold'}>{title}</h4>
    </div>
    <div className={'overflow-x-auto container scrollbar-hide w-full'}>
      <div className={'flex flex-nowrap gap-4 py-4 pr-4'}>
        {
          batches.slice(0, 3).map((item, index) => {
            return <div className={'min-w-[320px] w-full md:w-auto md:flex-1'} key={index}>
              <CommonItemCard exploreLink={item.seoSlug} buyNowLink={`/study/batches/${item.slug}/batch-overview`}
                              isOnline={!item.isPathshala && !item.config?.isVidyapeeth}
                              usedFor={item.byName}
                              amount={item.fee?.amount}
                              discount={item.fee?.discount}
                              updatedAmount={item.fee?.total}
                              language={item.language}
                              startDate={item.startDate}
                              endDate={item.endDate}
                              meta={item.meta}
                              isNew={item.markedAsNew}
                              whatsappLink={item.seoSlug}
                              thumbnail={imageToImageUrl(item.previewImage) || ''} title={item.name}
                              page_source={page_source} />
            </div>;
          })
        }
      </div>
    </div>
    <div className={'container'}>
      {
        showMoreLink && <Link href={showMoreLink}>
          <Button variant={'secondary'} className={'text-primary mt-2 w-full'}>
            View All {cohort.option} Batches <span
            className={'hidden md:block text-3xl pl-1 text-primary font-thin'}> &rsaquo;</span>
          </Button>
        </Link>
      }
    </div>
  </div>;
}
