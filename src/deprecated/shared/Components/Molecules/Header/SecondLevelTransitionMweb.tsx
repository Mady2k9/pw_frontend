import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useMemo, useState } from 'react';
import cn from 'clsx';
import { MenuItemsData, MenuTitleData } from './HeaderType.d';
import Image from '../../Atoms/Image/Image';

const SecondLevelTransitionMweb = ({
  setShowDropDown,
  showDropDown,
  item,
}: {
  setShowDropDown: (arg0: string) => void;
  showDropDown: string;
  item: MenuTitleData;
}) => {
  const [showCourses, setShowCourses] = useState(false);
  const subScript = (listItems: MenuItemsData[]) => {
    const itemList = listItems.map((i: { menuTitle: string }) => i.menuTitle);
    const textToShow = itemList.join(',  ');
    return (
      <div className="font-medium text-xs text-[#757575]">{textToShow}</div>
    );
  };
  const handleShowCourses = () => {
    if (item.menuTitle === showDropDown) setShowDropDown('');
    else setShowDropDown(item.menuTitle);
    if (showCourses && item.menuTitle === showDropDown) setShowCourses(false);
    else setShowCourses(true);
  };
  const height = useMemo(() => {
    if (
      typeof window === 'undefined' ||
      !showCourses ||
      showDropDown !== item.menuTitle
    ) {
      return 0;
    }
    return document.getElementById(item.menuTitle)?.offsetHeight;
  }, [item, showDropDown]);

  return (
    <>
      <div
        className={`flex items-center justify-between  border-[#D9DCE1] p-4 cursor-pointer ${
          showCourses && showDropDown === item.menuTitle
            ? 'bg-[#F8F8F8]'
            : 'bg-white border-b-[1px]'
        }`}
        onClick={handleShowCourses}
      >
        <div className="gap-[4px] w-[90%]">
          <div className="font-semibold text-base text-[#1B2124]">
            {item.menuTitle}
          </div>
          {subScript(item.menuItems)}
        </div>
        <ChevronRightIcon
          className={cn('transition-all stroke-2 duration-300  h-4 w-4', {
            ['rotate-90']: showCourses && showDropDown === item.menuTitle,
          })}
        />
      </div>
      <div
        className={cn('h-0 transition-all duration-300 overflow-hidden', {})}
        style={{ height }}
      >
        <div
          id={item.menuTitle}
          className="bg-[#F8F8F8] gap-2 grid grid-cols-2  pb-4 justify-between px-4 flex-wrap"
        >
          {item.menuItems?.map((cohort: MenuItemsData) => (
            <a
              key={cohort.menuRedirectionUrl}
              href={cohort.menuRedirectionUrl}
              className=" p-3  min-h-[60px] max-h-[72px] flex items-center gap-2 border-b-[0.5px] bg-white rounded "
              style={{ boxShadow: '0px 1px 8px 0px #00000014' }}
            >
              <Image
                bgImagetitle={cohort.menuIcon}
                className={
                  'min-w-[28px] min-h-[28px] bg-center bg-contain bg-no-repeat'
                }
              />
              <div className="text-sm font-semibold">{cohort.menuTitle}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondLevelTransitionMweb;
