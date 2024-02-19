import React from 'react';
import { BatchCardData, BatchCardContainer } from './BatchCardType';
import BatchCard from '../BatchCard/BatchCard';

const BatchCardSectionForExams: React.FC<BatchCardContainer> = ({
  BatchData,
}) => {
  return (
    <>
      {BatchData?.length > 0 && (
        <div
          className={` flex max-w-6xl mx-auto flex-col md:my-6 p-4 xl:p-0 relative`}
        >
          <div className="flex xl:flex-row flex-col xl:items-center justify-between w-full">
            <div className="text-base ">
              Showing &apos;<span className="font-bold">{BatchData?.length}</span>&apos;
              Total Batch Results
            </div>
          </div>
          <div
            className={`flex sm:mt-8 mt-6 items-center gap-[19px] flex-wrap justify-center lg:justify-start`}
          >
            {BatchData?.map((result: BatchCardData, index) => (
              <>
                <BatchCard
                  key={index + ''}
                  result={result}
                  showBatchCardDetails
                />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BatchCardSectionForExams;
