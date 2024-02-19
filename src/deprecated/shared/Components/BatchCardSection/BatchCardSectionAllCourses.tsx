import Text from '../Atoms/Text/Text';
import BatchCard from '../BatchCard/BatchCard';
import { BatchCardData, BatchCardContainer } from './BatchCardType';

const BatchCardContainer: React.FC<BatchCardContainer> = ({
  mainHeading,
  viewAllUrl,
  BatchData,
}) => {
  return (
    <div
      className={` flex max-w-6xl mx-auto flex-col xl:my-8 py-4 xl:py-0 gap-4 relative`}
    >
      <div className="flex xl:flex-row flex-col xl:items-center px-4 xl:px-0 justify-between w-full">
        <Text
          style={
            'xl:text-[32px] text-[20px] leading-[48px] xl:mx-[6px] font-bold break-all'
          }
          title={mainHeading + ' Courses'}
        />
      </div>
      <div className="slideBarRemove flex gap-3.5 md:gap-5 px-4 xl:px-[2px] pb-2 pt-[10px] overflow-x-scroll scroll-smooth">
        {BatchData?.slice(0, 3)?.map((result: BatchCardData) => (
          <BatchCard key={result?.name} result={result} showBatchCardDetails />
        ))}
      </div>
      <a className="mx-4 sm:mx-0" href={viewAllUrl}>
        <div
          className={
            'w-full bg-[#F1EFFF] text-[#5A4BDA] hover:bg-[#D2CCFF] sm:text-base text-sm font-semibold flex items-center justify-center px-6 py-[12px] rounded-[6px] cursor-pointer '
          }
        >
          View All Batches
          <span className="font-[600] mx-[6px] mt-[-2px] text-[24px]">
            &rsaquo;
          </span>
        </div>
      </a>
    </div>
  );
};

export default BatchCardContainer;
