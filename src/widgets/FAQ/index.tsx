import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import batchEventTracker from "@/lib/BatchEventTracker/BatchEventTracker";


interface FAQProps {
    items: {
        question: string;
        answer: string;
        title: string;
        description: string;
    }[]
    pageSource?: string;

}

export default function FAQ({items,pageSource}: FAQProps) {
    const handleGaEvent= ()=>{
       if(pageSource)
       batchEventTracker.faqClick(pageSource)
    }
    return <div className={''} onClick={handleGaEvent}>
        <h2 className={'text-xl md:text-4xl font-bold '}>Frequently Asked Questions </h2>
        <div className={'mt-4 md:mt-6'}>
            <Accordion type="single" collapsible>
                {

                    items?.map((item, index) => {
                        return <AccordionItem value={index + ''}
                                              className={'mb-4 border-none rounded-xl overflow-hidden'} key={index}>
                            <AccordionTrigger className={'bg-[#F1F5FE] px-4 hover:bg-[#deeaf8] transitionAll200'}>
                                <h3 className={'no-underline font-semibold text-start text-[14px] leading-[22px] sm:text-lg'}>{item.question || item.title}</h3>
                            </AccordionTrigger>
                            <AccordionContent className={'p-4 bg-zinc-50'}>
                                <div dangerouslySetInnerHTML={{__html: item.answer || item.description}}/>
                            </AccordionContent>
                        </AccordionItem>
                    })
                }
            </Accordion>
        </div>
    </div>
}
