import {Button} from "@/components/ui/button";
import CommonItemCard from "../CommonItemCard";
import FAQ from '@/widgets/FAQ';

export interface BatchShortListProps {
    title: string,
    testSeries: any[],
    showMoreLink?: string,
    page_source?: string,
}

export default function TestSeriesShortList({title, testSeries, showMoreLink, page_source}: BatchShortListProps) {
    return <div className={''}>
        <h4 className={'container text-xl md:text-3xl  font-bold'}>{title}</h4>
        <div className={'container overflow-y-auto w-full pl-1.5'}>
            <div className={'flex flex-nowrap gap-4 py-4'}>
                {
                    [1, 2, 4].map((item, index) => {
                        return <div key={index} className={' max-w-[360px] w-full min-w-[300px]'}>
                            <CommonItemCard exploreLink={'/'} buyNowLink={'/'} isOnline={index != 1} key={index}
                                       thumbnail={''} title={'Lakshaya JEE Mains & Advanced 2023'} page_source={page_source}/>
                        </div>
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
</div>
}
