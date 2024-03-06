import { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from '../../Atoms/Image/Image';
import AboutBgImage from '../../../../assets/Images/aboutus-banner.webp';
import knowMore from '../../../../assets/Images/know_more.webp';

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const scrollableRef = useRef(null);
  const handleWheel = () => {
    setIsOpen(false);
    window.scrollBy({
      top: 10,
      left: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('about-us');
      if (element) {
        element.addEventListener('wheel', handleWheel);
      }

      return () => {
        if (element) {
          element.removeEventListener('wheel', handleWheel);
        }
      };
    }, 100);
  }, [isOpen]);
  

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-60 inset-0 overflow-y-auto"
      >
        <div
          className="flex h-screen overflow-auto"
          ref={scrollableRef}
          id="about-us"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="transition-opacity ease-out duration-1000"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-70 fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-1000 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-1000 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`flex flex-col justify-center bg-cover md:bg-center md:bg-no-repeat z-80
                          w-full h-[100%] p-6 text-center`}
              style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 76%), rgb(0 0 0 / 84%)),url(${AboutBgImage.src})`,
              }}
            >
              <div className="font-[700] text-[10px] md:text-[12px] md:leading-[18px] self-center mx-auto align-middle md:p-2 md:px-4 px-[12px] py-[6px] rounded-[100px] bg-white mt-48 mb-4">
                ABOUT PW
              </div>

              <div className="font-[500] text-[16px] leading-[24px] md:text-[30px] md:leading-[48px] text-white">
                Padh Lo Chahe Kahin Se
              </div>
              <h1 className="font-[500] text-[24px] leading-[32px] md:text-[60px] md:leading-[80px] text-white">
                <span className="text-[#B2A9FF]">Manzil</span> Milegi Yahin Se
              </h1>
              <div className="pt-6 md:font-[400] font-[400] text-sm md:text-[18px] md:leading-[28px] text-[#C1C6CE] mx-auto md:max-w-4xl w-full">
                PW(Physics Wallah) is student’s lifelong learning partner that
                is democratizing education at scale in India, with a presence
                spanning online, offline, and hybrid modes, reaching 98% of
                India`s pin codes. PW has more than 10 million paid students on
                the PW App. PW also provides quality education to more than 36
                million students through its 80 YouTube channels in 8 vernacular
                languages
              </div>
              <div
                className="self-center md:mt-10 md:pt-16 pt-20 pb-16 "
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex justify-center">
                  <Image
                    bgImagetitle={knowMore.src}
                    className={`h-[40px] w-[40px] md:h-[45px] md:w-[45px] bg-center bg-no-repeat bg-contain animate-bounce`}
                  />
                </div>
                <div className="font-[400] text-sm md:text-[16px] md:leading-[28px] text-white ">
                  Know more about PW
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
