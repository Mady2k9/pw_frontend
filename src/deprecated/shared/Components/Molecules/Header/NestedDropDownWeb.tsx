import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import { HeaderItemsData, MenuItemsData, MenuTitleData } from './HeaderType.d';
import Image from '../../Atoms/Image/Image';
import eventTracker from '../../EventTracker/eventTracker';
import cn from 'clsx';
import DownArrow from '../../../../assets/Images/chevron_down.webp';

const NestedDropDownWeb = ({ item }: { item: HeaderItemsData }) => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);
  const handleDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };
  const subScript = (listItems: MenuItemsData[]) => {
    const itemList = listItems?.map((i: { menuTitle: string }) => i.menuTitle);
    const textToShow = itemList?.join(',  ');
    return (
      <div className="font-medium text-xs text-[#757575]">{textToShow}</div>
    );
  };
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef?.current?.contains(event.target as Node)
      ) {
        setShowDropDownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const batchEventTrigger = (
    exam: string,
    sub_exam: string,
    class_name: string,
    came_from: string
  ) => {
    eventTracker.batchListingVisit(exam, sub_exam, class_name, came_from);
  };

  return (
    <>
      {/*<div*/}
      {/*  className={cn(*/}
      {/*    'transition-opacity duration-200 opacity-0 absolute top-0 left-0 h-0 ',*/}
      {/*    {*/}
      {/*      ' h-screen opacity-70 w-full bg-black  top-[80px] left-0':*/}
      {/*        showDropDownOpen,*/}
      {/*      'overflow-hidden': !showDropDownOpen,*/}
      {/*    }*/}
      {/*  )}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className="relative"*/}
      {/*  ref={componentRef}*/}
      {/*  onMouseEnter={() => setShowDropDownOpen(true)}*/}
      {/*  onMouseLeave={() => setShowDropDownOpen(false)}*/}
      {/*>*/}
      {/*  <button*/}
      {/*    className=" border border-[#5A4BDA] py-[12px] px-[24px] rounded-[6px] flex items-center gap-[6px] justify-center"*/}
      {/*    onClick={handleDropDownOpen}*/}
      {/*  >*/}
      {/*    <span className="text-[#5A4BDA] font-semibold text-base">*/}
      {/*      {item.menuTitle}*/}
      {/*    </span>*/}
      {/*    <span>*/}
      {/*      <Image*/}
      {/*        bgImagetitle={DownArrow.src}*/}
      {/*        className={`w-[20px] h-[20px] mt-0.5 bg-center bg-no-repeat bg-contain ${*/}
      {/*          showDropDownOpen ? 'rotate-180' : ''*/}
      {/*        }`}*/}
      {/*      />*/}
      {/*    </span>*/}
      {/*  </button>*/}
      {/*  <div*/}
      {/*    className={cn(*/}
      {/*      'transition-opacity duration-200 opacity-0 absolute h-0',*/}
      {/*      {*/}
      {/*        'absolute top-[50px] left-[-10px] opacity-100  z-30 h-auto rounded-md bg-[#F8F8F8] flex items-start':*/}
      {/*          showDropDownOpen,*/}
      {/*        'overflow-hidden': !showDropDownOpen,*/}
      {/*      }*/}
      {/*    )}*/}
      {/*    onMouseEnter={() => setShowDropDownOpen(true)}*/}
      {/*    onMouseLeave={() => setShowDropDownOpen(false)}*/}
      {/*  >*/}
      {/*    <div className="flex fle-row">*/}
      {/*      <div className="flex flex-col">*/}
      {/*        {item.menuItems?.map((exam: MenuTitleData, key: number) => (*/}
      {/*          <div*/}
      {/*            key={key}*/}
      {/*            className={`flex flex-col gap-2 hover:bg-[#F8F8F8] transition-all duration-200*/}
      {/*              ${key === 0 ? 'rounded-tl-[6px]' : ''}*/}
      {/*              ${*/}
      {/*                key === item.menuItems.length - 1*/}
      {/*                  ? 'rounded-bl-[6px]'*/}
      {/*                  : ''*/}
      {/*              }*/}
      {/*               ${selectedCourse == key ? 'bg-[#F8F8F8' : 'bg-white'}`}*/}
      {/*            onMouseEnter={() => setSelectedCourse(key)}*/}
      {/*          >*/}
      {/*            <div className="p-4 flex items-center  rounded-md justify-between gap-2.5  w-[360px]">*/}
      {/*              <div className="w-[90%]">*/}
      {/*                <div className="text-[16px] font-[600] leading-[24px] text-[#1B2124]">*/}
      {/*                  {exam.menuTitle}*/}
      {/*                </div>*/}
      {/*                {subScript(exam.menuItems)}*/}
      {/*              </div>*/}
      {/*              <ChevronRightIcon className="h-[20px] w-[20px]" />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        className={`w-[600px] h-[100%] animate-in slide-in-from-left-3 fade-in-5 overflow-y-scroll p-[16px] flex flex-row flex-wrap gap-[12px]  items-start`}*/}
      {/*        key={selectedCourse}*/}
      {/*      >*/}
      {/*        {item.menuItems[selectedCourse].menuItems?.map((cohort) => (*/}
      {/*          <a*/}
      {/*            key={cohort.menuTitle + selectedCourse}*/}
      {/*            onClick={() =>*/}
      {/*              batchEventTrigger(*/}
      {/*                item.menuItems[selectedCourse].menuTitle,*/}
      {/*                cohort?.menuTitle,*/}
      {/*                '',*/}
      {/*                'all_courses'*/}
      {/*              )*/}
      {/*            }*/}
      {/*            href={cohort.menuRedirectionUrl}*/}
      {/*            className=" w-[272px]  duration-500 p-[14px] flex items-center gap-2 bg-white rounded-md shadow-md border transition-all hover:border-black "*/}
      {/*          >*/}
      {/*            <Image*/}
      {/*              bgImagetitle={cohort.menuIcon}*/}
      {/*              className={*/}
      {/*                'min-w-[33px] min-h-[33px] bg-center bg-contain bg-no-repeat'*/}
      {/*              }*/}
      {/*            />*/}
      {/*            <div className="text-[16px] font-[600] leading-[24px]">*/}
      {/*              {cohort.menuTitle}*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default NestedDropDownWeb;
