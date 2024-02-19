import React from 'react';
import Image from '../../Atoms/Image/Image';
import Input from '../../Atoms/Input/Input';

function HeaderSearch({
  isSearchVisible,
  setIsSearchVisible,
}: {
  isSearchVisible: boolean;
  setIsSearchVisible: (arg1: boolean) => void;
}) {
  const hideSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div
      className={`bg-white absolute z-[100] text-center h-16 px-3 pt-2 transition-all ease-in-out duration-1000 overflow-hidden ${
        isSearchVisible
          ? 'opacity-100 w-full z-[1000]'
          : 'opacity-0 w-[1px] z-[0] ml-[50%]'
      } `}
    >
      <div className="w-full bg-white border-[1px] border-[#5A4BDA] py-[12px] px-[10px] rounded-[4px] flex flex-row items-center gap-2 relative">
        <Image
          bgImagetitle={'/search.webp'}
          className={'h-[18px] w-[18px] bg-center bg-contain bg-no-repeat '}
        />
        <Input
          className="border-0 focus:outline-none"
          placeholder="Search for ypur batch"
          type={'text'}
        />
        <Image
          bgImagetitle={'/sc.svg'}
          className={
            'h-[12px] w-[12px] bg-center bg-contain bg-no-repeat absolute right-4'
          }
          onClick={hideSearchClick}
        />
      </div>
    </div>
  );
}

export default HeaderSearch;
