import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose 
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import {ReactElement, useState} from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { stringToBase64, stringToSlug } from '@/lib/utils';
import Link from "next/link";

interface TestSeriesModeModalProps {
    trigger: ReactElement
    modeDataModal: any
    cohortOption:string| any
    value:string
    categoryId?:string
}
export default function TestSeriesModeModal({trigger , modeDataModal, cohortOption, value, categoryId}: TestSeriesModeModalProps) {
    const [selectedMode, setSelectedMode] = useState(0)
    const router = useRouter()
    const courseKey = router.query.courseKey as string;
    const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
    return <Dialog >
        <DialogTrigger asChild className={'outline-none'}>
            {
                trigger
            }
        </DialogTrigger>
        <DialogContent className="max-w-[720px]">
            <DialogHeader >
                <DialogTitle className={'text-base font-bold sm:text-xl border-b text-left pb-2'}>Test Series Mode</DialogTitle>
                <DialogDescription className={'pt-2 flex flex-col'}>
                    <h4 className={'font-medium text-sm text-left sm:text-normal mb-5'}>Select one of the options to continue:</h4>
                    <div className="sm:flex-row flex flex-col gap-2">
                        {
                            modeDataModal?.data?.map((m :any, index:number) => {
                                return ( 
                                <div key={index} onClick={()=>setSelectedMode(index)} className={`${selectedMode===index? 'bg-[#ECEAFF] border-[#5A4BDA]':' border-[#EFEFEF]'} w-full rounded-lg flex flex-row-reverse sm:flex-col sm:py-8 py-4 px-4 items-center sm:mb-6 cursor-pointer border`}>
                                    <Image src={m.imageId.baseUrl + m.imageId.key } className="sm:w-[160px] sm:h-[103px] w-[114px] h-[73px] bg-center bg-cover" />
                                    <div className="text-left sm:text-center gap-1.5 flex flex-col sm:mt-7 justify-between w-[90%] sm:w-full">
                                    <label htmlFor={m.title} className={'sm:text-lg text-base text-[#1B2124] font-semibold sm:mb-1'}>{m.title}</label>
                                    <p className={'text-[#3D3D3D] text-[12px] leading-[18px] capitalize sm:mb-2 '}>{m.description}</p>
                                    <div className="flex gap-2 items-center text-left sm:text-center justify-center">
                                    <p className={` ${selectedMode === index? 'text-[#5A4BDA]':'text-[#1B2124]'} font-semibold text-lg sm:text-2xl`}><span className="text-[20px]">{m.postDiscountPrice !==0 && '₹'}</span>{m.postDiscountPrice===0 ?'Free':`${m.postDiscountPrice}`}</p>
                                    <p className={` font-semibold text-[#757575] sm:text-base text-sm line-through`}>{m.price !==0 && m.price}</p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-end sm:grid">
                   <DialogClose asChild >
                    <Link href={value==='explore'? `/test-series/${courseKey}/${stringToSlug(cohortOption)}/${modeDataModal?.data[selectedMode].slug}`: `${baseUrl}/study/auth?encoded_redirect_url=${stringToBase64(`${baseUrl}/test-series?childUrl=/test-series/${categoryId}/mode/${modeDataModal?.data[selectedMode]._id}`)}`}>
                    <Button className="py-4 px-12 w-full ">Continue</Button>
                    </Link>
                    </DialogClose> 
                    </div>
               </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}
