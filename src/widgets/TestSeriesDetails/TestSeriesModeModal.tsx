import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {ReactElement} from "react";

interface TestSeriesModeModalProps {
    trigger: ReactElement
}

const Mode = [
    {
        title: 'Online Mode',
        description: 'Attempt tests online'
    }, {
        title: 'Home Delivery',
        description: 'Attempt tests offline'
    }, {
        title: 'Offline Mode',
        description: 'Attempt tests offline'
    }
];
export default function TestSeriesModeModal({trigger}: TestSeriesModeModalProps) {
    return <Dialog>
        <DialogTrigger asChild className={'outline-none'}>
            {
                trigger
            }
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className={'text-xl border-b pb-2'}>Are you absolutely sure?</DialogTitle>
                <DialogDescription className={'pt-2 flex flex-col gap-4'}>
                    <h4 className={'font-medium text-normal'}>Select one of the options to continue:</h4>
                    <div>
                        {
                            Mode.map((m, index) => {
                                return <div key={index} className={'flex items-center gap-2 cursor-pointer'}>
                                    <input type="radio" name="mode" id={m.title} className={'w-4 h-4 rounded-full border border-light'}/>
                                    <label htmlFor={m.title} className={'text-lg font-bold'}>{m.title}</label>
                                    <p className={'text-lighter text-sm'}>{m.description}</p>
                                </div>
                            })
                        }
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}
