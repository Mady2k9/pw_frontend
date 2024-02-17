import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

interface FAQProps {
    items: {
        question: string;
        answer: string;
        title: string;
        description: string;
    }[]
}

export default function FAQ({items}: FAQProps) {
    return <div className={'py-4  md:py-8'}>
        <h2 className={'text-xl md:text-4xl font-bold '}>Frequently Asked Questions </h2>
        <div className={'mt-4 md:mt-6'}>
            <Accordion type="single" collapsible>
                {

                    items.map((item, index) => {
                        return <AccordionItem value={index + ''}
                                              className={'mb-4 border-none rounded-xl overflow-hidden'} key={index}>
                            <AccordionTrigger className={'bg-[#F1F5FE] px-4 hover:bg-[#deeaf8] transitionAll200'}>
                                <h3 className={'no-underline text-lg font-semibold text-start'}>{item.question || item.title}</h3>
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
