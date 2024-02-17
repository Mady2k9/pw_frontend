import styles from './DownloadAppBanner.module.css';
import {cn} from "@/lib/utils";
import {Image} from "@/components/ui/image";
import Link from "next/link";

export default function DownloadAppBanner({config}: { config: any }) {
    if (!config) {
        return <></>
    }
    return <div className={'container'}>
        <div style={{background: config.backGroundColor}}
             className={cn('overflow-hidden flex-col md:flex-row items-center flex rounded-lg', styles.wrapper)}>
            <div className={'p-4 md:p-10  flex-1'}>
                <h2 className={'text-2xl md:text-4xl font-bold mb-4'}>{config.sectionTitle}</h2>
                <div className={'flex flex-col space-y-2 mb-2'}>
                    <div dangerouslySetInnerHTML={{__html: config.sectionSubTitle}}/>
                </div>
                <div className={'flex gap-2 items-center justify-center md:justify-start md:mt-5'}>
                    {
                        config.sectionProps.appDownloadOption?.map((item: any, index: number) => {
                            return <Link key={index} href={item.redirectionUrl}>
                                <Image className={'w-[135px]'} src={item.image}
                                       alt={'Download App'}/>
                            </Link>
                        })
                    }
                </div>
            </div>
            <div className={'w-[300px] md:pt-10 md:pr-5 relative flex flex-col justify-end'}>
                <div className={'pt-4 px-4 mx-auto'}>
                    <Image src={config.sectionProps?.mwebImage} alt={'download app'} className={'md:hidden'}/>
                    <Image src={config.sectionProps?.dwebImage} alt={'download app'} className={'hidden md:block'}/>
                </div>
            </div>

        </div>
    </div>
}
