import TestCard from "@/widgets/TestCard";
import {Button} from "@/components/ui/button";
import {ChevronDownIcon} from "lucide-react";
import {useState} from "react";
import {scrollToElement} from "@/lib/dom.utils";
import {cn} from "@/lib/utils";

export default function TestSeriesDetailsTestList({testData, url}:{testData:any, url:string}) {
    const [showAll, setShowAll] = useState(false);
    return <div className={'card-shadow rounded-lg p-4 sm:p-6 flex flex-col gap-4 md:gap-6'} id={'Tests-List'}>
        <h2 className={'text-xl md:text-[32px] leading-[48px] font-bold'}>Tests</h2>
        <div className={'flex flex-col gap-4'}>
            {
                (showAll ? testData?.data :  testData?.data?.slice(0, 2))?.map((test:any, index:number) => {
                    return <TestCard key={index} {...test} url={url} />
                })
            }
        </div>
        {
            testData?.data?.length <= 2 ? null :
                <Button variant={'secondary'} onClick={() => {
                    scrollToElement(document.getElementById('Tests-List')!);
                    setShowAll(!showAll);

                }}> <ChevronDownIcon
                    className={cn('w-5 h-5 stroke-primary mr-2', {
                        'rotate-180': showAll
                    })}/> {showAll? 'View Less Tests' : 'View More Tests'}
                    ({testData?.data?.length - 2})</Button>
        }
    </div>;
}
