import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import Link from 'next/link';
import { imageToImageUrl, stringToSlug } from '@/lib/utils';
import { ICohortOptions } from '@/api/interfaces/page';
import { useRouter } from 'next/router';

export interface TestCohortSliderProps {
  title: string,
  batches: any[],
  cohort: ICohortOptions,
  showMoreLink?: string
  page_source?: string,
}

export default function TestCohortSlider({ title, batches, cohort, showMoreLink, page_source }: TestCohortSliderProps) {
  const router = useRouter();
  const courseKey = router.query.courseKey as string;
  return <div className={''} id={'short-list-wrapper' + cohort.cohortId}>
    <div className={'container '}>
      <h4 className={'text-xl md:text-3xl font-bold'}>{title}</h4>
    </div>
    <div className={'overflow-x-auto container scrollbar-hide w-full'}>
      <div className={'flex flex-nowrap gap-4 py-4'}>
        {
          batches.slice(0, 3).map((item, index) => {
            console.log(item,'itemshai')
            return <div className={'min-w-[320px] w-full md:w-auto md:flex-1'} key={index}>
              <CommonItemCard exploreLink={`/test-series/${courseKey}`}
                              buyNowLink={'/study/test-series?childUrl=/'}
                              isOnline={!item.modeType}
                              amount={item?.price}
                              discount={item.discount}
                              updatedAmount={item?.postDiscountPrice}
                              meta={item.meta}
                              isNew={item?.label[0]?.name}
                              whatsappLink={`/test-series/${courseKey}/${stringToSlug(cohort.option)}/${item.slug}`}
                              thumbnail={item.imageId ? item.imageId.baseUrl + item.imageId.key : ''}
                              title={item.title}
                              page_source={page_source}
                              batchId={item._id}
                               />
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
