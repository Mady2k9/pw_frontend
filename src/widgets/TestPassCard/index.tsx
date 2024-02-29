import {cn} from "@/lib/utils";
import style from './TestPassCard.module.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TeachersCard } from "../BatchDescription/BatchDetailsKnowYourTeachers";
import TestPass from "./TestPass";


export interface testPassCardDataType{
title:string;
slug:string;
price:number;
postDiscountPrice: number;
planTitle:string;
meta:{
  icon:string;
  text:string;
}[];
discount:number;
}

export interface cardColorType {
  bgColor:string;
  borderColor:string;
  icon:{level1: string; level2: string}
}

const cardColor= [{
  bgColor:'#F1F5FE',
  borderColor:'#BCD8F1',
  icon:{level1:'#81B6E4', level2:'#BCD8F1'}
},
{
  bgColor:'#FFF6E5',
  borderColor:'#F7E0B4',
  icon:{level1:'#EDB84F', level2:'#F7E0B4'}
},
{
  bgColor:'#DFF1E4',
  borderColor:'#ADCFB7',
  icon:{level1:'#64A478', level2:'#ADCFB7'}
}]


export default function TestPassCard({title, description, testPassCardData }:
  {title:string, 
   description: string, 
   testPassCardData: testPassCardDataType[]
  }){
    return <div className={`w-full my-[24px] ${style.backgroundImage}`}>
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
              {testPassCardData?.map((data:testPassCardDataType, index: number) => (
                <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 basis-1/1">
                <TestPass testPassCardData ={data} cardColor={cardColor[index%3]} />
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
