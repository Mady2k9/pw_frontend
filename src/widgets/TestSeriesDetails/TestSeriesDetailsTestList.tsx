import TestCard from "@/widgets/TestCard";
import {Button} from "@/components/ui/button";
import {ChevronDownIcon} from "lucide-react";
import {useState} from "react";
import {scrollToElement} from "@/lib/dom.utils";
import {cn} from "@/lib/utils";

export default function TestSeriesDetailsTestList() {

    const Tests = [{
        isFree: true,
        name: 'Practice Test 1',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2023-12-12',
    }, {
        isFree: false,
        name: 'Practice Test 2',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2024-3-12',
    }, {
        isFree: true,
        name: 'Practice Test 1',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2023-12-12',
    }, {
        isFree: false,
        name: 'Practice Test 2',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2024-3-12',
    }, {
        isFree: true,
        name: 'Practice Test 1',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2023-12-12',
    }, {
        isFree: false,
        name: 'Practice Test 2',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2024-3-12',
    }, {
        isFree: true,
        name: 'Practice Test 1',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2023-12-12',
    }, {
        isFree: false,
        name: 'Practice Test 2',
        totalQuestions: 10,
        totalMarks: 300,
        duration: 180,
        startDate: '2024-3-12',
    }]
    const [showAll, setShowAll] = useState(false);
    return <div className={'card-shadow rounded-lg p-4 flex flex-col gap-4 md:gap-6'} id={'Tests-List'}>
        <h2 className={'text-xl md:text-3xl font-bold'}>Tests</h2>
        <div className={'flex flex-col gap-4'}>
            {
                (showAll ? Tests : Tests.splice(0, 2)).map((test, index) => {
                    return <TestCard key={index} {...test}/>
                })
            }
        </div>
        {
            Tests.length <= 2 ? null :
                <Button variant={'secondary'} onClick={() => {
                    scrollToElement(document.getElementById('Tests-List')!);
                    setShowAll(!showAll);

                }}> <ChevronDownIcon
                    className={cn('w-5 h-5 stroke-primary mr-2', {
                        'rotate-180': showAll
                    })}/> View Less Tests
                    ({Tests.length})</Button>
        }
    </div>;
}
