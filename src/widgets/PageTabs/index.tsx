import bgImage from '@/assets/background-images/course-hero-bg-web.webp';
import bgMWebImage from '@/assets/background-images/course-hero-bg-Mweb.webp';
import {Breadcrumbs} from "@/components/ui/breadcrumbs";
import Link from "next/link";
import {cn} from "@/lib/utils";

export interface PageTabItemProps {
    title: string,
    link: string,
    key: string | number
}

interface PageTabsProps {
    items: PageTabItemProps[],
    activeItem?: PageTabItemProps,
    handleClick?: (e: any, item: PageTabItemProps) => void
}

export function PageTabs({items, handleClick, activeItem}: PageTabsProps) {
    return (
        <div className="sticky top-[60px] md:top-[80px] z-[2] bg-secondary overflow-y-auto">
            <div className="container flex space-x-4 font-medium">
                {
                    items.map((item, index) => {
                        const active = activeItem?.key === item.key;
                        return <Link onClick={(e) => {
                            if (handleClick) {
                                handleClick(e, item);
                            }
                        }} href={item.link}
                                     className={'text-sm text-[#757575] relative'}>
                            <div className={cn(' py-4', {
                                'text-primary': active
                            })}>
                                {item.title}
                            </div>
                            <div
                                className={cn('transitionAll200 bg-primary opacity-0 h-1 w-full right-0 rounded-t-md absolute bottom-0 left-0', {
                                    'opacity-100': active
                                })}/>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
