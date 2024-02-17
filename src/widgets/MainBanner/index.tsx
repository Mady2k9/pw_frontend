import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Image} from "@/components/ui/image";
import Link from "next/link";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface MainBannerProps {
    items: { image: string, mWebImage: string, alt: string, link?: string }[];
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    stretched?: boolean;
}

export function MainBanner({items, stretched, leftIcon, rightIcon}: MainBannerProps) {
    return (
        <Carousel className="w-full relative" opts={{loop: true}}>
            <CarouselContent className={''}>
                {items.map((_, index) => (
                    <CarouselItem key={index} className={''}>
                        <Link href={_.link || '/'}>
                            <Image alt={_.alt} src={_.image} className={'hidden  md:block w-full'}/>
                            <Image alt={_.alt} src={_.mWebImage} className={'md:hidden  w-full'}/>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {
                leftIcon ? <div className={'absolute left-0 top-0 bottom-0'}>
                    {leftIcon}
                </div> : <CarouselPrevious className={cn({
                    '-left-4': stretched != true,
                    'left-3': stretched == true,
                })}/>
            }
            {
                rightIcon ? <div className={'absolute right-0 top-0 bottom-0'}>
                    {rightIcon}
                </div> : <CarouselNext className={cn({
                    '-right-4': stretched != true,
                    'right-3': stretched == true,
                })}/>
            }


        </Carousel>
    )
}
