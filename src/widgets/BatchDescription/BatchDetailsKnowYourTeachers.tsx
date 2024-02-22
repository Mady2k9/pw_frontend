import { ITeacherId } from '@/api/interfaces/batch';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getFullName, imageToImageUrl } from '@/lib/utils';
import BatchDescriptionCardWrapper from '@/widgets/BatchDescription/BatchDescriptionCardWrapper';
import { Image } from '@/components/ui/image';
import TeacherBgImage from '@/assets/background-images/teacher-bg.png';

export function TeachersCard({ teacher }: { teacher: ITeacherId }) {
  return <div className={'flex flex-col'}>
    <div
      className={'w-[80%] relative pt-4 flex flex-col bg-top bg-no-repeat justify-end overflow-hidden px-4 rounded-t-full aspect-[0.90] bg-[#FFF4CF] mx-auto'}
      style={{
        backgroundImage: `url(${TeacherBgImage.src})`,
      }}>
      <Image src={imageToImageUrl(teacher.imageId)} className={'h-full w-full bg-contain'}/>
    </div>
    <div className={'card-shadow rounded-md items-center flex flex-col p-2 bg-white text-center'}>
      <div className={'font-semibold line-clamp-1'}>{getFullName(teacher)}</div>
      <div className="sm:text-sm text-xs font-lighter h-4.5 line-clamp-1">{teacher.subject}</div>
      {
        teacher.experience ? <div
          className="bg-[#EAECEF] h-[28px] text-[12px] leading-[18px] sm:text-sm rounded-[100px] py-[4px] mt-[9px] px-[18px]">
          {teacher.experience}+ Years Exp

        </div> : <div className={'h-[28px] mt-[9px]'}>

        </div>
      }
    </div>
  </div>;
}

export default function BatchDetailsKnowYourTeachers({ teachers }: { teachers: ITeacherId[] }) {
  return <BatchDescriptionCardWrapper title={'Know your Teachers'}>
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {teachers.map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
            <div className={'p-1'}>
              <TeachersCard teacher={_} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={'absolute right-0 bottom-0 top-0 w-[100px] bg-gradient-to-r from-transparent to-white'} />
      <CarouselPrevious className={'left-2 bg-white hover:bg-white'} />
      <CarouselNext className={'right-2 bg-white hover:bg-white'} />
    </Carousel>
  </BatchDescriptionCardWrapper>;
}
