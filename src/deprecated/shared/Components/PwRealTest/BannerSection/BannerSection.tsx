// import { Carousel } from '@/components/ui/carousel';
import React from 'react';
import Carousel from '../../Molecules/Caraousel/Caraousel';
import BannerRealtest from '../../../../assets/Images/PwRealTest/timelineWeb.webp'
import BannerRealtestMweb from '../../../../assets/Images/PwRealTest/timelineMweb.webp'

const bannerDatas = [
  {
    dwebImage: BannerRealtest.src,
    mwebImage: BannerRealtestMweb.src,
    redirectionUrl: '',
    altTag: "Banner1",
    displayOrder: 1,
  },

  {
    dwebImage: BannerRealtest.src,
    mwebImage: BannerRealtestMweb.src,
    redirectionUrl: '',
    altTag: "Banner2",
    displayOrder: 2,
  },
];

function BannerSection() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full ">
      <div className="md:p-6 p-4 rounded-lg bg-[#FFF] shadow-md ">
         <Carousel
          carouselData={bannerDatas}
          containerClass={'max-h-[591px] max-w-[100%]'}
          mwebImageClassName={'h-[591px] w-[100%] bg-contain bg-center bg-no-repeat'}
          dwebImageClassName={'xl:h-[388px] lg:h-[355px] h-[250px] w-full bg-cover rounded-lg'}
          setIntervalTime={5000}
         
        />
      </div>
    </div>
  );
}

export default BannerSection;
