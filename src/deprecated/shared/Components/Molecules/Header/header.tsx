import React, { memo, useEffect, useRef } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import MenuIcon from '@heroicons/react/20/solid/Bars3Icon';
import { HeaderItemsData } from './HeaderType.d';
import Image from '../../Atoms/Image/Image';
import NestedDropDownWeb from './NestedDropDownWeb';
import FirstLevelTransitionMweb from './FirstLevelTransitionMweb';
import LoginButton from '../../Atoms/LoginButton/LoginButton';
import eventTracker from '../../EventTracker/eventTracker';
import PwLogo from '../../../../assets/Images/pw-logo.webp';
import Profile from '@/deprecated/shared/Admitcard/components/Profile';
import PwLogoInverted from '../../../../assets/Images/pw-logo-inverted.webp';
import Drawer from '../../Components/Drawer/Drawer';
import Link from 'next/link';

export interface headerProps {
  showLogin?: boolean;
  headerData: HeaderItemsData[];
  showAboutUs?: boolean;
}

export type ToggleMenuFunction = () => void;
const Header: React.FC<headerProps> = ({
  showLogin,
  headerData,
  showAboutUs,
}) => {
  const greatPlaceRef = useRef(null);
  //const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(false);
  //const [headerData, setHeaderData] = useState<HeaderItemsData[]>();
  // const useCache = useChacheDemo();
  // useEffect(() => {
  //   setHeaderData(useCache.headerData?.data);
  // }, [useCache?.headerData?.data]);
  if (!headerData) {
    return <></>;
  }
  const toggleMenu: ToggleMenuFunction = () => {
    setOpen(!open);
  };
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setIsInViewport(true));
      }
    });
  };
  const [isInViewport, setIsInViewport] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) setIsOpen(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (greatPlaceRef.current) {
      observer.observe(greatPlaceRef.current);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const eventTrigger = (cta_name: string, page_source: string) => {
    eventTracker.topNavigationClick(cta_name, page_source);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {showAboutUs && (
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
        ></Drawer>
      )}
      <div
        className={`sticky top-0 w-full ${
          showAboutUs && isOpen ? 'bg-transparent border-none ' : ' bg-white'
        } border-b-[1px] ${open ? '' : 'z-40'}`}
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(isOpen)}
      >
        <div className={'flex justify-center'}>
          <nav
            className={` flex w-full items-center max-w-6xl justify-between h-[60px] sm:h-[80px] px-4 xl:px-0`}
          >
            <div className="flex items-center gap-5 ">
              {
                headerData?.length > 0 && <div className="flex gap-[16px] items-center ">
                  <div
                    className="lg:hidden w-[32px] h-[32px] cursor-pointer"
                    onClick={toggleMenu}
                  >
                    <MenuIcon />
                  </div>
                  <Link href="https://pw.live" aria-label="pw-logo">
                    <Image
                      bgImagetitle={`${PwLogo.src}`}
                      className={
                        'w-[40px] h-[40px] xl:w-[52px] xl:h-[55px] lg:w-[52px] lg:h-[55px] md:w-[42px] md:h-[41px] bg-center bg-no-repeat bg-contain'
                      }
                    />
                  </Link>
                </div>
              }
              <div className="hidden lg:inline-block">
                <div className="flex items-center  gap-3.5 ml-4">
                  {headerData &&
                    headerData?.map((data: HeaderItemsData) =>
                      data?.menuItems?.length > 0 ? (
                        <NestedDropDownWeb key={data._id} item={data} />
                      ) : (
                        <a
                          key={data?.menuRedirectionUrl}
                          href={data?.menuRedirectionUrl}
                        >
                          <span
                            className={`${
                              showAboutUs && isOpen ? '' : 'hover:bg-[#F1EFFF]'
                            } transition-all duration-200 cursor-pointer flex items-center h-[80px] p-2.5`}
                            onClick={() =>
                              eventTrigger(data?.menuTitle, 'home_page')
                            }
                          >
                            <div
                              className={`font-semibold text-base ${
                                showAboutUs && isOpen
                                  ? 'text-white '
                                  : 'text-[#1B2124]'
                              } `}
                            >
                              {data?.menuTitle}
                            </div>
                          </span>
                        </a>
                      ),
                    )}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {showLogin ? (
                <>
                  <div className="lg:inline-flex">
                    <LoginButton
                      text={'Login/Register'}
                      className={`px-[15px] py-[5px] sm:px-[24px] sm:py-[12px] text-sm sm:text-lg ${showAboutUs ? 'z-80' : ''}`}
                    />
                  </div>
                  
                </>
              ) : (
                <Profile></Profile>
              )}
            </div>
          </nav>
        </div>
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="" onClose={toggleMenu}>
            <div className="fixed inset-0 overflow-y-auto z-20">
              <div className="flex h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-600"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="ease-in duration-600"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="w-[100vw] h-full relative transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all">
                    <div className="flex justify-between px-3 pt-4 pb-2 items-center">
                      <div className="flex items-center">
                      <Link
                          href="/"
                          className="outline-transparent outline-dashed"
                        >
                          <Image
                            bgImagetitle={`${PwLogo.src}`}
                            className={
                              'w-[36px] h-[35px] bg-center bg-no-repeat bg-contain '
                            }
                          />
                        </Link>
                      </div>
                      <span
                        className="w-7 h-7 cursor-pointer"
                        onClick={toggleMenu}
                      >
                        <XMarkIcon />
                      </span>
                    </div>
                    {headerData &&
                      headerData?.map((data: HeaderItemsData) =>
                        data?.menuItems.length > 0 ? (
                          <FirstLevelTransitionMweb
                            key={data._id}
                            data={data}
                            toggleMenu={toggleMenu}
                          />
                        ) : (
                          <a
                            key={data?.menuRedirectionUrl}
                            href={data?.menuRedirectionUrl}
                          >
                            <div className="flex  justify-between items-center border-b-[1px] border-[#D9DCE1] p-4 cursor-pointer">
                              <div className="font-semibold text-base text-[#1B2124]">
                                {data?.menuTitle}
                              </div>
                            </div>
                          </a>
                        )
                      )}
                    <div className="absolute bottom-0 w-full flex justify-center p-4">
                      <LoginButton
                        text={'Login/Register'}
                        className={'px-[24px] w-full py-[12px]'}
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default memo(Header);
