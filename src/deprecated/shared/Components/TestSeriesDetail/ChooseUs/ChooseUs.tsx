import React from 'react';
import Carousel from '../../Atoms/Carousel/Carousel';

function ChooseUs({ sectionThreeData }: { sectionThreeData: any }) {
  return (
    <div>
      <section className="mt-4 p-[24px] bg-white relative rounded-md drop-shadow-md">
        <div className="absolute sm:top-[-130px] top-[-110px]"></div>
        <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
          {sectionThreeData?.title}
        </h1>

        <div className="flex gap-[8px] overflow-x-scroll">
          {sectionThreeData?.bulletImage.map((item: any, index: number) => (
            <img key={index} src={item?.Image} className="w-[330px] sm:hidden block" />
          ))}
          <Carousel
            array={sectionThreeData?.bulletImage.map((item: any, index: number) => (
              <img key={index} src={item?.Image} className="w-[330px] sm:block hidden" />
            ))}
            className="gap-4"
          />
        </div>
      </section>
    </div>
  );
}

export default ChooseUs;
