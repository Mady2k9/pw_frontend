import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

export function BatchLoadingGrid(){
    return <div className={'grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full'}>
        {
            [1, 2, 3].map((_, index) => {
                return <div
                    key={index}
                    className={cn('w-full p-3 border border-zinc-100 shadow space-y-2 rounded-lg', {
                        'hidden md:block': index === 1,
                        'hidden lg:block': index === 2,
                    })}>
                    <Skeleton className={'w-full h-[56px]'}/>
                    <Skeleton className={'w-full aspect-video'}/>
                    <Skeleton className={'w-full h-[64px]'}/>
                    <div className={'h-[40px]'}/>
                    <div className={'flex gap-4'}>
                        <Skeleton className={'w-full h-[40px]'}/>
                        <Skeleton className={'w-full h-[40px]'}/>
                    </div>
                </div>
            })
        }
    </div>
}
