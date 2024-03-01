import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "lucide-react";
import TestSeriesModeModal from "@/widgets/TestSeriesDetails/TestSeriesModeModal";
import Link from "next/link";
import { Image } from "@/components/ui/image";

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
export default function TestSeriesDetails({ metaValueData, scheduleButtonLink , metaData }:{metaData:any ,metaValueData: any , scheduleButtonLink:any}) {
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
                    metaValueData?.modeMetrics?.map((m:{text:string , value:number}, index:number) => {
                        const colors = ['#5A4BDA', '#037CBF', '#DA7E4B', '#A44BDA'];
                        return <div key={index} className={'text-left px-2 md:px-4'} style={{
                            borderLeft: `3px solid ${colors[index % 4]}`
                        }}>
                            <h3 className={'text-xl font-bold'}>{m.value}</h3>
                            <p className={'text-lighter text-sm font-medium'}>{m.text}</p>
                        </div>
                    })
                }
            </div>
            <div>
                {metaData.meta.map((data: { icon: { baseUrl: string; key: string; }; text: any; })=>{
                    console.log(data, 'datasdks')
                    return (
                        <div key={data.text} className="flex items-center gap-3 mb-3">
                            <Image src={data?.icon ? data?.icon?.baseUrl+ data?.icon?.key: ''} className="h-full bg-cover bg-center" alt="meta icons"/>
                            <div dangerouslySetInnerHTML={{ __html: data.text }} />
                        </div>
                    )
                })}
            </div>
            <Link href={scheduleButtonLink?.scheduleFileId?.baseUrl+scheduleButtonLink?.scheduleFileId?.key}>
            <Button variant={'secondary'} className="w-full"> View Schedule </Button>
            </Link>
        </div>
    )
}
