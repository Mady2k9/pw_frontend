import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Image } from '@/components/ui/image';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useGlobal } from '@/contexts/global';
import NextImage from '@/components/ui/next-image';

interface MainBannerProps {
  items: { image: string, mWebImage: string, alt: string, link?: string }[];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  stretched?: boolean;
  autoplayInterval?: number;
}

export function MainBanner({ items, autoplayInterval = 10000, stretched, leftIcon, rightIcon }: MainBannerProps) {
  const { userInteracted } = useGlobal();
  const [_autoplayInterval, setAutoplayInterval] = React.useState(0);
  useEffect(() => {
    if (userInteracted) {
      setTimeout(() => {
        setAutoplayInterval(autoplayInterval);
      }, 1000);
    }
  }, [autoplayInterval, userInteracted]);
  if (!items.length) {
    return <></>;
  }
  return (
    <Carousel className="w-full group relative" opts={{ loop: true }} autoplayInterval={_autoplayInterval}>
      <CarouselContent className={''}>
        {
          items.map((_, index) => (
            <CarouselItem key={index} className={''}>
              {
                (userInteracted || index == 0) ? <Link href={_.link || '/'} className={'h-full'}>
                  <NextImage alt={_.alt || 'banner-image'} src={_.image} className={'hidden md:block h-full w-full'} />
                  <NextImage alt={_.alt || 'banner-image'} src={_.mWebImage} className={'md:hidden h-full w-full'} />
                </Link> : <div className={'w-full h-full'}></div>
              }
            </CarouselItem>
          ))
        }
      </CarouselContent>
      {
        <CarouselPrevious className={cn({
          '-left-4': stretched != true,
          'left-3': stretched == true,
        })}>
          {
            leftIcon && <div
              className={'absolute left-0 top-0 opacity-0 flex flex-col justify-center items-center cursor-pointer group-hover:opacity-100 px-4 transitionAll200 bg-gradient-to-r from-black500  bottom-0'}>
              {leftIcon}
            </div>
          }
        </CarouselPrevious>
      }
      {
        <CarouselNext className={cn({
          '-right-4': stretched != true,
          'right-3': stretched == true,
        })}>
          {
            rightIcon && <div
              className={'absolute opacity-0 group-hover:opacity-100  flex flex-col justify-center items-center cursor-pointer transitionAll200 px-4 bg-gradient-to-l from-black500 right-0 top-0 bottom-0'}>
              {rightIcon}
            </div>
          }
        </CarouselNext>
      }


    </Carousel>
  );
}
