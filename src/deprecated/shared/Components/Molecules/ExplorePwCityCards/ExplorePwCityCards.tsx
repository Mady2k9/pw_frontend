import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';
import { exploreCityCardsType } from './ExplorePwCityCardsType';
import eventTracker from '../../EventTracker/eventTracker';
import NextImage from '@/components/ui/next-image';
import studentMweb from '@/deprecated/assets/Images/hero-student-m.webp';

const ExplorePwCityCards = ({
                              exploreCityCardData,
                            }: {
  key: number;
  exploreCityCardData: exploreCityCardsType;
}) => {
  const centreEventTrigger = (page_source: string) => {
    eventTracker.centrePageVisit(page_source);
  };
  return (
    <a
      onClick={() => centreEventTrigger('home_page')}
      href={exploreCityCardData?.redirectionUrl}
      className="group border hover:border cursor-pointer hover:border-[#B7B7B7] duration-300 ease-out border-[#E4E7EA] rounded md:rounded-md w-[48%] h-[56px] xl:w-[245px] lg:w-[217px] md:w-[326px] md:h-[88px] p-2 md:p-3 flex items-center overflow-hidden relative"
    >
      <div
        className="bg-[#ffffff00] sm:h-[88px] absolute sm:w-[84px] h-[56px] w-[60px]  group-hover:bg-gradient-to-l ease-in-out duration-500  group-hover:from-[#ffffffff] left-0 z-[1]"></div>
      <div
        className={'md:w-14 md:h-14 w-10 h-10 bg-center group-hover:scale-[155%] ease-in-out duration-500 bg-no-repeat bg-cover rounded-[4px] mr-4'}>
        <NextImage
          src={exploreCityCardData?.cityIcon}
          alt={'city'}
          width={'100'}
          height={'100'}
          className={
            ''
          }
        />
      </div>
      <div className="xl:text-base text-sm font-bold text-[#000]">
        {exploreCityCardData?.cityName}
      </div>
    </a>
  );
};

export default memo(ExplorePwCityCards);
