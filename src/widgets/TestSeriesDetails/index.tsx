import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "lucide-react";
import TestSeriesModeModal from "@/widgets/TestSeriesDetails/TestSeriesModeModal";

const Meta = [{
    title: 'Total Tests',
    value: 24
}, {
    title: 'Short Tests',
    value: 8
}, {
    title: 'All India Tests',
    value: 15
}, {
    title: 'JEE Mains & Advanced',
    value: 14
}]
export default function TestSeriesDetails() {
    return (
        <div className={'card-shadow rounded-lg p-4 flex flex-col gap-4 md:gap-6'}>
            <div className="flex pb-2 md:pb-3 justify-between border-b items-center">
                <h3 className={' md:text-xl font-bold'}>Online Mode</h3>
                <TestSeriesModeModal trigger={<Button variant={'outline'} size={'sm'}>Change Mode <ChevronRightIcon
                    className={'w-4 h-4 stroke-primary'} /></Button>} modeDataModal={undefined} cohortForModal={""}/>
            </div>
            <h2 className={'text-xl md:text-3xl font-bold'}>This test series includes</h2>
            <div className={'flex flex-wrap gap-4'}>
                {
                    Meta.map((m, index) => {
                        const colors = ['#5A4BDA', '#037CBF', '#DA7E4B', '#A44BDA'];
                        return <div key={index} className={'text-left px-2 md:px-4'} style={{
                            borderLeft: `3px solid ${colors[index % 4]}`
                        }}>
                            <h3 className={'text-xl font-bold'}>{m.value}</h3>
                            <p className={'text-lighter text-sm font-medium'}>{m.title}</p>
                        </div>
                    })
                }
            </div>
            <Button variant={'secondary'}> View Schedule </Button>
        </div>
    )
}
