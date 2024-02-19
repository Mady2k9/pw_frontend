import cn from 'clsx';
import React, { useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import RightDownIcon from '@/assets/Images/Right-Icon-Chip2.webp';
import Image from '@/deprecated/shared/Components/Atoms/Image/Image';
import { useRouter } from 'next/router';
import {
  // jsonToQueryString,
  queryStringToJson,
} from '@/deprecated/common/fetcher-service/fetcherBatchListing/FetchBatchNotForAll';

const FILTERCOMPONENTS = {
  ONLINE: 'Online',
  OFFLINE: 'Offline',
  PRICING: 'Pricing',
  LANGUAGE: 'Language',
  NEWLY_LAUNCHED: 'Newly Launched',
};
const Filters = [
  {
    name: 'Online',
    key: FILTERCOMPONENTS.ONLINE,
    options: [],
    type: 'toggle',
  },
  {
    name: 'Offline',
    key: FILTERCOMPONENTS.OFFLINE,
    options: [],
    type: 'toggle',
  },
  {
    name: 'Pricing',
    key: FILTERCOMPONENTS.PRICING,
    options: ['free', 'paid'],
    type: 'select',
  },
  {
    name: 'Language',
    key: FILTERCOMPONENTS.LANGUAGE,
    options: ['English', 'Hindi', 'Gujrati'],
    type: 'select',
  },
  {
    name: 'Newly Launched',
    key: FILTERCOMPONENTS.NEWLY_LAUNCHED,
    options: [],
    type: 'toggle',
  },
];
export default function FilterTabNew({ filters, cohortId }: any) {
  const [appliedFilters, setAppliedFilters] = useState<any>([]);
  const [intermediateFilters, setIntermediateFilters] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const _appliedFilters: any[] = Object.keys(Filters).map((key: any) => {
      return {
        name: Filters[key].name,
        value: false,
        options: [],
      };
    });
    if (filters['online'] === 'true') {
      _appliedFilters.find(
        (ap: any) => ap.name === FILTERCOMPONENTS.ONLINE
      ).value = true;
    }
    if (filters['offline'] === 'true') {
      _appliedFilters.find(
        (ap: any) => ap.name === FILTERCOMPONENTS.OFFLINE
      ).value = true;
    }
    if (filters['new'] === 'true') {
      _appliedFilters.find(
        (ap: any) => ap.name === FILTERCOMPONENTS.NEWLY_LAUNCHED
      ).value = true;
    }
    if (filters['language']?.length) {
      _appliedFilters.find(
        (ap: any) => ap.name === FILTERCOMPONENTS.LANGUAGE
      ).options = filters['language']?.split(',').filter((d: any) => !!d);
    }
    if (filters['pricing']?.length) {
      _appliedFilters.find(
        (ap: any) => ap.name === FILTERCOMPONENTS.PRICING
      ).options = filters['pricing']?.split(',').filter((d: any) => !!d);
    }
    setAppliedFilters([..._appliedFilters]);
  }, [filters]);
  return (
    <div className={'overflow-x-auto md:overflow-x-visible slideBarRemove'}>
      <div
        className={
          'max-w-6xl mx-auto relative md:py-3 py-2 px-3 lg:px-0 bg-white  '
        }
      >
        <div className={'flex space-x-2 items-center'}>
          {Filters.map((filter, index) => {
            const filterIndex = appliedFilters.findIndex(
              (appliedFilter: any) => appliedFilter.name === filter.name
            );
            if (filterIndex === -1) {
              return <></>;
            }
            const isActive =
              appliedFilters[filterIndex].value ||
              appliedFilters[filterIndex].options.length > 0;
            const currentFilter = appliedFilters[filterIndex];
            if (filter.type === 'toggle') {
              return (
                <div
                  key={index}
                  onClick={() => {
                    appliedFilters[filterIndex].value =
                      !appliedFilters[filterIndex].value;
                    const json = queryStringToJson(router.asPath.split('?')[1]);
                    json['cohortIds'] = cohortId;
                    if (
                      appliedFilters[filterIndex].name ===
                      FILTERCOMPONENTS.ONLINE
                    ) {
                      if (appliedFilters[filterIndex].value) {
                        json['online'] = true;
                      } else {
                        json['online'] = '';
                      }
                    }
                    if (
                      appliedFilters[filterIndex].name ===
                      FILTERCOMPONENTS.OFFLINE
                    ) {
                      if (appliedFilters[filterIndex].value) {
                        json['offline'] = true;
                      } else {
                        json['offline'] = '';
                      }
                    }
                    if (
                      appliedFilters[filterIndex].name ===
                      FILTERCOMPONENTS.NEWLY_LAUNCHED
                    ) {
                      if (appliedFilters[filterIndex].value) {
                        json['new'] = true;
                      } else {
                        json['new'] = '';
                      }
                    }
                    router.query = {
                      ...router.query,
                      ...json,
                    };
                    router.replace(router);
                    setAppliedFilters([...appliedFilters]);
                  }}
                  className={cn(
                    'text-xs sm:text-sm font-medium border border-[#D9DCE1] hover:border-[#B7B7B7] whitespace-nowrap rounded-full px-5 py-2.5 items-center cursor-pointer flex space-x-2',
                    {
                      'border-black bg-[#F8F8F8]': isActive,
                    }
                  )}
                >
                  <span>{filter.name}</span>
                  {isActive && <div className="text-[12px] "> &#x2715; </div>}
                </div>
              );
            }
            return (
              <Popover.Root key={index}>
                <>
                  <Popover.Trigger asChild>
                    <button
                      onClick={() => {
                        setIntermediateFilters(currentFilter.options);
                      }}
                      className={cn(
                        'text-sm font-medium whitespace-nowrap border rounded-full px-4 py-2.5 cursor-pointer flex space-x-1',
                        {
                          'border-black bg-[#F8F8F8]': isActive,
                        }
                      )}
                    >
                      <span className="flex gap-2 items-center">
                        {appliedFilters[filterIndex].options?.length > 0 ? (
                          <span className="text-xs h-5 w-5 rounded-[100px] sm:text-sm text-white bg-[#5A4BDA]">
                            {appliedFilters[filterIndex].options?.length}
                          </span>
                        ) : (
                          <></>
                        )}
                        {filter.name}{' '}
                      </span>
                      <Image
                        bgImagetitle={RightDownIcon.src}
                        className={'w-5 h-5 bg-no-repeat bg-cover bg-center'}
                      />
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="z-30 " sideOffset={5}>
                      <div
                        className={
                          'bg-white w-[160px] sm:w-[240px] p-4 border rounded-md'
                        }
                      >
                        {filter.options?.map((data: string) => (
                          <>
                            <div className="gap-2 flex items-center">
                              <input
                                className={`checked:accent-[#5A4BDA] h-4 w-4 border-[#D9DCE1] rounded-sm cursor-pointer`}
                                type="checkbox"
                                id={data}
                                name={data}
                                value={data}
                                checked={
                                  intermediateFilters.indexOf(data) !== -1
                                }
                                onChange={() => {
                                  if (
                                    intermediateFilters.indexOf(data) !== -1
                                  ) {
                                    intermediateFilters.splice(
                                      intermediateFilters.indexOf(data),
                                      1
                                    );
                                  } else {
                                    intermediateFilters.push(data);
                                  }
                                  setIntermediateFilters([
                                    ...intermediateFilters,
                                  ]);
                                }}
                              />
                              <label
                                className="text-base text-[#3D3D3D] capitalize"
                                htmlFor={data}
                              >
                                {data}
                              </label>
                            </div>
                          </>
                        ))}
                        <div className={'h-4'} />
                        <div className="flex justify-end">
                          <Popover.Close>
                            <button
                              className={`bg-[#5A4BDA] py-1.5 px-3 rounded-lg text-white hover:bg-[#4437B8] disabled:bg-[#D2CCFF] disabled:text-[#FFFFFF]`}
                              onClick={() => {
                                appliedFilters[filterIndex].options =
                                  intermediateFilters;
                                const json = queryStringToJson(
                                  router.asPath.split('?')[1]
                                );
                                json['cohortIds'] = cohortId;
                                if (
                                  appliedFilters[filterIndex].name ===
                                  FILTERCOMPONENTS.LANGUAGE
                                ) {
                                  if (
                                    appliedFilters[filterIndex].options?.length
                                  ) {
                                    json['language'] =
                                      intermediateFilters?.join(',');
                                  } else {
                                    json['language'] = '';
                                  }
                                }
                                if (
                                  appliedFilters[filterIndex].name ===
                                  FILTERCOMPONENTS.PRICING
                                ) {
                                  if (
                                    appliedFilters[filterIndex].options?.length
                                  ) {
                                    json['pricing'] =
                                      intermediateFilters?.join(',');
                                  } else {
                                    json['pricing'] = '';
                                  }
                                }
                                router.query = {
                                  ...router.query,
                                  ...json,
                                };
                                // console.log(router.query);
                                router.replace(router);
                                setAppliedFilters([...appliedFilters]);
                              }}
                              disabled={
                                appliedFilters[filterIndex].options?.length > 0
                                  ? false
                                  : true
                              }
                            >
                              Apply
                            </button>
                          </Popover.Close>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </>
              </Popover.Root>
            );
          })}
          <hr className="h-10 border border-[#D9DCE1]" />
          <div
            onClick={() => {
              const json = queryStringToJson(router.asPath.split('?')[1]);
              json['cohortIds'] = cohortId;

              json['language'] = '';

              json['pricing'] = '';

              json['online'] = '';
              json['offline'] = '';
              json['new'] = '';

              router.query = {
                ...router.query,
                ...json,
              };
              // console.log(router.query);
              router.replace(router);
              setAppliedFilters([...appliedFilters]);
            }}
            className="text-sm cursor-pointer font-semibold text-[#1B2124] px-1 whitespace-nowrap"
          >
            Reset Filters
          </div>
        </div>
      </div>
    </div>
  );
}
