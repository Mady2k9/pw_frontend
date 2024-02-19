import React from 'react';
import Link from 'next/link';
import cn from 'clsx';
import FilterTabNew from '@/deprecated/shared/Components/FilterTab/FilterTabNew';
import { useRouter } from 'next/router';
import { queryStringToJson } from '@/deprecated/common/fetcher-service/fetcherBatchListing/FetchBatchNotForAll';

const CohortTab = ({
  tabData,
  selectedCohort,
  handleSelectedCohort,
  cohortId,
}: {
  tabData: any;
  selectedCohort: number;
  handleSelectedCohort: (a: number, b: string) => void;
  setSelectedcohort: (a: number) => void;
  cohortId?: string;
}) => {
  const router = useRouter();
  const filter = queryStringToJson(router.asPath.split('?')[1] || '');
  return (
    <>
      <div className="w-full bg-[#F1EFFF] max-h-[48px]">
        <div className="max-w-6xl mx-auto flex items-center px-4 xl:px-0 slideBarRemove overflow-x-scroll gap-1.5 md:gap-8">
          {tabData?.map((cohort: any, key: number) => (
            <Link prefetch={true} href={cohort.link} key={key}>
              <div
                key={cohort.name}
                className={`cursor-pointer relative  ${
                  cohort.active ? 'text-[#5A4BDA] font-semibold ' : ''
                }  `}
                onClick={(e) => {
                  handleSelectedCohort(key, cohort);
                }}
              >
                <div
                  className={cn(
                    'absolute transition-all duration-200 bottom-0 rounded-t-lg h-[4px] w-full bg-[#5A4BDA] ',
                    {
                      ['opacity-100']: cohort.active,
                      ['opacity-0']: !cohort.active,
                    }
                  )}
                />
                <div className="py-[12px] px-2 xl:px-0 whitespace-nowrap text-base ">
                  {cohort.option}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*{selectedCohort > 0 && (*/}
      {/*  <FilterTab filters={tabData?.[selectedCohort]?.filter} />*/}
      {/*)}*/}
      {selectedCohort > 0 && (
        <FilterTabNew filters={filter} cohortId={cohortId} />
      )}
    </>
  );
};

export default CohortTab;
