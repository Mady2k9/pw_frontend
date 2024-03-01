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
import { useMemo } from 'react';
import { CalendarDays, Star } from 'lucide-react';
import formatDate from '@/lib/date.utils';
import StudentIcon from '@/components/icons/student';
import { useRouter } from 'next/router';
import batchEventTracker from '@/lib/BatchEventTracker/BatchEventTracker';
import TestSeriesModeModal from '@/widgets/TestSeriesDetails/TestSeriesModeModal';
import { ITestSeriesMeta } from '@/api/interfaces/test-series';
import { Description } from '@radix-ui/react-dialog';
import HtmlContentWidget from '@/widgets/HtmlContentWidget/HtmlContentWidget';

interface TestSeriesCardProps {
  thumbnail?: string,
  title: string,
  usedFor?: string,
  meta?: ITestSeriesMeta[]
  startDate?: string,
  language?: string,
  endDate?: string,
  amount?: number,
  updatedAmount?: number,
  fromDetails?: boolean,
  discount?: number,
  buyNowLink?: string,
  mode?: 'Online' | 'Offline' | null,
  whatsappLink?: string,
  label?: string,
  page_source?: string;
  testSeriesId?: string;
}

export default function TestSeriesCard({
                                         mode,
                                         amount,
                                         updatedAmount,
                                         discount,
                                         title,
                                         label,
                                         startDate, endDate,
                                         whatsappLink,
                                         usedFor,
                                         thumbnail,
                                         buyNowLink,
                                         meta,
                                         language,
                                         fromDetails,
                                         page_source,
                                         testSeriesId = '',
                                       }: TestSeriesCardProps) {

  const encodedUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    return encodeURIComponent(window.location.origin + whatsappLink);
  }, [whatsappLink]);
  const features = (meta && meta.filter((m) => m.text).slice(0, 3)) || [];
  const router = useRouter();
  const getClassAndExam = router.asPath.split('/');

  const handleExploreGaEvent = (batch_name: string, amount: number | undefined, updatedAmount: number | undefined, exam: string, classname: string) => {
    batchEventTracker.batchCardExploreClick(batch_name, mode, amount, updatedAmount, testSeriesId, exam, classname);
  };
  const handleBuyNowGaEvent = (batch_name: string, amount: number | undefined, updatedAmount: number | undefined, exam: string, classname: string) => {
    batchEventTracker.pwliveBuynowClick(batch_name, mode, amount, updatedAmount, testSeriesId, exam, classname, (page_source ? page_source : ''));
  };
  return <div
    className={cn(' w-full p-[1px] rounded-md bg-gradient-to-b from-blue-500 to-white', styles.commonItemCardWrapper, {
      [styles.commonItemCardWrapperOnline]: mode === 'Online',
      [styles.commonItemCardWrapperOffline]: mode === 'Offline',
    })}>
    <div className={cn(' bg-white w-full rounded-md p-3 space-y-2 relative')}>
      {
        mode && <Image src={mode === 'Online' ? OnlineTag.src : OfflineTag.src} alt={mode}
                       className={'absolute -left-2.5 -top-2.5 w-[100px] h-10'} />
      }
      <div className={'flex item' +
        's-start gap-2 !mt-2'}>
        <h4 className={'md:text-lg h-[56px] line-clamp-2 font-semibold flex-1'}>
          {title}
        </h4>
        {
          label &&
          <Badge className={'rounded mt-1 bg-[#FBDE47] text-black hover:bg-[#FBDE47] select-none'}>{label}</Badge>
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
      <div className={'flex flex-col gap-1 h-[84px]'}>
        {
          features?.length > 0 &&
          <div className={'flex gap-1.5 flex-col line-clamp-1 text-xs items-center  text-light font-semibold'}>
            {
              features.map((m, index) => {
                return <div key={index} className={'flex gap-2 py-1 h-[24px] overflow-hidden items-center'}>
                  <Star className={'w-4 min-w-4 h-4 fill-amber-500 line-clamp-1 stroke-amber-500 stroke-2'} />
                  <span key={index}
                        className={'line-clamp-1'}>{m.text ? <HtmlContentWidget content={m.text} /> : ''
                  } {m.text?.toLowerCase().replace(/_/g, ' ')} </span>
                </div>;
              })
            }
          </div>
        }
      </div>
      <div className={'border-t pt-3 !mt-3 h-[42px]'}>
        <PriceDisplay amount={amount} discount={discount} total={updatedAmount} />
      </div>
      <div className={'flex gap-2 !mt-3'}>
        {
          !fromDetails &&
          <TestSeriesModeModal trigger={<Button
            onClick={() => handleExploreGaEvent(title, amount, updatedAmount, (getClassAndExam[2] ? getClassAndExam[2] : ''), (getClassAndExam[3] ? getClassAndExam[3].split('?')[0] : ''))}
            variant={'outline'} className={'w-full border-primary text-primary'}>EXPLORE</Button>} />
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
