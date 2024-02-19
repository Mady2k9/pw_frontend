import Button from '../Atoms/Button/Button';
import batchEventTracker from '../BatchEventTracker/BatchEventtracker';

const BatchActions = ({
  showExploreButton,
  buyNowSlug,
  seoSlug,
}: {
  showExploreButton?: boolean;
  buyNowSlug?: string;
  seoSlug: string;
}) => {
  const handleOnCLick = () => {
    batchEventTracker.batchCardExploreClick();
  };
  return (
    <div className="flex flex-row gap-2 items-center justify-between mt-[20px]">
      {showExploreButton && (
        <a href={seoSlug} className="w-full">
          <Button
            className={
              'border border-[#5A4BDA] font-semibold py-[10px] w-full px-5 text-[#5A4BDA] rounded-md'
            }
            title={'EXPLORE'}
            onClick={handleOnCLick}
          />
        </a>
      )}

      <a
        href={`/study/batches/${buyNowSlug}/batch-overview`}
        className="w-full"
      >
        <Button
          className={
            ' border border-[#5A4BDA] hover:bg-[#4437B8] font-semibold w-full bg-[#5A4BDA] text-[#FFFFFF] py-[10px] px-5 rounded-md'
          }
          title={'BUY NOW'}
        />
      </a>
    </div>
  );
};

export default BatchActions;
