import React, { memo } from 'react';
import { HeroFeatureSectionProps } from './HeroFeatureType.d';
import HeroFeatureCard from './HeroFeatureCard';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';

const HeroFeatureSection = ({
  heroFeatureData,
}: {
  heroFeatureData: HeroFeatureSectionProps;
}) => {
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedFeatureDataHeroSection =
    heroFeatureData?.sectionProps?.featureItems?.sort(compareByDisplayOrder);
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div
          className={` sm:px-4 sm:py-6 px-2.5 py-4 mx-4 sm:mx-6 xl:mx-0 relative rounded-md md:rounded-md bg-white md:flex md:flex-wrap lg:flex-nowrap justify-between grid xl:grid-cols-4  grid-cols-2 gap-y-3 mt-[-5%] overflow-y-hidden`}
          style={{
            boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)',
          }}
        >
          {heroFeatureData &&
            sortedFeatureDataHeroSection?.map((data, index) => (
              <>
                <div className="lg:block hidden ">
                  <TransitionWrapper delay={index} key={index}>
                    <HeroFeatureCard
                      mainTitle={data.title}
                      subTitle={data.subTitle}
                      CardImage={data.icon}
                    />
                  </TransitionWrapper>
                </div>
                <div className="lg:hidden block">
                  <div className="flex justify-center">
                    <TransitionWrapper delay={index <= 1 ? 1 : 2} key={index}>
                      <HeroFeatureCard
                        mainTitle={data.title}
                        subTitle={data.subTitle}
                        CardImage={data.icon}
                      />
                    </TransitionWrapper>
                  </div>
                </div>
                {heroFeatureData &&
                index <
                  heroFeatureData?.sectionProps?.featureItems?.length - 1 ? (
                  <div
                    key={index + 'd'}
                    className="after:block after:bg-[#D9DCE1] after:w-[1px] after:h-16 my-6 hidden lg:block"
                  ></div>
                ) : (
                  <></>
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(HeroFeatureSection);
