import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";
import {ReactElement} from "react";
import TestModalIcon from '../../assets/images/test-modal-icon.webp'

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
    return <Dialog >
        <DialogTrigger asChild className={'outline-none'}>
            {
                trigger
            }
        </DialogTrigger>
        <DialogContent className="w-[700px]">
            <DialogHeader >
                <DialogTitle className={'text-xl border-b pb-2'}>Test Series Mode</DialogTitle>
                <DialogDescription className={'pt-2 flex flex-col gap-4'}>
                    <h4 className={'font-medium text-normal'}>Select one of the options to continue:</h4>
                    <div className="flex gap-2">
                        {
                            Mode.map((m, index) => {
                                return <div key={index} className={'flex flex-col py-8 px-4 items-center cursor-pointer border border-[#EFEFEF]'}>
                                    <Image src={TestModalIcon.src} className="w-[160px] h-[103px]" />
                                    <label htmlFor={m.title} className={'text-lg text-[#1B2124] font-bold mt-7 mb-1'}>{m.title}</label>
                                    <p className={'text-[#3D3D3D] text-center text-sm capitalize mb-2'}>{m.description}</p>
                                    <p className={'text-[#1B2124] font-semibold text-3xl'}>{m.price}</p>

                                </div>
                            })
                        }
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}
