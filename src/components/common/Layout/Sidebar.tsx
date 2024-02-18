import { Image } from '@/components/ui/image';
import PwLogoInverted from '@/assets/images/pw-logo.webp';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ITopMenuItem } from '@/api/interfaces/page';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface NavbarProps {
  items?: ITopMenuItem[];
}

export default function Sidebar({ items }: NavbarProps) {
  const [selectedSubItem, setSelectedSubItem] = useState<ITopMenuItem | null>(null);
  const [expandedItemIndex, setExpandedItemIndex] = useState<number>(-1);
  return (
    <div className={'flex flex-col h-full md:hidden'}>
      <div className={'h-[60px] relative animationFromTop delay-100 px-4 flex items-center'}>
        <Link href={'/'}
              className={cn('absolute transitionAll200 top-0 bottom-0 pr-3 h-full flex flex-col items-center justify-center', {
                'left-4': selectedSubItem === null,
                '-left-10': selectedSubItem,
              })}>
          <Image className={'w-[35px] md:w-[55px]'} alt={'PW Logo'} src={PwLogoInverted.src} />
        </Link>
        <div onClick={() => {
          setSelectedSubItem(null);
        }} className={cn('flex transitionAll200 gap-1 items-center absolute top-0 bottom-0', {
          'left-[100vw] opacity-0': selectedSubItem === null,
          'left-2 opacity-100': selectedSubItem,
        })}>
          <ChevronLeftIcon className={'w-6 h-6'} /> <span
          className={'text-lg font-medium'}>{selectedSubItem?.menuTitle}</span>
        </div>
      </div>
      <div className={'flex-1 relative'}>
        <div
          className={cn('overflow-y-auto flex flex-col transitionAll200 scrollbar-hide absolute left-0 right-0 bottom-0 top-0', {
            '-left-[100vw] opacity-0': selectedSubItem,
            'left-0 opacity-100': selectedSubItem === null,
          })}>
          {
            items?.map((item, index) => {
              const isExternal = item.menuRedirectionUrl?.includes('https');
              if (item.menuItems?.length) {
                return <div key={index}
                            onClick={() => setSelectedSubItem(item)}
                            className={'py-3 flex items-center justify-between px-4 border-b text-lg font-medium'}>
                  <span>{item.menuTitle}</span> <ChevronRightIcon className={'w-5 h-5'} />
                </div>;
              }
              return <Link href={item.menuRedirectionUrl || ''} target={isExternal ? '_blank' : '_self'} key={index}
                           className={'py-3 px-4 border-b text-lg font-medium'}>{item.menuTitle}</Link>;
            })
          }
        </div>
        <div
          className={cn('overflow-y-auto flex flex-col transitionAll200 scrollbar-hide absolute w-[100vw] bottom-0 top-0', {
            'left-[100vw] opacity-0': selectedSubItem === null,
            'left-0 opacity-100': selectedSubItem,
          })}>
          <Accordion type="single" collapsible>
            {

              selectedSubItem?.menuItems?.map((subItem, index) => {
                const expandedItem = subItem
                return <AccordionItem value={index + ''}
                                      className={cn('py-3 border-b overflow-hidden',{
                                        'bg-zinc-100': expandedItemIndex === index,
                                      })} key={index}>
                  <AccordionTrigger className={'px-4 py-0'}>
                    <div key={index}
                         onClick={() => setExpandedItemIndex(expandedItemIndex === index ? -1 : index)}
                         className={'flex group gap-2 transitionAll200 items-center justify-between'}>
                      <div
                        className={'text-start gap-2'}>
                        <span className={'font-medium'}>{subItem.menuTitle}</span>
                        <div
                          className={'text-xs text-zinc-500 font-medium line-clamp-2'}>{subItem.menuItems?.map((m) => m.menuTitle).join(', ')}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className={'p-4'}>
                    {
                      expandedItem && <div
                        key={expandedItem.menuTitle}
                        className={cn('animate-in  gap-4 slide-in-from-left-2 fade-in duration-500 grid grid-cols-2',)}>
                        {expandedItem.menuItems?.map((_, index) => {
                          return <div key={index}
                                      className={'card-shadow border border-transparent transitionAll200  hover:border-zinc-400 bg-white flex rounded-md'}>
                            <Link href={_.menuRedirectionUrl || '#'}
                                  target={_.menuRedirectionUrl?.includes('https') ? '_blank' : '_self'}
                                  className={'flex gap-2 px-4 py-3  items-center'}>
                              {
                                _.menuIcon ? <Image src={_.menuIcon} className={'w-[30px] h-[30px]'}
                                                    alt={'menu icon'} /> :
                                  <div className={'p-2 rounded-full bg-gray-100'}>
                                    <LinkIcon className={'w-[20px] h-[20px]'} />
                                  </div>
                              }
                              <span className={'font-medium text-sm'}>{_.menuTitle}</span>
                            </Link>
                          </div>;
                        })}
                      </div>
                    }
                  </AccordionContent>
                </AccordionItem>
              })
            }
          </Accordion>
        </div>
      </div>
      <div className={'p-4 animationFromBottom delay-100'}>
        <Button className={'w-full'}>Login/Register</Button>
      </div>
    </div>
  );
}
