import Button from '../Atoms/Button/Button';
import { useRouter } from 'next/router';
const TestSeriesActions = ({
  showExploreButton,
  testSerieName,
}: {
  showExploreButton?: boolean;
  testSerieName?: string;
}) => {
  const router = useRouter();
  const cohortName = router.query.cohort;
  const exploreUrl = testSerieName
    ?.replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
  console.log(cohortName, 'cohortName');
  return (
    <div
      className={`${
        showExploreButton ? '' : 'sm:w-full w-[160px]'
      } flex flex-row gap-2 items-center justify-between mt-[20px] `}
    >
      {showExploreButton && (
        <a
          href={'/test-series/iit-jee'}
          className="border border-[#5A4BDA] font-semibold py-[10px] w-full  text-[#5A4BDA] rounded-md text-center"
        >
          <Button className={''} title={'Explore'} />
        </a>
      )}

      <Button
        className={
          ' border border-[#5A4BDA] hover:bg-[#4437B8] font-semibold w-full bg-[#5A4BDA] text-[#FFFFFF] py-[10px] text-center rounded-md '
        }
        title={'BUY NOW'}
      />
    </div>
  );
};

export default TestSeriesActions;
