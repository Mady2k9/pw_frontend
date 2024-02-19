import Button from '../../Atoms/Button/Button';

const TestSeriesActions = ({
  showExploreButton,
}: {
  showExploreButton?: boolean;
}) => {
  return (
    <div
      className={`${
        showExploreButton ? '' : 'sm:w-full w-[160px]'
      } flex flex-row gap-2 items-center justify-between mt-[20px] `}
    >
      {showExploreButton && (
        <a
          href={''}
          className="border border-[#5A4BDA] font-semibold py-[10px] w-full items-center text-[#5A4BDA] rounded-md"
        >
          <Button className={'px-5 '} title={'Explore'} />
        </a>
      )}

      <Button
        className={
          ' border border-[#5A4BDA] hover:bg-[#4437B8] font-semibold w-full bg-[#5A4BDA] text-[#FFFFFF] py-[10px] px-5 rounded-md '
        }
        title={'Buy Now'}
      />
    </div>
  );
};

export default TestSeriesActions;
