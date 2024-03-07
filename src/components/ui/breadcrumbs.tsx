import Link from "next/link";
import {cn} from "@/lib/utils";
import {ChevronRightIcon, HomeIcon} from "lucide-react";

export interface BreadcrumbsProps {
    items: { label: string, link?: string }[];
    inverted?: boolean;
}

export function Breadcrumbs({items, inverted}: BreadcrumbsProps) {
    return <div className={' flex space-x-1.5 items-center font-medium'}>
        <Link href={'/'}>
            <HomeIcon className={cn('w-4 h-4 ', {
                'stroke-white ': inverted,
                'stroke-zinc-800': !inverted,
            })}/>
        </Link>
        <ChevronRightIcon style={{color: '#757575'}} className={cn('w-4 ', {
            'stroke-white': inverted,
        })}/>
        {
            items.map((item, index) => {
                return <div key={index} className={cn('flex items-center space-x-1.5', {
                    'hidden md:flex': index < items.length - 1,
                })}>
                    <Link href={item.link || '#'} key={index}>
                        <div key={index}
                             className={cn('text-xs hover:underline capitalize line-clamp-1 cursor-pointer text-[#757575]', {
                                 'text-white': inverted,
                                 'text-primary': (index === items.length - 1) && !inverted,
                             })}>
                            {item.label}
                        </div>
                    </Link>
                    {
                        index !== items.length - 1 && <ChevronRightIcon style={{color: '#757575'}} className={cn('w-4', {
                            'stroke-white': inverted,
                        })}/>
                    }
                </div>
            })
        }
    </div>
}
