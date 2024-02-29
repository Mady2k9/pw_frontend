import { Button } from '@/components/ui/button';
import CommonItemCard from '../CommonItemCard';
import { useEffect, useState } from 'react';
import { cn, imageToImageUrl, jsonToQueryString, stringToSlug, uniqueBy } from '@/lib/utils';
import { ICohortOptions } from '@/api/interfaces/page';
import { useRouter } from 'next/router';
import { fetchBatches } from '@/api/page-apis';
import { IBatch } from '@/api/interfaces/batch';
import { BatchLoadingGrid } from '@/widgets/BatchList/BatchLoadingGrid';
import { scrollToElement } from '@/lib/dom.utils';
import { BatchNoDataGrid } from '@/widgets/BatchList/BatchNoDataGrid';
import { extractFilters } from '@/lib/batch-list-server-side-props';

export interface BatchGridListProps {
  batches: IBatch[],
  cohort: ICohortOptions,
  filteredBatches?: IBatch[]
  page_source?:string;
}

export default function BatchGridList({ batches: _batches, cohort, filteredBatches, page_source }: BatchGridListProps) {
  const [batches, setBatches] = useState(filteredBatches || _batches || []);
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const router = useRouter();
  const courseKey = router.query.courseKey as string;

  const [queryKey, setQueryKey] = useState(jsonToQueryString(router.query));
  const getBatches = async (routerQuery: any, reset: boolean = false, clean: boolean = false) => {
    let query: any = {
      cohortIds: cohort.cohortId,
    };
    if (!clean) {
      query = { ...query, ...extractFilters(routerQuery) };
    }
    setLoading(true);
    const start = reset ? 0 : batches.length - 1;

    if (reset) {
      setBatches([]);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    query.start = start;
    fetchBatches(query).then((d) => {
      if (!d.data.length || d.data.length < 6) {
        setShowLoadMore(false);
      } else {
        setShowLoadMore(true);
      }
      setBatches((prev) => uniqueBy([...prev, ...d.data], '_id'));

    }).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    if (queryKey !== jsonToQueryString(router.query) && cohort.cohortId) {
      getBatches(router.query, true);
      setQueryKey(jsonToQueryString(router.query));
    }
  }, [cohort.cohortId, router.query, queryKey]);
  return <div className={'container'} id={'grid-list-wrapper' + cohort.cohortId}>
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:px-2 w-full')}>
      {
        batches.map((item, index) => {
          return  <CommonItemCard exploreLink={item.seoSlug}
                                 buyNowLink={`/study/batches/${item.slug}/batch-overview`}
                                 isOnline={!item.isPathshala && !item.config?.isVidyapeeth}
                                 key={index}
                                 usedFor={item.byName}
                                 meta={item.meta}
                                 amount={item.fee?.amount}
                                 discount={item.fee?.discount}
                                 updatedAmount={item.fee?.total}
                                 startDate={item.startDate}
                                 endDate={item.endDate}
                                 language={item.language}
                                 isNew={item.markedAsNew}
                                 whatsappLink={item.seoSlug}
                                 thumbnail={imageToImageUrl(item.previewImage) || ''} title={item.name} 
                                 page_source={page_source}
                                 batchId={item._id}/>
                                
        })
      }
      
    </div>
    {
      batches.length === 0 && !loading && <BatchNoDataGrid onReset={() => {
        router.replace(router.asPath?.split('?')[0]);
      }} />
    }
    {
      loading && <>
        <BatchLoadingGrid />
      </>
    }

    {
      showLoadMore && <div className={'flex items-center justify-center mt-6 md:mt-8'}>
        <Button size={'lg'} loading={loading} onClick={() => {
          getBatches(router.query, false);
        }} variant={'secondary'}>Load More Batches</Button>
      </div>
    }
  </div>;
}
