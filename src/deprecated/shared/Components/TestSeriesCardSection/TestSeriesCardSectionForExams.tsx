import React from 'react';
import { ResultType, BatchCardContainer } from './TestSeriesCardType';
import { AccessState } from './TestSeriesCardJson';
import TestSeriesCard from '../TestSeriesCard/TestSeriesCard';

const TestSeriesCardSectionForExams: React.FC<BatchCardContainer> = () => {
  return (
    <div
      className={` flex max-w-6xl mx-auto flex-col md:my-5 gap-4 p-4 xl:p-0 relative`}
    >
      <div className="flex xl:flex-row flex-col xl:items-center justify-between w-full">
        <div className="text-base ">
          Showing
          <span className="font-bold">{AccessState[0]?.results?.length}</span>
          Total Batch Results
        </div>
      </div>
      <div
        className={`flex mt-8 items-center gap-[19px] flex-wrap justify-center mx-auto lg:justify-start`}
      >
        {AccessState[0]?.results?.map((result: ResultType) => (
          <TestSeriesCard
            key={result?.title}
            result={result}
            showBatchCardDetails
            showOnlineOfflineTag
            showExploreButton={true}
            showNewChip={true}
          />
        ))}
      </div>
    </div>
  );
};

export default TestSeriesCardSectionForExams;
