import PwLogoInverted from '@/assets/images/pw-logo.webp';
import { Image } from '@/components/ui/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ITopMenuItem } from '@/api/interfaces/page';
import { ChevronDownIcon, ChevronRightIcon, LinkIcon, MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useGlobal } from '@/contexts/global';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/common/Layout/Sidebar';

interface NavbarProps {
  items?: ITopMenuItem[];
}

const MenuItem = ({ item }: { item: ITopMenuItem }) => {
  const link = item.menuRedirectionUrl || '';
  const isExternal = link?.includes('https');
  const hasSubmenu = item?.menuItems?.length > 0;
  const [hovered, setHovered] = useState(false);
  const [hoveredChild, setHoveredChild] = useState(item.menuItems[0]);
  if (hasSubmenu) {
    return <>
      <div onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}
           className={'px-1 flex flex-col items-center justify-center relative'}>
        <Button className={'h-[44px]'} variant={'outline'}>
          <span className={'text-primary'}>{item.menuTitle}</span> <ChevronDownIcon size={20}
                                                                                    className={'ml-1 stroke-primary'} />
        </Button>
        <div
          className={cn('bg-zinc-100 h-0 max-w-5xl  w-0 transition-opacity duration-200 overflow-hidden opacity-0 absolute top-[80px] left-0 z-[10] rounded-b card-shadow', {
            'flex w-[900px] h-auto opacity-100 ': hovered,
          })}>
          <div className={'w-[360px] bg-white h-full'}>
            {
              item.menuItems?.map((subItem, index) => {
                const active = hoveredChild?.menuTitle === subItem.menuTitle;
                return (
                  <div key={index}
                       onMouseEnter={() => setHoveredChild(subItem)}
                       className={cn('flex group hover:bg-zinc-100 gap-2 transitionAll200 items-center justify-between px-4 py-3', {
                         'bg-zinc-100': active,
                       })}>
                    <Link href={subItem.menuRedirectionUrl || '#'}
                          target={subItem.menuRedirectionUrl?.includes('https') ? '_blank' : '_self'}
                          className={'items-center gap-2'}>
                      <span className={'font-medium'}>{subItem.menuTitle}</span>
                      <div
                        className={'text-xs text-zinc-500 font-medium line-clamp-2'}>{subItem.menuItems?.map((m) => m.menuTitle).join(', ')}</div>
                    </Link>
                    <div className={cn('min-w-5 group-hover:translate-x-1/2 transitionAll200', {
                      'translate-x-1/2': active,
                    })}>
                      <ChevronRightIcon className={'w-5 h-5'} />
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className={'flex-1 bg-zinc-100 h-full p-4 relative'}>
            {
              hoveredChild && <div
                key={hoveredChild.menuTitle}
                className={cn('animate-in  gap-4 slide-in-from-left-2 fade-in duration-500 grid grid-cols-2', { 'opacity-0': !hovered })}>
                {hoveredChild.menuItems?.map((_, index) => {
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
          </div>
        </div>
      </div>
      <div
        className={cn('fixed opacity-0 top-[80px] left-0 right-0 bottom-[100vh] overflow-hidden bg-zinc-800/60 backdrop-blur', {
          'block bottom-0 opacity-100': hovered,
        })}>

      </div>
    </>;
  }
  return <Link href={link}
               target={isExternal ? '_blank' : '_self'}
               className={'flex flex-col items-center hover:bg-primary/10 transitionAll200 justify-center px-2 font-semibold cursor-pointer'}>
    {item.menuTitle}
  </Link>;
};

export function Navbar({ items }: NavbarProps) {
  const { isSidebarOpen, toggleSidebar } = useGlobal();
  const handleLogin = () => {
    window.open('/study/auth/', '_self');
  };
  return (
    <>
      <div
        className={'fixed z-[2] top-0 left-0 flex items-center right-0 bottom-0 h-[60px] md:h-navbar bg-white shadow'} />
      <nav
        className={'fixed z-[20] top-0 left-0 flex items-center right-0 bottom-0 h-[60px] md:h-navbar bg-white'}>
        <div className={'container h-full flex justify-between items-center'}>
          <div className={'flex md:gap-2 h-full items-center'}>
            <div className={'md:hidden flex flex-col items-center'}>
              <Sheet>
                <SheetTrigger>
                  <MenuIcon className={'w-7 mr-3 h-7'}
                            onClick={() => toggleSidebar(!isSidebarOpen)} /></SheetTrigger>
                <SheetContent side={'left'} className="w-full p-0 md:hidden ">
                  <Sidebar handleLogin={handleLogin} items={items} />
                </SheetContent>
              </Sheet>
            </div>
            <Link href={'/'} className={'pr-3 h-full flex flex-col items-center justify-center'}>
              <Image className={'w-[35px] md:w-[55px]'} alt={'PW Logo'} src={PwLogoInverted.src} />
            </Link>
            <div className={' gap-1 h-full hidden md:flex'}>
              {
                items?.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))
              }
            </div>
          </div>
          <Button onClick={handleLogin} className={'hidden md:block'} size={'lg'}>
            Login/Register
          </Button>
          <Button onClick={handleLogin} className={'md:hidden'}>
            Login/Register
          </Button>
        </div>
      </nav>
    </>
  );

}
