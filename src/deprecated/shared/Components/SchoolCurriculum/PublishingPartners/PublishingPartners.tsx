import React from 'react';
import PublishingCard from '../PublishingCard/PublishingCard';
import schoolCardData from '../../../../jsonFiles/schoolcardData.json';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';

function PublishingPartners() {
  const partnersData = schoolCardData?.schoolCardData || [];
  return (
    <>
      <TransitionWrapper>
        <div className="relative md:mt-[215px] mt-[130px] flex justify-center items-center">
          <div className="absolute   xl:top-[-176px] md:top-[-55px] lg:top-[-51px] top-[-90px] 2xl:top-[-141px]">
            <img
              src="/student-raising-hand.webp"
              className="xl:w-[207px] w-[117px]"
              alt=""
            />
          </div>
        </div>
      </TransitionWrapper>
      <div
        style={{ backgroundImage: `url(/Publishers.webp)` }}
        className="bg-bottom bg-cover bg-no-repeat  block sm:hidden h-[1534px]"
      >
        {partnersData.map((partner, index) => (
          <>
            <TransitionWrapper>
              <div
                className="font-bold leading-[48px] text-[32px] text-[#1B2124] text-center pt-[48px] "
                key={index}
              >
                {partner.sectionTitle}
              </div>
            </TransitionWrapper>
            <TransitionWrapper>
              <div className="flex mt-8 items-center gap-[25px] flex-wrap justify-center mx-auto xl:justify-center ">
                <PublishingCard data={partner.sectionProps} />
              </div>
            </TransitionWrapper>
          </>
        ))}
      </div>

      <div
        style={{ backgroundImage: `url(/partners.webp)` }}
        className="m-auto bg-center bg-cover bg-no-repeat sm:block hidden h-[1100px] md:h-auto md:min-h-[1024px] lg:min-h-[1100px] xl:min-h-[675px] 2xl:min-h-[1200px]"
      >
        {' '}
        {partnersData.map((partner, index) => (
          <>
            <TransitionWrapper>
              <div
                className="font-bold leading-[48px] text-[32px] text-[#1B2124] text-center pt-[70px] 2xl:pt-[119px] "
                key={index}
              >
                {partner.sectionTitle}
              </div>
            </TransitionWrapper>
            <TransitionWrapper>
              <div className="mx-auto xl:max-w-6xl   pt-[32px] flex flex-wrap gap-5  justify-center">
                <PublishingCard data={partner.sectionProps} />
              </div>
            </TransitionWrapper>
          </>
        ))}
      </div>
    </>
  );
}

export default PublishingPartners;
