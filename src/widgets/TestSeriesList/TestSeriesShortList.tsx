import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import FAQ from '@/widgets/FAQ';
import { useRouter } from 'next/router';
import { ICohortOptions } from '@/api/interfaces/page';
import { cn, jsonToQueryString, stringToBase64, stringToSlug, uniqueBy } from '@/lib/utils';
import { ITestSeriesCategory } from '@/api/interfaces/test-series';
import TestSeriesCard from '@/widgets/CommonItemCard/TestSeriesCard';
import { useEffect, useState } from 'react';
import { BatchNoDataGrid } from '../BatchList/BatchNoDataGrid';
import { BatchLoadingGrid } from '../BatchList/BatchLoadingGrid';
import { fetchTestSeries, getTestListSnapshot } from '@/api/page-apis';


export interface BatchShortListProps {
  title?: string,
  cohort: ICohortOptions,
  testSeries: ITestSeriesCategory[],
  showMoreLink?: string,
  page_source?: string,
}

export default function TestSeriesShortList({
                                              title,
                                              cohort,
                                              testSeries,
                                              showMoreLink,
                                              page_source,
                                            }: BatchShortListProps) {
  const router = useRouter();
  const courseKey = router.query.courseKey as string;
  const [card, setCard] = useState(testSeries?.slice(0,6) || []);
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(testSeries?.length>6);
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

  const getCard = async () => {
    let query: any = {
      cohortId: cohort.cohortId,
      page: page,
    };
    setLoading(true);
    setPage(page+1)
    fetchTestSeries(query).then((d) => {
      if (!d.data.length || d.data.length < 6) {
        setShowLoadMore(false);
      } else {
        setShowLoadMore(true);
      }
      setCard((prev) => [...prev, ...d.data]);
    }).finally(() => {
      setLoading(false);
    });
  };
useEffect(()=>setCard(testSeries?.slice(0,6) || []) , [testSeries] )
  return <div className={''}>
    <h4 className={'container text-xl md:text-3xl  font-bold'}>{title}</h4>
    <div className={'container w-full sm:pl-1.5'}>
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start lg:grid-cols-3 gap-6 md:px-2 w-full')}>
        {
          card?.map((item, index) => {
            return <div key={index} className={' max-w-[360px] w-full min-w-[300px]'}>
              <TestSeriesCard
              exploreLink={`/test-series/${courseKey}/${stringToSlug(cohort.option)}/${item?.slug}`}
              buyNowLink={`${baseUrl}/study/auth?encoded_redirect_url=${stringToBase64(`${baseUrl}/test-series?childUrl=/test-series/${item.categoryId}/mode/${item.categoryModeId}`)}`}
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
            </div>;
          })
        }
      </div>
    </div>
    {
      showMoreLink && <div className={'container'}>
        <Button variant={'secondary'} className={'text-primary mt-2 w-full'}>
          View All Test Series <span className={'hidden md:block text-3xl pl-1 text-primary font-thin'}> &rsaquo;</span>
        </Button>
      </div>
    }
     {
      testSeries?.length === 0 && !loading && <BatchNoDataGrid onReset={() => {
        router.replace(router.asPath?.split('?')[0]);
      }} />
    }

   {
      (!testSeries || loading )&& <div className={'container'}>
        <BatchLoadingGrid />
      </div>
    }

    {
      showLoadMore && <div className={'flex items-center justify-center mt-6 md:mt-8'}>
        <Button size={'lg'} loading={loading} onClick={() => {
          getCard();
        }} variant={'secondary'}>Load More Batches</Button>
      </div>
    }
  </div>;
}
