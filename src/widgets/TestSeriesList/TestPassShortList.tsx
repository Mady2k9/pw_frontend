import { ITestPassData } from '@/api/interfaces/test-series';
import style from '@/widgets/TestPassCard/TestPassCard.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TestPassCard from '@/widgets/TestPassCard';
import { Badge } from '@/components/ui/badge';

export interface TestPassShortListProps {
  title: string,
  description?: string,
  items: ITestPassData[],
  showMoreLink?: string,
  page_source?: string,
}

const CardColors = [
  {
    bgColor: '#F1F5FE',
    borderColor: '#BCD8F1',
    icon: { level1: '#81B6E4', level2: '#BCD8F1' },
  },
  {
    bgColor: '#FFF6E5',
    borderColor: '#F7E0B4',
    icon: { level1: '#EDB84F', level2: '#F7E0B4' },
  },
  {
    bgColor: '#DFF1E4',
    borderColor: '#ADCFB7',
    icon: { level1: '#64A478', level2: '#ADCFB7' },
  }];

export default function TestPassShortList({
                                            title,
                                            items,
                                            description,
                                            showMoreLink,
                                            page_source,
                                          }: TestPassShortListProps) {
  return <div className={`w-full py-6 xl:py-10 ${style.backgroundImage}`}>
    <div className={'container select-none'}>
      <div className="relative flex gap-2.5 items-center">
        <div className="h-[1px]  bg-[#81B6E4] flex-1" />
        <Badge className={'border-auxiliary-pw-link  bg-auxiliary-pw-link-100 text-auxiliary-pw-link'}
               variant={'outline'}>Newly Launched</Badge>
        <div className="h-[1px]  bg-[#81B6E4] flex-1" />
      </div>
      {title && <h2 className={'md:text-[32px] text-[20px] leading-[48px] font-bold text-headings text-center mt-5'}>{title}</h2>}
      {
        description &&
        <p className={'text-center text-headings md:text-[18px] text-[14px] font-medium leading-[28px]'}>{description}</p>
      }

      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full relative pt-[32px] "
      >
        <CarouselContent>
          {items?.map((data, index: number) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 basis-1/1 ">
              <TestPassCard data={data} color={CardColors[index % 3]} />
            </CarouselItem>))}
        </CarouselContent>
        <div
          className={' bg-gradient-to-r from-transparent to-white'} />
        <CarouselPrevious className={'top-[1/2 -translate-y-1/2 left-[-15px] bg-white hover:bg-white '} />
        <CarouselNext className={'top-[1/2 -translate-y-1/2 right-[-15px] bg-white hover:bg-white'} />
      </Carousel>
    </div>
  </div>;
}
