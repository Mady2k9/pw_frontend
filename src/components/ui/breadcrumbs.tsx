import Link from "next/link";
import HomeIcon from "@/assets/icons/home-icon.webp";
import {Image} from "@/components/ui/image";
import {cn} from "@/lib/utils";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

export interface BreadcrumbsProps {
    items: { label: string, link?: string }[]
}

export function Breadcrumbs({items}: BreadcrumbsProps) {
    return <div className={' flex space-x-1.5 items-center font-medium'}>
        <Link href={'/'}>
            <div className={''}>
                <Image alt={'home'} src={HomeIcon.src} className={'w-3'}/>
            </div>
        </Link>
        <ChevronRightIcon className={'w-4'}/>
        {
            items.map((item, index) => {
                return <Link href={item.label || '#'} key={index}>
                    <div key={index}
                         className={cn('text-sm cursor-pointer', {'text-primary': index === items.length - 1})}>
                        {item.label}
                    </div>
                </Link>
            })
        }
    </div>
}
