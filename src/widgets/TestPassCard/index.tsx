import {cn} from "@/lib/utils";
import style from './TestPassCard.module.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TeachersCard } from "../BatchDescription/BatchDetailsKnowYourTeachers";
import TestPass from "./TestPass";
import bgImage from '../../assets/background-images/Test-pass-Background.webp';


export default function TestPassCard({title, description, testPassCardData}){
    return <div className="w-full" style={{
      backgroundImage: `url(${bgImage.src})`,
    }}>
      <div className={'container select-none py-[40px]'}  >
      <div className="relative w-[100%] border-b-2 border-[#81B6E4] h-[1px] ">
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[10px] bg-[#F1F5FE]  ">
     <span className="bg-[#DDEBF8] border-[1px] border-[#012D45] rounded-full text-[12px] leading-[10px] font-[600] px-[15px] text-[#012D45]"> Newly Launched </span>
     </div>
         </div>
    {title && <h2 className={'text-[32px] leading-[48px] mt-[20px] font-bold text-center '}>{title}</h2>}
    {description &&
      <p className={'text-center text-[18px] leading-[28px] font-[500]  text-[#1B2124] mx-auto mt-[9px]'}>{description}</p>}

            <Carousel
            opts={{
              align: 'center',
            }}
            className="w-full relative pt-[32px] "
          >
            <CarouselContent>
              {testPassCardData.map((_, index: number) => (
                <CarouselItem key={index} className="basis-1/3 ">
                <TestPass testPassCardData ={testPassCardData} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className={' bg-gradient-to-r from-transparent to-white'} />
            <CarouselPrevious  className={'top-[1/2 -translate-y-1/2 left-[-15px] bg-white hover:bg-white'} />
            <CarouselNext  className={'top-[1/2 -translate-y-1/2 right-[-15px] bg-white hover:bg-white'} />
          </Carousel> 
    </div>
    </div>
};
