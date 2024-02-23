import React, { memo } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import MenuIcon from '@heroicons/react/20/solid/Bars3Icon';
import Image from '../../Atoms/Image/Image';
import PwLogo from '../../../../assets/Images/pw-logo.webp';
import PwLogoInverted from '../../../../assets/Images/pw-logo-inverted.webp';
import Link from 'next/link';
import Modal from '../Modal/Modal';

const headerdata = [
  {
    tabs: 'About Us',
    url: ''
  },
  {
    tabs: 'Curriculum',
    url: '/school-curriculum'
  },
  {
    tabs: "Teacher's Training",
    url: '',
  },
  {
    tabs: "Contact Us",
    url: ""
  }
]
export interface headerProps {
 
  showAboutUs?: boolean;
  redirectionUrl?: string;
}
export type ToggleMenuFunction = () => void;
const Header: React.FC<headerProps> = ({
  showAboutUs,
}) => {
  const [open, setOpen] = useState(false);
  const toggleMenu: ToggleMenuFunction = () => {
    setOpen(!open);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isCardVisible, setCardVisible] = useState(false);
  const handleLinkClick = (index: number) => {
    if (headerdata[index].tabs === 'Curriculum') {
      setCardVisible(true);
    } else {
      setCardVisible(false);
    }
  };
  return (
    <>
      <div
        className={`sticky top-0 w-full ${
          showAboutUs ? 'bg-transparent border-none ' : ' bg-white'
        } border-b-[1px] ${open ? '' : 'z-40'}`}
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(isOpen)}
      >
        <div className={'flex justify-center'}>
          <nav className=" flex w-full items-center max-w-6xl justify-between h-[60px] sm:h-[80px] px-4 xl:px-0 ">
            <div className="flex items-center gap-5 ">
              <div className="flex gap-[16px] items-center ">
                <div
                  className="lg:hidden w-[32px] h-[32px] cursor-pointer"
                  onClick={toggleMenu}
                >
                  <MenuIcon fill={`${showAboutUs ? 'white' : ' black'}`} />
                </div>
                <a href="https://pw.live" aria-label="pw-logo">
                  <Image
                    bgImagetitle={
                      showAboutUs ? `${PwLogoInverted.src}` : `${PwLogo.src}`
                    }
                    className={
                      'w-[40px] h-[40px] xl:w-[52px] xl:h-[55px] lg:w-[52px] lg:h-[55px] md:w-[42px] md:h-[41px] bg-center bg-no-repeat bg-contain'
                    }
                  />
                </a>
              </div>
              <div className="hidden lg:inline-block">
                <div className="flex items-center  gap-3.5 ml-4">
                School Curriculum
                </div>
              </div>
             
            </div>
            
            <div className="flex gap-2">
              
            {headerdata.map((item, index) => (
                <div key={index} className="hidden lg:inline-block">
                  <div className="flex items-center gap-3.5 ml-4 font-semibold text-base">
                    <span
                      className="hover:bg-[#FFF0E7] transition-all duration-200 cursor-pointer flex items-center h-[80px] p-2.5">
                      <Link href={item.url} onClick={() => handleLinkClick(index)}>
                        {item.tabs}
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
              {isCardVisible && <Modal />}
            </div>
          </nav>
        </div>
        {/* Mobile Nav */}
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
                    {headerdata.map((item, index) => (
                            <div key={index} className="flex  justify-between items-center border-b-[1px] border-[#D9DCE1] p-4 cursor-pointer">
                              <div className="font-semibold text-base text-[#1B2124]">
                              {/* <span
                      className="hover:bg-[#FFF0E7] transition-all duration-200 cursor-pointer flex items-center h-[80px] p-2.5"> */}
                               <Link href={item.url} onClick={() => handleLinkClick(index)}>
                               {item.tabs}

                                </Link> 
                               {/* </span>  */}
                              </div>
                            </div>
                          ))}
                          {isCardVisible && <Modal />}
                        
                    <div className="absolute bottom-0 w-full flex justify-center p-4">
                     
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
