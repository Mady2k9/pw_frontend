import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const items = [{
    question: 'This batch will also cover JEE Advance syllabus?',
    answer: 'This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?',
}, {
    question: 'This batch will also cover JEE Advance syllabus?',
    answer: 'This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?',
}, {
    question: 'This batch will also cover JEE Advance syllabus?',
    answer: 'This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?',
}, {
    question: 'This batch will also cover JEE Advance syllabus?',
    answer: 'This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?This batch will also cover JEE Advance syllabus?',
}];
export default function FAQ() {
    return <div className={'container py-4  md:py-8'}>
        <h2 className={'text-xl md:text-4xl font-bold '}>Frequently Asked Questions </h2>
        <div className={'mt-4 md:mt-6'}>
            <Accordion type="single" collapsible>
                {

                    items.map((item, index) => {
                        return <AccordionItem value={index + ''} className={'mb-4 border-none rounded-xl overflow-hidden'} key={index}>
                            <AccordionTrigger className={'bg-[#F1F5FE] px-4 hover:bg-[#deeaf8] transitionAll200'}>
                                <h3 className={'no-underline text-lg font-semibold text-start'}>{item.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent className={'p-4 bg-zinc-50'}>
                                <div dangerouslySetInnerHTML={{__html: item.answer}}/>
                            </AccordionContent>
                        </AccordionItem>
                    })
                }
            </Accordion>
        </div>
    </div>
}
