import {Image} from "@/components/ui/image";
import Logo from "@/assets/images/pw-logo.webp"
import Link from "next/link";
import PlaystoreDownload from '@/assets/icons/google-play-badge.webp';
import AppstoreDownload from '@/assets/icons/apple-store-badge.webp';
import {soicalMediaData} from "@/lib/constants";

interface FooterProps {
}

export function Footer({}: FooterProps) {
    const items = [{
        name: 'Company',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }, {
        name: 'Links',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }, {
        name: 'Company',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }, {
        name: 'Links',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }, {
        name: 'Company',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }, {
        name: 'Links',
        children: [{
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }, {
            name: 'item 1',
        }, {
            name: 'item 2',
        }]
    }]
    return (
        <footer className={'bg-[#F8F8F8] mt-8 md:mt-12'}>
            <div className={'container'}>
                <div className={'py-4 md:py-8 flex flex-col md:flex-row gap-4 md:gap-6'}>
                    <div className={'max-w-[400px] lg:max-w-[448px]'}>
                        <div className={'flex items-center gap-2 md:gap-3'}>
                            <Image src={Logo.src} alt={'Physics Wallah'} className={'w-[38px]'}/>
                            <span className={'text-lg font-bold'}>Physics Wallah</span>
                        </div>
                        <p className={'text-sm font-medium text-light mt-4'}>
                            We understand that every student has different needs and capabilities, which is why we
                            create
                            such a
                            wonderful and unique curriculum that is the best fit for every student.
                        </p>
                        <div className={'flex gap-2  md:mt-5'}>
                            <Link href={'https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala'}>
                                <Image className={'w-[135px]'} src={PlaystoreDownload.src}
                                       alt={'Download App from Google Play store'}/>
                            </Link>
                            <Link href={'https://apps.apple.com/in/app/physics-wallah/id1641443555'}>
                                <Image className={'w-[120px]'} src={AppstoreDownload.src}
                                       alt={'Download App from App store'}/>
                            </Link>
                        </div>
                        <div className={' mt-4 md:mt-5'}>
                            <h3 className={'text-lg md:text-xl font-semibold'}>Let’s get social</h3>
                            <div className={'flex gap-2 mt-2'}>
                                {
                                    soicalMediaData.map((item, index) => {
                                        return <Link href={item.url} target={'_blank'} key={index}>
                                            <Image src={item.image} className={'w-[24px] h-[24px]'}/>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={'flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                        {
                            items.map((item, index) => (
                                <div key={index}>
                                    <h3 className={'text-lg md:text-xl font-semibold capitalize'}>{item.name}</h3>
                                    <ul className={'mt-2'}>
                                        {
                                            item.children.map((child, index) => (
                                                <li key={index}>
                                                    <Link href={'#'}
                                                          className={'text-sm text-lighter capitalize font-medium block mt-1'}>{child.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );

}
