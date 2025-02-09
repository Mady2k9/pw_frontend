import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "lucide-react";
import TestSeriesModeModal from "@/widgets/TestSeriesDetails/TestSeriesModeModal";
import Link from "next/link";
import { Image } from "@/components/ui/image";
import { useEffect, useState } from "react";

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
export default function TestSeriesDetails({metaData, cohortKey }:{metaData:any, cohortKey:any}) { 
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const [modalChangeData, setModalChangeData] = useState<any>()
    const modalData = async () => {
        if(!metaData?.categoryId) return
        await fetch(`${baseUrl}/gcms/test-category/test-category-modes/${metaData?.categoryId}`)
          .then(response => response.json())
          .then(data => setModalChangeData(data))
          .catch(error => console.error('Error:', error));
      }
      useEffect(() => {
        modalData()
      }, [])

      const url=metaData?.scheduleFileId?.baseUrl+metaData?.scheduleFileId?.key
      const openPdf= ()=>{
        window.open(url, '_blank')
      }
    return (
        <div className={'card-shadow rounded-lg p-4 sm:p-6 flex flex-col gap-4 md:gap-6'}>
           {modalChangeData?.data?.length>1 && modalChangeData?.data &&  <div className="flex pb-2 md:pb-3 justify-between border-b items-center">
             <h3 className={' md:text-xl font-bold'}>{metaData.type}</h3>
                <TestSeriesModeModal trigger={<Button variant={'outline'} size={'sm'}>Change Mode <ChevronRightIcon
                    className={'w-4 h-4 stroke-primary'} /></Button>} modeDataModal={modalChangeData} cohortOption={cohortKey} value={'explore'} categoryId={metaData?.categoryId} />
            </div>}
            <h2 className={'text-xl md:text-[32px] leading-[48px] font-bold'}>This test series includes</h2>
            <div className={'flex flex-wrap gap-4'}>
                {
                    metaData?.modeMetrics?.map((m:{text:string , value:number}, index:number) => {
                        const colors = ['#5A4BDA', '#037CBF', '#DA7E4B', '#A44BDA'];
                        return <div key={index} className={'text-left px-2 md:px-4'} style={{
                            borderLeft: `3px solid ${colors[index % 4]}`
                        }}>
                            <h3 className={'text-xl sm:text-2xl font-bold'}>{m.value}</h3>
                            <p className={'text-lighter text-sm font-medium'}>{m.text}</p>
                        </div>
                    })
                }
            </div>
            <div>
                {metaData?.meta?.map((data: { icon: { baseUrl: string; key: string; }; text: any; })=>{
                    return (
                        <div key={data.text} className="flex items-center gap-3.5 mb-3">
                            <Image src={data?.icon ? data?.icon?.baseUrl+ data?.icon?.key: ''} className="h-full max-w-8 max-h-8 bg-cover bg-center" alt="meta icons"/>
                            <div dangerouslySetInnerHTML={{ __html: data.text }} />
                        </div>
                    )
                })}
            </div>
          {metaData?.scheduleFileId &&  
            <Button onClick={openPdf} size={'lg'} variant={'secondary'} className="w-full sm:text-base text-sm py-2.5 px-5 sm:px-6 sm:py-3"> View Schedule </Button>
            }
        </div>
    )
}
