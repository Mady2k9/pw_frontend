import {Button} from "@/components/ui/button";
import CommonItemCard from "../CommonItemCard";
import {useEffect, useState} from "react";
import {cn, imageToImageUrl, uniqueBy} from "@/lib/utils";
import {ICohortOptions} from "@/api/interfaces/page";
import {useRouter} from "next/router";
import {fetchBatches} from "@/api/page-apis";
import {IBatch} from "@/api/interfaces/batch";
import {BatchLoadingGrid} from "@/widgets/BatchList/BatchLoadingGrid";
import {scrollToElement} from "@/lib/dom.utils";

export interface BatchGridListProps {
    batches: IBatch[],
    cohort: ICohortOptions,
}

export default function BatchGridList({batches: _batches, cohort}: BatchGridListProps) {
    const [batches, setBatches] = useState(_batches || []);
    const [loading, setLoading] = useState(false);
    const [showLoadMore, setShowLoadMore] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const getBatches = async (routerQuery: any, reset: boolean) => {
        const query: any = {
            cohortIds: cohort.cohortId,
        }
        if (routerQuery.online === 'true') {
            query['online'] = 'true'
        }
        if (routerQuery.offline === 'true') {
            query['offline'] = 'true'
        }
        if (routerQuery.new === 'true') {
            query['new'] = 'true'
        }
        if (routerQuery.languages?.length) {
            query['languages'] = routerQuery.languages
        }
        if (routerQuery.pricing?.length) {
            query['pricing'] = routerQuery.pricing
        }
        setLoading(true);
        const start = reset ? 0 : batches.length;

        if (reset) {
            setBatches([])
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
        query.start = start;
        fetchBatches(query).then((d) => {
            if (!d.data.length) {
                setShowLoadMore(false);
            } else {
                setShowLoadMore(true);
            }
            setBatches((prev) => uniqueBy([...prev, ...d.data], '_id'));
        }).catch(()=>{
            setShowLoadMore(false);
        }).finally(() => {
            setLoading(false)
        })
    };
    useEffect(() => {
        getBatches(router.query, true)
    }, [cohort.cohortId, router.query, loaded]);
    return <div className={''} id={'grid-list-wrapper' + cohort.cohortId}>
        <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 -mx-2 px-2 w-full')}>
            {
                batches.map((item, index) => {
                    return <CommonItemCard exploreLink={item.seoSlug}
                                           buyNowLink={`/study/batches/${item.slug}/batch-overview`}
                                           isOnline={!item.isPathshala && !item.config?.isVidyapeeth}
                                           key={index}
                                           usedFor={item.byName}
                                           meta={item.meta}
                                           startDate={item.startDate}
                                           endDate={item.endDate}
                                           language={item.language}
                                           isNew={item.markedAsNew}
                                           whatsappLink={item.seoSlug}
                                           thumbnail={imageToImageUrl(item.previewImage) || ''} title={item.name}/>
                })
            }
        </div>
        {
            loading && <>
                <BatchLoadingGrid/>
            </>
        }

        {
            showLoadMore && <div className={'flex items-center justify-center mt-6 md:mt-8'}>
                <Button loading={loading} onClick={() => {
                    getBatches(router.query, false)
                }} variant={'secondary'}>Load More Batches</Button>
            </div>
        }
    </div>
}
