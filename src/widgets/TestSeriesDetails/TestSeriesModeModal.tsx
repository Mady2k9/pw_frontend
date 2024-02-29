import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import {ReactElement, useState} from "react";
import TestModalIcon from '../../assets/images/test-modal-icon.webp'
import { Button } from "@/components/ui/button";

interface TestSeriesModeModalProps {
    trigger: ReactElement
}

const Mode = [
    {
        title: 'Online Mode',
        description: 'Attempt the test on our pw app or website',
        price: '$899'
    }, {
        title: 'Home Delivery',
        description: 'Attempt the test on our pw app or website',
        price: '$899'
    }, {
        title: 'Offline Mode',
        description: 'Attempt the test on our pw app or website',
        price: '$899'
    }
];
export default function TestSeriesModeModal({trigger}: TestSeriesModeModalProps) {
    const [selectedMode, setSelectedMode] = useState(0)
    return <Dialog >
        <DialogTrigger asChild className={'outline-none'}>
            {
                trigger
            }
        </DialogTrigger>
        <DialogContent className="max-w-[720px]">
            <DialogHeader >
                <DialogTitle className={'text-base sm:text-xl border-b text-left sm:text-center pb-2'}>Test Series Mode</DialogTitle>
                <DialogDescription className={'pt-2 flex flex-col gap-4'}>
                    <h4 className={'font-medium text-sm text-left sm:text-center sm:text-normal'}>Select one of the options to continue:</h4>
                    <div className="sm:flex-row flex flex-col gap-2">
                        {
                            Mode.map((m, index) => {
                                return <div key={index} onClick={()=>setSelectedMode(index)} className={`${selectedMode===index? 'bg-[#ECEAFF] border-[#5A4BDA]':' border-[#EFEFEF]'} rounded-lg flex flex-row-reverse sm:flex-col sm:py-8 py-4 px-4 items-center sm:mb-6 cursor-pointer border`}>
                                    <Image src={TestModalIcon.src} className="sm:w-[160px] sm:h-[103px] w-[114px] h-[73px] bg-center bg-cover " />
                                    <div className="text-left sm:text-center gap-1.5 flex flex-col sm:mt-7 justify-between w-[90%] sm:w-full">
                                    <label htmlFor={m.title} className={'sm:text-lg text-base text-[#1B2124] font-semibold sm:font-bold sm:mb-1'}>{m.title}</label>
                                    <p className={'text-[#3D3D3D] text-[12px] leading-[18px] capitalize sm:mb-2 '}>{m.description}</p>
                                    <p className={` ${selectedMode === index? 'text-[#5A4BDA]':'text-[#1B2124]'} font-semibold text-lg sm:text-2xl`}>{m.price}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex justify-end sm:grid">
                    <Button className="py-4 px-12 w-full ">Continue</Button>
                    </div>
               </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}
