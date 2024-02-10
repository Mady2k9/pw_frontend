import styles from './BatchCard.module.css';
import {cn} from "@/lib/utils";
import {Image} from "@/components/ui/image";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import WhatsAppIcon from "@/assets/icons/whatsapp.webp";
import PlaceholderImage from "@/assets/images/placeholder-batch.webp";
import OnlineTag from "@/assets/images/onlineTag.webp";
import OfflineTag from "@/assets/images/offlineTag.webp";
interface BatchCardProps {
    thumbnail?: string,
    title: string,
    usedFor?: string,
    meta?: { key: string, value?: string, }[]
    startDate?: string,
    endDate?: string,
    amount?: number,
    updatedAmount?: number,
    discount?: number,
    exploreLink?: string,
    buyNowLink?: string,
    isOnline?: boolean,
    whatsappLink?: string,
    isNew?: boolean,
}

export default function BatchCard({isOnline,title,isNew, whatsappLink, thumbnail, exploreLink, buyNowLink}: BatchCardProps) {
    return <div className={cn(' w-full p-[1px] rounded-md bg-gradient-to-b from-blue-500 to-white',styles.batchCardWrapper, {
        [styles.batchCardWrapperOnline]: isOnline,
        [styles.batchCardWrapperOffline]: !isOnline,
    })}>
        <div className={cn(' bg-white w-full rounded-md p-3 space-y-3 relative', )}>
            <Image src={isOnline ? OnlineTag.src: OfflineTag.src} className={'absolute -left-2.5 -top-2 w-[100px] h-10'}/>
            <div className={'flex items-start gap-2'}>
                <h4 className={'md:text-lg font-semibold'}>
                    {title}
                </h4>
                {
                    !isNew && <Badge className={'rounded mt-1 bg-[#FBDE47] text-black hover:bg-[#FBDE47] select-none'}>New</Badge>
                }
                {
                    !whatsappLink && <Image src={WhatsAppIcon.src} alt={'Whatsapp Link'} className={'w-5 cursor-pointer mt-1'}/>
                }
            </div>
            <div className={'aspect-video relative rounded-md overflow-hidden bg-gray-100'}>
                <Image placeholder={PlaceholderImage.src} src={thumbnail || ''} className={'w-full h-full'}/>
                <Badge className={'bg-white text-black absolute left-2 bottom-2 rounded hover:bg-white select-none'}>
                    Hinglish
                </Badge>
            </div>
            <div className={'flex gap-2'}>
                {
                    exploreLink && <Button variant={'outline'} className={'w-full border-primary text-primary'}>
                        EXPLORE
                    </Button>
                }
                {
                    buyNowLink && <Button  className={'w-full'}>
                        BUY NOW
                    </Button>
                }
            </div>
        </div>
    </div>
}
