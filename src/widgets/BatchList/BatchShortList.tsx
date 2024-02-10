import {Button} from "@/components/ui/button";
import BatchCard from "@/widgets/BatchCard";

export interface BatchShortListProps {
    title: string,
    batches: any[],
    showMoreLink?: string
}

export default function BatchShortList({title, batches, showMoreLink}: BatchShortListProps) {
    return <div className={''}>
        <h4 className={'text-xl md:text-3xl  font-bold'}>{title}</h4>
        <div className={'overflow-y-auto w-full pl-1.5'}>
            <div className={'flex flex-nowrap gap-4 py-4'}>
                {
                    [1, 2, 4].map((item, index) => {
                        return <div key={index} className={' max-w-[360px] w-full min-w-[300px]'}>
                            <BatchCard exploreLink={'/'} buyNowLink={'/'} isOnline={index != 1} key={index}
                                       thumbnail={''} title={'Lakshaya JEE Mains & Advanced 2023'}/>
                        </div>
                    })
                }
            </div>
        </div>
        {
            showMoreLink && <Button variant={'secondary'} className={'text-primary mt-2 w-full'}>
                View All Batches <span className={'hidden md:block text-3xl pl-1 text-primary font-thin'}> &rsaquo;</span>
            </Button>
        }
    </div>
}
