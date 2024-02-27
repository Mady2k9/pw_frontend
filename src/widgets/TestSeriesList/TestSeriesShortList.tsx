import {Button} from "@/components/ui/button";
import CommonItemCard from "../CommonItemCard";
import FAQ from '@/widgets/FAQ';

export interface BatchShortListProps {
    title?: string,
    testSeries: any[],
    showMoreLink?: string,
    page_source?: string,
}

export default function TestSeriesShortList({title, testSeries, showMoreLink, page_source}: BatchShortListProps) {
    console.log(testSeries,'propssss');
    
    return <div className={''}>
        <h4 className={'container text-xl md:text-3xl  font-bold'}>{title}</h4>
        <div className={'container overflow-y-auto w-full pl-1.5'}>
            <div className={'flex flex-nowrap gap-4 py-4'}>
                {
                    testSeries?.slice(0, 3).map((item, index) => {
                        console.log(item,'item')
                        return <div key={index} className={' max-w-[360px] w-full min-w-[300px]'}>
                            <CommonItemCard exploreLink={'/test-series/iit-jee'} buyNowLink={'/'} isOnline={item.modeType} key={index}
                                       thumbnail={item.imageId ? item.imageId.baseUrl + item.imageId.key : ''} title={item.name} page_source={page_source} meta={item.meta} 
                                       discount={item.discount} amount={item.price} updatedAmount={item.postDiscountPrice} whatsappLink={'/study/test-series?childUrl=%2F'}
                                        />
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
