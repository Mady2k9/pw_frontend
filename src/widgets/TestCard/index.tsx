import {Badge} from "@/components/ui/badge";
import {CalendarDays, ChevronRightIcon, LockKeyholeIcon, NotebookText} from "lucide-react";
import {useMemo} from "react";
import {getTestAction} from "@/lib/utils";
import {formatDateAndTime} from "@/lib/date.utils";

interface TestCardProps {
    isFree: boolean,
    name: string,
    totalQuestions: number,
    totalMarks: number,
    maxDuration: number,
    startTime: string,
}

export default function TestCard(test: TestCardProps) {
    const testAction = useMemo(() => {
        return getTestAction(test.startTime, test.isFree);
    }, [test]);
    return <div className={'border rounded-lg p-3 md:p-4 animationFromBottom !slide-in-from-bottom-3'}>
        <div className="flex items-center">
            <div className="flex-1 flex flex-col items-start gap-2 md:gap-3">
                {test.isFree && <Badge variant={'success'}>Free</Badge>}
                <h3 className={'text-lg font-bold break-all'}>{test.name}</h3>
                <div className={'flex items-center'}>
                    <div className={'flex items-center gap-2 border-r border-light pr-2'}>
                        <NotebookText className={'w-4 h-4 stroke-light'}/>
                        <span>{test.totalQuestions} Questions</span>
                    </div>
                    <div className={'flex items-center gap-2 border-r border-light pr-2.5 pl-2'}>
                        <span>{test.totalMarks} Marks</span>
                    </div>
                    <div className={'flex items-center gap-2  pl-2.5'}>
                        <span>{test.maxDuration} Mins</span>
                    </div>
                </div>
                <div className={'flex items-center gap-2'}>
                    <CalendarDays className={'w-4 h-4'}/>
                    <span>Starts on {formatDateAndTime(test.startTime)}</span>
                </div>
            </div>
            <div className="div">
                {
                    testAction === 'upcoming' && <Badge variant={'default'}>Upcoming</Badge>
                }
                {
                    testAction === 'start' && <div className={'flex flex-col gap-1 cursor-pointer items-center'}>
                        <ChevronRightIcon className={'p-1 w-10 h-10 stroke-primary rounded-full bg-secondary'}/>
                        <span className={'text-primary text-sm font-semibold hover:underline'}>Take Test</span>
                    </div>
                }
                {
                    testAction === 'locked' && <div className={'flex flex-col gap-1 cursor-pointer items-center'}>
                        <LockKeyholeIcon
                            className={'p-1.5 w-10 h-10 fill-zinc-600 stroke-zinc-100 rounded-full bg-zinc-100'}/>
                        <span className={'text-zinc-600 text-sm font-semibold hover:underline'}>Locked</span>
                    </div>
                }
            </div>
        </div>
    </div>;
}
