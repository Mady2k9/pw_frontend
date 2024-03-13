import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import Link from 'next/link';
import { imageToImageUrl, padRightArray, stringToBase64, stringToSlug } from '@/lib/utils';
import { ICohortOptions } from '@/api/interfaces/page';
import { useRouter } from 'next/router';
import TestSeriesCard from '@/widgets/CommonItemCard/TestSeriesCard';
import { ITestSeriesCategory } from '@/api/interfaces/test-series';

export interface TestCohortSliderProps {
  title: string,
  testSeries: ITestSeriesCategory[],
  cohort: ICohortOptions,
  showMoreLink?: string
  page_source: string,
}

export default function TestCohortSlider({
                                           title,
                                           testSeries,
                                           cohort,
                                           showMoreLink,
                                           page_source,
                                         }: TestCohortSliderProps) {
  const router = useRouter();
  const courseKey = router.query.courseKey as string;
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

  return <div className={''} id={'short-list-wrapper' + cohort.cohortId}>
    <div className={'container '}>
      <h4 className={'text-xl md:text-[32px] leading-[48px] font-bold'}>{title}</h4>
    </div>
    <div className={'overflow-x-auto container scrollbar-hide w-full'}>
      <div className={'flex flex-nowrap gap-4 py-4'}>
        {
          padRightArray(testSeries.slice(0, 3), 3, null).map((item, index) => {            
            return <div className={'min-w-[320px] w-full md:w-auto md:flex-1'} key={index}>
              {
                item && <TestSeriesCard
                exploreLink={`/test-series/${courseKey}/${stringToSlug(cohort.option)}/${item?.slug}`}
                  buyNowLink={`${baseUrl}/study/auth?encoded_redirect_url=${stringToBase64(`${baseUrl}/test-series?childUrl=/test-series/${item?.categoryId}/mode/${item?.categoryModeId}`)}`}
                  mode={item.modeType}
                  amount={item?.price}
                  discount={item.discount}
                  updatedAmount={item?.postDiscountPrice}
                  meta={item.meta}
                  label={item?.label[0]?.name}
                  whatsappLink={`/test-series/${courseKey}/${stringToSlug(cohort.option)}/${item.slug}`}
                  thumbnail={item.imageId ? item.imageId.baseUrl + item.imageId.key : ''}
                  title={item.title}
                  page_source={page_source}
                  testSeriesId={item.categoryModeId || ''}
                  categoryId={item.categoryId}
                  cohortOption={cohort.option}
                />
              }
            </div>;
          })
        }
      </div>
    </div>
    <div className={'container'}>
      {
        showMoreLink && <Link href={showMoreLink}>
          <Button variant={'secondary'} className={'text-primary mt-2 w-full text-sm sm:text-base'}>
            View All {cohort.option} testSeries <span
            className={'hidden md:block text-3xl pl-1 text-primary font-thin'}> &rsaquo;</span>
          </Button>
        </Link>
      }
    </div>
  </div>;
}
