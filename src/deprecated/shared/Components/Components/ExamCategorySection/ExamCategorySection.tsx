import { useState, memo } from 'react';
import ExamCategoryCard from '../../Molecules/ExamCategoryCard/ExamCategoryCard';
import { ExamCategoryType } from './ExamCategoryType';
import { ExamCategoryCardType } from '../../Molecules/ExamCategoryCard/ExamCategoryCardType';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';

const ExamCategorySection = ({
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
    if (showMore === 6) setShowMore(examCategoryData.sectionProps?.length);
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
        {sortedExamData
          ?.slice(0, 6)
          ?.map((cat: ExamCategoryCardType, key: number) => (
            <TransitionWrapper key={key}>
              <ExamCategoryCard
                bgColor={bgColor[key % 6]}
                examCategoryCardData={cat}
              />
            </TransitionWrapper>
          ))}
        {showMore > 6 &&
          sortedExamData
            ?.slice(6, showMore)
            ?.map((cat: ExamCategoryCardType, key: number) => (
              <div
                key={key}
                className={'animate-in fade-in slide-in-from-top duration-500 '}
              >
                <ExamCategoryCard
                  key={key}
                  bgColor={bgColor[key % 6]}
                  examCategoryCardData={cat}
                />
              </div>
            ))}
      </div>

      {examCategoryData?.sectionProps?.length > 6 && (
        <TransitionWrapper>
          <div
            className="text-base sm:text-lg leading-[28px] font-[600] cursor-pointer border-b-2 border-dotted border-[#5A4BDA] text-[#5A4BDA] "
            onClick={toggleViewCategories}
          >
            {showMore && showMore > 6
              ? 'View Less'
              : 'View All Categories  (' +
                examCategoryData?.sectionProps.length +
                ')'}
          </div>
        </TransitionWrapper>
      )}
    </>
  );
};

export default memo(ExamCategorySection);
