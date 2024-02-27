import {cn} from "@/lib/utils";
import style from './TestPassCard.module.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TeachersCard } from "../BatchDescription/BatchDetailsKnowYourTeachers";
import TestPass from "./TestPass";


export default function TestPassCard({title, description, testPassCardData}){
    console.log('shreyaa', testPassCardData)
    return <div className={'container select-none py-4 animationFromBottom md:py-8'}>
    {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
    {description &&
      <p className={'text-center text-sm md:text-lg font-medium text-light max-w-3xl mx-auto mt-3'}>{description}</p>}

            <Carousel
            opts={{
              align: 'center',
            }}
            className="w-full relative pt-1 "
          >
            <CarouselContent>
              {testPassCardData.map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                <TestPass testPassCardData ={testPassCardData} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className={'absolute right-0 bottom-0 top-0  bg-gradient-to-r from-transparent to-white'} />
            {/* <CarouselPrevious className={'left-2 bg-white hover:bg-white'} />
            <CarouselNext className={'right-2 bg-white hover:bg-white'} /> */}
          </Carousel> 
    </div>
};
