import { memo } from 'react';
import TrustedPlatforCard from '../../Molecules/TrustedPlatformCards/TrustedPlatformCards';
import LoginButton from '../../Atoms/LoginButton/LoginButton';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import { useGlobal } from '@/contexts/global';

const StatsSection = ({ statsData }: { statsData: any }) => {
  const bgColor = ['#FFF3E3', '#FEE', '#E4FAFF', '#ECE7FF'];
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedStatsData = statsData?.sectionProps?.sort(compareByDisplayOrder);
  const {userInteracted} = useGlobal()
  if(!userInteracted){
    return <></>
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <TransitionWrapper>
        <div className="grid xl:grid-cols-4  grid-cols-2 gap-3 md:my-[32px] my-[20px]">
          {sortedStatsData?.map((cardData: any, key: number) => {
            console.log(cardData['backGroundColor']);
            return (
              <div key={key}>
                <TrustedPlatforCard
                  statsCardData={cardData}
                  bgColor={cardData['backGroundColor'] || bgColor[key]}
                />
              </div>
            );
          })}
        </div>
      </TransitionWrapper>
      <TransitionWrapper>
        <LoginButton
          text={'Get Started'}
          className={'px-[28px] py-[14px] w-[240px]'}
        />
      </TransitionWrapper>
    </div>
  );
};

export default memo(StatsSection);
