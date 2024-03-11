import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface PageTabItemProps {
  title: string,
  link: string,
  key: string,
}

interface PageTabsProps {
  items: PageTabItemProps[] | undefined
  activeItem?: string,
  className?: string,
  handleClick?: (e: any, item: string) => void
}

export function PageTabs({ items, handleClick, className, activeItem }: PageTabsProps) {
  return (
    <div className={cn('sticky top-[60px] md:top-[80px] z-[3] bg-secondary', className)}>
      <div id={'page-tabs-wrapper'}
           className="container flex space-x-4 md:space-x-8 font-medium  scrollbar-hide overflow-y-auto">
        {
          items?.map((item, index) => {
            const active = activeItem === item.key;
            return <Link key={index} id={`${item.key}-tab`} onClick={(e) => {
              if (handleClick) {
                handleClick(e, item.key);
              }
            }} href={`${item.link}`}
                         className={'text-xs outline-none md:text-base text-[#757575] relative capitalize'}>
              <div className={cn('whitespace-nowrap py-3', {
                'text-primary': active,
              })}>
                {/* {item} */}
                {item.key}
              </div>
              <div
                className={cn('transitionAll200 bg-primary opacity-0 h-1 w-full right-0 rounded-t-md absolute bottom-0 left-0', {
                  'opacity-100': active,
                })} />
            </Link>;
          })
        }
      </div>
    </div>
  );
}
