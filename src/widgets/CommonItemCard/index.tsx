import styles from './CommonItemCard.module.css';
import { cn } from '@/lib/utils';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WhatsAppIcon from '@/assets/icons/whatsapp.webp';
import PlaceholderImage from '@/assets/images/placeholder-batch.webp';
import OnlineTag from '@/assets/images/onlineTag.webp';
import OfflineTag from '@/assets/images/offlineTag.webp';
import PriceDisplay from '@/widgets/PriceDisplay';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Star } from 'lucide-react';
import formatDate from '@/lib/date.utils';
import StudentIcon from '@/components/icons/student';
import { useRouter } from 'next/router';
import batchEventTracker from '@/lib/BatchEventTracker/BatchEventTracker';
import { getModalData } from '@/api/page-apis';

interface CommonItemCardProps {
  thumbnail?: string,
  title: string,
  usedFor?: string,
  meta?: { key: string, value?: string, text?: any }[]
  startDate?: string,
  language?: string,
  endDate?: string,
  amount?: number,
  updatedAmount?: number,
  fromDetails?: boolean,
  discount?: number,
  exploreLink?: string,
  buyNowLink?: string,
  isOnline?: boolean,
  whatsappLink?: string,
  isNew?: boolean,
  page_source?: string;
  batchId?: string;
  cohortIdTestMode?:string
  cohortForModal?:string
}

export default function CommonItemCard({
                                         isOnline,
                                         amount,
                                         updatedAmount,
                                         discount,
                                         title,
                                         isNew,
                                         startDate, endDate,
                                         whatsappLink,
                                         usedFor,
                                         thumbnail,
                                         exploreLink,
                                         buyNowLink,
                                         meta,
                                         language,
                                         fromDetails,
                                         page_source,
                                         batchId = '',
                                       }: CommonItemCardProps) {
  const Tag: 'Online' | 'Offline' | null = useMemo(() => {
    if (isOnline === true) {
      return 'Online';
    }
    if (isOnline === false) {
      return 'Offline';
    }
    return null;
  }, [isOnline]);
  const encodedUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    return encodeURIComponent(window.location.origin + whatsappLink);
  }, [whatsappLink]);
  const features = (meta && meta.filter((m) => m.value || m.text).slice(0, 2)) || [];
  const router = useRouter();
  const getClassAndExam = router.asPath.split('/');

  const handleExploreGaEvent = (batch_name: string, amount: number | undefined, updatedAmount: number | undefined, exam: string, classname: string) => {
    batchEventTracker.batchCardExploreClick(batch_name, Tag, amount, updatedAmount, batchId, exam, classname);
  };
  const handleBuyNowGaEvent = (batch_name: string, amount: number | undefined, updatedAmount: number | undefined, exam: string, classname: string) => {
    batchEventTracker.pwliveBuynowClick(batch_name, Tag, amount, updatedAmount, batchId, exam, classname, (page_source ? page_source : ''));
  };
  return <div
    className={cn(' w-full p-[1px] rounded-md bg-gradient-to-b from-blue-500 to-white', styles.commonItemCardWrapper, {
      [styles.commonItemCardWrapperOnline]: Tag === 'Online',
      [styles.commonItemCardWrapperOffline]: Tag === 'Offline',
    })}>
    <div className={cn(' bg-white w-full rounded-md p-3 space-y-2 relative')}>
      {
        Tag && <Image src={Tag === 'Online' ? OnlineTag.src : OfflineTag.src} alt={Tag}
                      className={'absolute -left-2.5 -top-2.5 w-[100px] h-10'} />
      }
      <div className={'flex item' +
        's-start gap-2 !mt-2'}>
        <h4 className={'md:text-lg h-[56px] line-clamp-2 font-semibold flex-1'}>
          {title}
        </h4>
        {
          isNew &&
          <Badge className={'rounded mt-1 bg-[#FBDE47] text-black hover:bg-[#FBDE47] select-none'}>New</Badge>
        }
        {
          whatsappLink && <Link href={`https://wa.me/?text=Check%20out%20this%20link%3A%20${encodedUrl}`}
            target={'_blank'}><Image src={WhatsAppIcon.src} alt={'Whatsapp Link'}
              className={cn('cursor-pointer', {
                'w-8 ': fromDetails,
                ' mt-1 w-5 h-5': !fromDetails,
              })} /></Link>
        }
      </div>
      <div className={'aspect-video relative rounded-md overflow-hidden bg-gray-100'}>
        <Image placeholder={PlaceholderImage.src} src={thumbnail || ''} className={'w-full h-full'} />
        {
          language && <Badge
            className={'bg-white text-black absolute left-2 bottom-2 rounded hover:bg-white select-none'}>
            {language}
          </Badge>
        }
      </div>
      <div className={'flex flex-col gap-1 h-[64px]'}>
        {
          usedFor && <div className={'flex text-xs items-center text-light font-semibold'}>
            <StudentIcon className={'-ml-1'} />
            <span>{usedFor}</span>
          </div>
        }
        {
          startDate && endDate &&
          <div className={'flex gap-1.5 text-xs items-center  text-light font-semibold'}>
            <CalendarDays className={'w-3.5 h-3.5 stroke-zinc-500 stroke-2'} /> <span
            className={' text-lighter'}>Starts on </span>
            <span>{formatDate(startDate)}</span>
            <div className={'h-full w-[1px] bg-zinc-300'} />
            <span className={' text-lighter'}>Ends on </span>
            <span>{formatDate(endDate)}</span>
          </div>
        }
        {
          features?.length > 0 &&
          <div className={'flex gap-1.5 line-clamp-1 text-xs items-center  text-light font-semibold'}>
            <Star className={'w-3.5 min-w-3.5 h-3.5 fill-zinc-500 line-clamp-1 stroke-zinc-500 stroke-2'} />
            {
              features.map((m, index) => {
                return <span key={index}
                             className={'line-clamp-1'}>{m.value ? m.value :
                  <div
                    className={'container'}
                    dangerouslySetInnerHTML={{
                      __html: m.text,
                    }} />
                } {m.key?.toLowerCase().replace(/_/g, ' ')} </span>;
              })
            }
          </div>
        }
      </div>
      <div className={'border-t pt-3 !mt-3 h-[42px]'}>
        <PriceDisplay amount={amount} discount={discount} total={updatedAmount} />
      </div>
      <div className={'flex gap-2 !mt-3'}>
        {/* {
          exploreLink && !fromDetails && <Link href={exploreLink} className={'w-full'}>
            {apiData?.data?.length> 1 ? <TestSeriesModeModal modeDataModal={apiData} cohortForModal={cohortForModal? cohortForModal:''} trigger={<Button onClick={() => handleExploreGaEvent(title, amount, updatedAmount, (getClassAndExam[2] ? getClassAndExam[2] : ''), (getClassAndExam[3] ? getClassAndExam[3].split('?')[0] : ''))} variant={'outline'} className={'w-full border-primary text-primary'} >EXPLORE</Button>} />
              : <Button variant={'outline'} className={'w-full  border-primary text-primary'}
                onClick={() => handleExploreGaEvent(title, amount, updatedAmount, (getClassAndExam[2] ? getClassAndExam[2] : ''), (getClassAndExam[3] ? getClassAndExam[3].split('?')[0] : ''))}>
                EXPLORE
              </Button>}
          </Link>
        } */}
        {
          exploreLink && !fromDetails && <Link href={exploreLink} className={'w-full'}>
            <Button
              onClick={() => handleExploreGaEvent(title, amount, updatedAmount, (getClassAndExam[2] ? getClassAndExam[2] : ''), (getClassAndExam[3] ? getClassAndExam[3].split('?')[0] : ''))}
              variant={'outline'} className={'w-full border-primary text-primary'}>EXPLORE</Button>
          </Link>
        }
        {
          buyNowLink && <Link href={buyNowLink} target={'_blank'} className={'w-full '}>
            <Button className={'w-full'}
                    onClick={() => handleBuyNowGaEvent(title, amount, updatedAmount, (getClassAndExam[2] ? getClassAndExam[2] : ''), (getClassAndExam[3] ? getClassAndExam[3].split('?')[0] : ''))}>
              BUY NOW
            </Button>
          </Link>
        }
      </div>
    </div>
  </div>;
}
