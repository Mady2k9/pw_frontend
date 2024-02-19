import { memo } from 'react';
import TrustedPlatforCard from '../../Molecules/TrustedPlatformCards/TrustedPlatformCards';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import { StatsSectionProps } from './StatsDataType.d';
import Button from '../../Atoms/Button/Button';

const StatsSection = ({ statsData }: { statsData: StatsSectionProps }) => {
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedStatsData = statsData?.sectionProps?.sort(compareByDisplayOrder);
  return (
    <div className="flex flex-col items-center justify-center ">
      <TransitionWrapper>
        <div className="grid xl:grid-cols-4  grid-cols-2 gap-3 md:my-[32px] my-[20px]">
          {sortedStatsData?.map((cardData: any, key: number) => (
            <div key={key}>
              <TrustedPlatforCard
                statsCardData={cardData}
                bgColor={cardData.backGroundColor}
              />
            </div>
          ))}
        </div>
      </TransitionWrapper>
      <TransitionWrapper>
        <Button
          className={` px-[28px] py-[14px] w-[240px] sm:text-lg rounded-md transition-all duration-200 items-center font-semibold leading-[27px] text-[17px]`}
          title={statsData?.cta.text}
          backGroundColor={statsData?.cta.backGroundColor}
          textColor={statsData?.cta.textColor}
          hoverColor={statsData?.cta.hoverColor}
          ctaRedirectionUrl={statsData?.cta.ctaRedirectionUrl}
        />
      </TransitionWrapper>
    </div>
  );
};

export default memo(StatsSection);
