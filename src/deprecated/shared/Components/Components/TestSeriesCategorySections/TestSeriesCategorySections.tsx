import { useState, memo } from 'react';
import ExamCategoryCard from '../../Molecules/ExamCategoryCard/ExamCategoryCard';
import { ExamCategoryType } from './TestSeriesCategorySectionsType';
import { ExamCategoryCardType } from '../../Molecules/ExamCategoryCard/ExamCategoryCardType';

const TestSeriesCategorySections = ({
  examCategoryData,
}: {
  examCategoryData: ExamCategoryType;
}) => {
  const [showMore, setShowMore] = useState(6);
  const bgColor = [
    '#FFF2F2',
    '#FFF3E0',
    '#FFFBE4',
    '#F8F8FF',
    '#F4FCFF',
    '#F4F4F4',
  ];
  const toggleViewCategories = () => {
    if (showMore === 6) setShowMore(examCategoryData.sectionProps.length);
    else setShowMore(6);
  };
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedExamData = examCategoryData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 items-start justify-center grid-cols-1 gap-4 md:my-[32px] my-[20px]">
        {sortedExamData?.map((cat: any, key: number) => (
          // <TransitionWrapper key={key}>
          <ExamCategoryCard key={key}
            bgColor={bgColor[key % 6]}
            examCategoryCardData={cat}
          />
          // </TransitionWrapper>
        ))}
        {/* {sortedExamData?.map((cat: ExamCategoryCardType, key: number) => (
          <div className={'animate-in fade-in slide-in-from-top duration-500 '}>
            <ExamCategoryCard
              key={key}
              bgColor={bgColor[key % 6]}
              examCategoryCardData={cat}
            />
          </div>
        ))} */}
      </div>
      {/* {examCategoryData?.sectionProps?.length > 6 && ( */}
      {/* <TransitionWrapper> */}
      <div
        className="text-base sm:text-lg leading-[28px] font-[600] cursor-pointer border-b-2 border-dotted border-[#5A4BDA] text-[#5A4BDA] "
        onClick={toggleViewCategories}
      >
        {/* {showMore && showMore > 6
              ? 'View Less'
              : 'View All Categories  (' +
                examCategoryData.sectionProps.length +
                ')'} */}
      </div>
      {/* </TransitionWrapper> */}
      {/* )} */}
    </>
  );
};

export default memo(TestSeriesCategorySections);
