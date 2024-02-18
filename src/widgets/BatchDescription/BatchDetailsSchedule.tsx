import {ISubject} from "@/api/interfaces/batch";
import {cn, getFullName, imageToImageUrl} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import formatDate from "@/lib/date.utils";
import {useState} from "react";
import BatchDescriptionCardWrapper from "./BatchDescriptionCardWrapper";

export default function BatchDetailsSchedule({subjects}: { subjects: ISubject[] }) {
    const [showMore, setShowMore] = useState(false);
    return <BatchDescriptionCardWrapper title={'Batch Schedules'}>

        <>
            {
                (showMore ? subjects : subjects.slice(0, 3)).map((subject, index) => {
                    const schedule = subject.schedules[0]
                    const teachersName = subject?.teacherIds
                        ?.map((teacher: any) => {
                            return getFullName(teacher);
                        })
                        .join(' & ');
                    return <div key={index}
                                className={cn('rounded-lg p-4 animationFromBottom !slide-in-from-bottom-3', {
                                    'bg-[#EFF8FF]': index % 3 === 0,
                                    'bg-[#F4F3FF]': index % 3 === 1,
                                    'bg-[#FEFBE8]': index % 3 === 2,
                                })}>
                        <div className={'flex flex-col md:flex-row items-start md:items-center gap-2.5'}>
                            <div
                                className={cn('flex-1 py-1 h-full flex flex-col relative justify-between pl-3', {})}>
                                <div className={cn('w-[4px] absolute rounded-md -left-[2px] top-0 bottom-0', {
                                    'bg-[#2E90FA]': index % 3 === 0,
                                    'bg-[#7A5AF8]': index % 3 === 1,
                                    'bg-[#EAAA08]': index % 3 === 2,
                                })}/>
                                <div className={'text-xl font-semibold '}>
                                    {subject.subject}
                                </div>
                                <div className={'flex md:items-center flex-col md:flex-row items-start mt-1'}>
                                    <div
                                        className={'text-sm text-lighter font-medium md:border-r md:pr-3 whitespace-nowrap'}> {formatDate(schedule.startTime)} to {formatDate(schedule.endTime)}</div>
                                    <div
                                        className={'text-sm text-lighter font-medium md:border-r md:pl-3 md:pr-3'}> {subject.lectureCount} Lectures
                                    </div>
                                    <div
                                        className={'text-sm text-lighter font-medium md:pl-3 '}> {teachersName}</div>
                                </div>
                            </div>
                            {imageToImageUrl(subject.fileId) &&
                                <div className={'flex flex-col items-center justify-center'}>
                                    <Button className={'bg-zinc-800'} onClick={() => {
                                        const pdfUrl = imageToImageUrl(subject.fileId);
                                        window.open(pdfUrl, '_blank');
                                    }}>
                                        Download
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                })
            }
            {subjects.length > 3 && <Button size={'lg'} onClick={() => setShowMore(!showMore)}
                                            variant={'outline'}>{showMore ? 'Show Less' : `+${subjects.length - 3} more subjects`}</Button>}
        </>
    </BatchDescriptionCardWrapper>
}
