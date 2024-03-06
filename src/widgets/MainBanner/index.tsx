import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Image } from '@/components/ui/image';
import Link from 'next/link';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { useGlobal } from '@/contexts/global';
import NextImage from '@/components/ui/next-image';
import { useRouter } from 'next/router';

interface MainBannerProps {
  items: { image: string, mWebImage: string, alt: string, link?: string, displayOrder: number }[];
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
  const sortedItem = items?.sort((a, b) => a.displayOrder - b.displayOrder);
  if(stretched && !userInteracted){
    return <Link href={sortedItem[0]?.link || '/'}>
      <NextImage
        src={sortedItem[0]?.image}
        alt={sortedItem[0]?.alt || 'banner-image'}
        sizes="100vw"
        loading={'eager'}
        style={{
          width: '100%',
          height: 'auto',
        }}
        className={'hidden md:block'}
        width={'90'}
        height={'17'}
      />
      <NextImage
        src={sortedItem[0]?.mWebImage}
        alt={sortedItem[0]?.alt || 'banner-image'}
        sizes="100vw"
        loading={'eager'}
        style={{
          width: '100%',
          height: 'auto',
        }}
        className={'md:hidden'}
        width={'90'}
        height={'17'}
      />
    </Link>
  }
  return (
    <Carousel className="w-full group relative" opts={{ loop: true }}
              autoplayInterval={_autoplayInterval}>
      <CarouselContent className={''}>
        {
          sortedItem.map((_, index) => (
            <CarouselItem key={index} className={''}>
              {
                 <Link href={_.link || '/'}>
                  <NextImage
                    src={_.image}
                    alt={_.alt || 'banner-image'}
                    sizes="100vw"
                    loading={'eager'}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    className={'hidden md:block'}
                    width={'90'}
                    height={'17'}
                  />
                   <NextImage
                    src={_.mWebImage}
                    alt={_.alt || 'banner-image'}
                    sizes="100vw"
                    loading={'eager'}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    className={'md:hidden'}
                    width={'90'}
                    height={'17'}
                  />
                </Link>
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
