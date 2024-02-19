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
  const toggleViewCategories = () => {
    if (showMore === 6) setShowMore(examCategoryData.sectionProps?.length);
    else setShowMore(6);
  };
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedExamData = examCategoryData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  const ctaViewLess = examCategoryData?.cta.altText;
  const ctaViewAllCategories = examCategoryData?.cta.text;
  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 items-start justify-center grid-cols-1 gap-4 md:my-[32px] my-[20px]">
        {sortedExamData
          ?.slice(0, 6)
          ?.map((cat: ExamCategoryCardType, key: number) => (
            <TransitionWrapper key={key}>
              <ExamCategoryCard
                bgColor={cat?.iconBackgroundColor}
                examCategoryCardData={cat}
              />
            </TransitionWrapper>
          ))}
        {showMore > 6 &&
          sortedExamData
            ?.slice(6, showMore)
            ?.map((cat: ExamCategoryCardType, key: number) => (
              <div key={key}
                className={'animate-in fade-in slide-in-from-top duration-500 '}
              >
                <ExamCategoryCard
                  key={key}
                  bgColor={cat?.iconBackgroundColor}
                  examCategoryCardData={cat}
                />
              </div>
            ))}
      </div>

      {examCategoryData?.sectionProps?.length > 6 && (
        <TransitionWrapper>
          <div
            className={`text-base sm:text-lg leading-[28px] font-[600] cursor-pointer border-b-2 border-dotted border-[${examCategoryData?.cta.textColor}] text-[${examCategoryData?.cta.textColor}]`}
            onClick={toggleViewCategories}
          >
            {showMore && showMore > 6
              ? `${ctaViewLess}`
              : `${ctaViewAllCategories}  ( 
                ${examCategoryData.sectionProps.length} 
                )`}
          </div>
        </TransitionWrapper>
      )}
    </>
  );
};

export default memo(ExamCategorySection);
