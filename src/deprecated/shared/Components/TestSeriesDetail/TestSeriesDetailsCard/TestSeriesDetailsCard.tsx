import Image from '../../Atoms/Image/Image';
import { ResultType } from '../../TestSeriesCardSection/TestSeriesCardType';
import Text from '../../Atoms/Text/Text';
import TestSeriesCardInfo from './TestSeriesCardInfo';
import TestSeriesPrice from './TestSeriesPrice';
import TestSeriesActions from './TestSeriesActions';
import TestSeriesCardHeader from './TestSeriesCardHeader';
import { useState, useEffect } from 'react';
import BatchActions from '../../BatchCard/BatchActions';
const TestSeriesDetailsCard = ({
  result,
  key,
  showBatchCardDetails,
  showOnlineOfflineTag,
  showExploreButton,
  showNewChip,
}: {
  result: ResultType;
  key: string;
  showBatchCardDetails?: boolean;
  showOnlineOfflineTag?: boolean;
  showExploreButton: boolean;
  showNewChip?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 400;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="border border-white rounded-lg w-full mb-3.5">
        <div
          style={
            showOnlineOfflineTag
              ? {
                  borderImage: 'linear-gradient(to bottom, #4C68CA, #FFFFFF)',
                  borderImageSlice: 1,
                }
              : {}
          }
          className={`border  relative    w-full p-3.5 md:p-4 bg-white shadow-md rounded-lg `}
          // className={` border xl:min-w-[366px] relative max-w-[350px] min-w-[320px] p-3.5 md:p-4 bg-white shadow-md`}
          key={key}
        >
          {showOnlineOfflineTag && (
            <Image
              bgImagetitle={'/batch-top-online.webp'}
              className={
                'w-[100px] top-[-12px] z-10 left-[-10px] h-[35px] bg-center bg-no-repeat bg-cover absolute'
              }
            />
          )}
          <TestSeriesCardHeader
            title={result.title}
            showNewChip={showNewChip}
          />

          <div className="relative">
            <Image
              bgImagetitle={result?.banner}
              className="  md:h-[164px] h-[146px] bg-center bg-contain bg-no-repeat my-[2px] mx-auto rounded-lg"
            />
            <Text
              style={
                'bg-white font-semibold text-xs absolute bottom-2 left-2 inline-block rounded-[4px] p-1'
              }
              title={result?.language}
            />
          </div>

          {showBatchCardDetails && !isMobileView && (
            <div>
              <TestSeriesCardInfo
                usedFor={result?.usedFor}
                startDate={result?.startDate}
                endDate={result?.endDate}
              />
            </div>
          )}
          <hr className="my-[16px]" />
          <div
            className={`${
              showExploreButton ? 'flex-col' : 'sm:flex-col flex-row'
            } flex justify-between pr-4`}
          >
            <TestSeriesPrice
              originalCost={result?.originalCost}
              updatedCost={result?.updatedCost}
              discount={'Discount of 10% applied'}
              showExploreButton={showExploreButton}
            />
            <TestSeriesActions showExploreButton={showExploreButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSeriesDetailsCard;
