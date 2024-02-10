import {ArrowRightIcon} from "@heroicons/react/20/solid";

interface ExamProps {
    slug: string;
    name: string;
}

export interface ExamCategoryProps {
    id: string;
    name: string;
    icon?: string;
    exams: ExamProps[]
    exploreActionText: string
}

export default function ExamCategoryCard({id, name, icon, exams, exploreActionText}: ExamCategoryProps) {
    return (
        <div
            className={'overflow-hidden relative border border-transparent card-shadow cursor-default hover:border-zinc-600 transitionAll200 rounded p-4'}>
            <div className={'absolute right-0 translate-x-1/2 aspect-square bg-zinc-100 -top-1 -bottom-1'}
                 style={{borderRadius: '50%'}}/>
            <div className={'flex flex-col gap-4 md:gap-6'}>
                <h2 className={'text-lg md:text-2xl font-bold'}>{name}</h2>
                <div className={'h-[120px]'}></div>
                <div className={'flex cursor-pointer items-center group'}>
                    <span className={'group-hover:text-primary group-hover:underline font-medium transitionAll200 '}>
                        {exploreActionText}
                    </span>
                    <div className={'bg-zinc-100 ml-4 group-hover:ml-6 rounded-2xl px-3 py-1.5 group-hover:bg-primary transitionAll200'}>
                        <ArrowRightIcon className={'w-5 h-5 group-hover:stroke-white group-hover:fill-white transitionAll200'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
