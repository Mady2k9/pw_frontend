import PlaceholderImage from '@/assets/images/placeholder-batch.webp';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import BatchDescriptionCardWrapper from '@/widgets/BatchDescription/BatchDescriptionCardWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Image } from '@/components/ui/image';
import { checkIfLectureIsLive, checkIfLectureIsPast, checkIfLectureIsUpcoming, cn, stringToBase64 } from '@/lib/utils';
import { ClockIcon } from 'lucide-react';
import { formatDateAndTime } from '@/lib/date.utils';
import batchEventTracker from '@/lib/BatchEventTracker/BatchEventTracker';
import { useRouter } from 'next/router';
import eventTracker from '@/deprecated/shared/Components/EventTracker/eventTracker';

export function ContentCard({ item, batch_name, batch_id, batch_price, isOnline, page_source }: { item: any , batch_name: string, batch_id: string, batch_price:{amount: number,
  discount: number,
  tax: number,
  total: number}, isOnline: boolean, page_source: string }) {
    const router= useRouter();
    const getClassAndExam = router.asPath.split('/')
  const handleFreeContentGAEvent = () =>{
    eventTracker.authPageVisit('Free Content', page_source)
    batchEventTracker.freeContentVideo(batch_name, (isOnline? 'Online': 'Offline'), batch_price.amount, batch_price.total, batch_id,(getClassAndExam[2]? getClassAndExam[2] :""), (getClassAndExam[3]?getClassAndExam[3].split('?')[0] : ''));
  }
  const baseUrl = typeof window === 'undefined' ? '' : window.location.origin;
  const redirect_url = `${baseUrl}/watch/?batchSlug=${item?.batchId}&batchSubjectId=${item?.batchSubjectId}&subjectSlug=${item?.batchSubjectId}&topicSlug=all&scheduleId=${item?._id}&isUnderMaintenance=false`;
  return <Link target={'_blank'}
               href={`${baseUrl}/study/auth?encoded_redirect_url=${stringToBase64(redirect_url)}`}>
    <div
      className={'flex flex-col p-1.5 card-shadow rounded-md cursor-pointer hover:scale-[1.01] transitionAll200'} onClick={handleFreeContentGAEvent}>
      <div className={'aspect-video rounded-md bg-gray-100'}>
        <Image src={item.videoDetails?.image || PlaceholderImage.src} alt={item.title}
               className={'rounded-md w-full h-full'} />
      </div>
      <div className={'flex justify-between items-center mt-1.5'}>

        <div className={'flex gap-1'}>
          <ClockIcon className={'w-4 h-4 stroke-lighter'} />
          <span className={'text-xs text-lighter font-medium'}>{formatDateAndTime(item.startTime)}</span>
        </div>
      </div>
      <div className={'text-sm font-medium line-clamp-2 mt-1 h-[40px]'}>
        {item.topic}
      </div>
    </div>
  </Link>;
}

export default function BatchDetailsFreeContent({ items, overviewUrl, batch_name, batch_id, batch_price, isOnline, page_source }: { overviewUrl: string, items: any[], batch_name: string, batch_id: string, batch_price:{amount: number,
  discount: number,
  tax: number,
  total: number}, isOnline: boolean,  page_source: string }) {
    const router= useRouter();
    const getClassAndExam = router.asPath.split('/')
    const handleGAEvent = () => {
      eventTracker.authPageVisit('Free Content', page_source)
      batchEventTracker.freeContentVideo(batch_name, (isOnline? 'Online': 'Offline'), batch_price.amount, batch_price.total, batch_id,(getClassAndExam[2]? getClassAndExam[2] :""), (getClassAndExam[3]?getClassAndExam[3].split('?')[0] : ''));
    }
  return <BatchDescriptionCardWrapper title={'Free Content'}>
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full relative pl-4"
    >
      <CarouselContent>
        {items.map((_, index) => (
          <CarouselItem key={index} className={cn('basis-[80%] sm:basis-[35%] pl-0', {})}>
            <div className={'p-1 py-2'}>
              <ContentCard item={_} batch_name={batch_name} batch_id={batch_id} batch_price={batch_price} isOnline={isOnline} page_source={page_source}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={'absolute right-0 bottom-0 top-0 w-[100px] bg-gradient-to-r from-transparent to-white'} />
      <CarouselPrevious className={'left-2 bg-white hover:bg-white'} />
      <CarouselNext className={'right-2 bg-white hover:bg-white'} />
    </Carousel>
    {
      <Link href={overviewUrl} target={'_blank'} className={'w-full'}>
        <Button className={'w-full'} onClick={handleGAEvent}
                variant={'secondary'}>{'View All'}</Button>
      </Link>
    }
  </BatchDescriptionCardWrapper>;
}
