import React from 'react';
import Image from '../../Atoms/Image/Image';
import MaleIcon from '../../../../assets/Images/male.webp';
import CallIcon from '../../../../assets/Images/call_4x.webp';
import CrossIcon from '../../../../assets/Images/cross_4x.webp';
import Style from './PhoneIcon.module.css';

const DynamicCounselling = dynamic(() => import('./Counseller'), {
  ssr: false,
});
import dynamic from 'next/dynamic';
import eventTracker from '../../EventTracker/eventTracker';

export default function PhoneIcon({ page_source }: { page_source?: string }) {
  const [open, setOpen] = React.useState<boolean | null>(null);
  const handlOnClick = () => {
    if (!open && page_source) {
      eventTracker.callCtaClick(page_source, 7019243492);
    }
    setOpen(!open);
  };
  return (
    <div className="cursor-pointer  md:right-6 right-[10px] z-20 bottom-[10px] fixed  rounded-md max-w-sm">
      <div
        className={
          'md:h-[64px] relative md:w-[64px] w-10 h-10 rounded-full bg-[#4437B8] p-3 md:p-4'
        }
        onClick={handlOnClick}
      >
        <div className={'relative w-full h-full'}>
          <Image
            bgImagetitle={CrossIcon.src}
            className={`absolute duration-500 transition-all bg-center bg-no-repeat bg-contain  ${
              open
                ? 'rotate-180 left-0 right-0 bottom-0 top-0 md:top-2 md:left-2 md:right-2 md:bottom-2 opacity-100'
                : 'rotate-0  left-0 right-0 bottom-0 top-0 opacity-0'
            }`}
          />
          <Image
            bgImagetitle={CallIcon.src}
            className={`absolute left-0 duration-500 transition-all right-0 bottom-0 top-0 bg-center  bg-no-repeat bg-contain  ${
              open
                ? 'rotate-180  left-0 right-0  bottom-0 top-0 md:top-2 md:left-2 md:right-2 md:bottom-2  opacity-0 '
                : 'rotate-0 left-0 right-0  bottom-0 top-0 opacity-100 '
            }`}
          />
        </div>
      </div>
      {
        <div
          className={`bottom-[50px] right-[10px] md:right-0 md:bottom-[80px]  ${
            Style.phoneBox
          } ${open && Style.phoneBoxActive} ${
            open === false && Style.phoneBoxInActive
          }`}
        >
          <DynamicCounselling
            mainTitle={'Talk to a counsellor'}
            popDesciptions={
              'Have doubts? Our support team will be happy to assist you! '
            }
            popImage={`${MaleIcon.src}`}
            popNumber={'7019243492'}
          />
        </div>
      }
      {/*<Popover className="relative">*/}
      {/*    {({open}) => (*/}
      {/*        <>*/}
      {/*            <Popover.Button*/}
      {/*                className={`*/}
      {/*    ${open ? 'text-white' : 'text-white/90'}*/}
      {/*    group inline-flex items-center ring-0 outline-0 outline-dashed`}>*/}
      {/*               */}
      {/*            </Popover.Button>*/}
      {/*            <Transition*/}
      {/*                as={Fragment}*/}
      {/*                enter="transition ease-out duration-300"*/}
      {/*                enterFrom="opacity-0 translate-y-7 translate-x-7"*/}
      {/*                enterTo="opacity-100 translate-y-0 translate-x-0"*/}
      {/*                leave="transition ease-in duration-150"*/}
      {/*                leaveFrom="opacity-100 translate-y-0 "*/}
      {/*                leaveTo="opacity-0 translate-y-3 translate-x-3"*/}
      {/*            >*/}
      {/*                <Popover.Panel*/}
      {/*                    className="absolute  mx-4 md:-right-[15px] -right-[25px]  md:bottom-[85px] bottom-[55px] z-10 max-w-sm  transform px-4 sm:px-0 lg:max-w-3xl">*/}
      {/*                    <DynamicCounselling*/}
      {/*                        mainTitle={'Talk to a counsellor'}*/}
      {/*                        popDesciptions={*/}
      {/*                            'Have doubts? Our support team will be happy to assist you! '*/}
      {/*                        }*/}
      {/*                        popImage={`${MaleIcon.src}`}*/}
      {/*                        popNumber={'7019243492'}*/}
      {/*                    />*/}
      {/*                </Popover.Panel>*/}
      {/*            </Transition>*/}
      {/*        </>*/}
      {/*    )}*/}
      {/*</Popover>*/}
    </div>
  );
}
