import { Pill } from '@/components/ui/pill';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { cn, queryStringToJson } from '@/lib/utils';
import { ChevronDownIcon, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { PopoverClose } from '@radix-ui/react-popover';
import { Badge } from '@/components/ui/badge';
import { NextRouter, useRouter } from 'next/router';
import { scrollToElement, scrollWrapperLeftToElement } from '@/lib/dom.utils';
import { extractFilters, Filter, FiltersJSON } from '@/lib/batch-list-server-side-props';

export type FilterId = 'online' | 'offline' | 'new' | 'pricing' | 'language';

type SelectedFiltersState = {
  [key in FilterId]?: {
    value?: boolean;
    options?: string[]
  };
};

interface FilterProps {
  filter: Filter;
  selectedFilters: SelectedFiltersState;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFiltersState>>;
}

interface SelectableFilterProps extends FilterProps {
}

function pushToQueryParams(router: NextRouter, selectedFilters: SelectedFiltersState) {
  const queryParams = Object.entries(selectedFilters).map(([key, value]) => {
    if (value?.value) {
      return `${encodeURIComponent(key)}=true`;
    }
    if (value?.options?.length) {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value.options.join(','))}`;
    }
    return '';
  }).filter(Boolean).join('&');
  const path = router.asPath?.split('?')[0];
  return queryParams ? `${path}?${queryParams}` : path;
}

function ToggleFilter({ filter, selectedFilters, setSelectedFilters }: FilterProps) {
  const isActive = selectedFilters[filter.id]?.value;
  const router = useRouter();
  // console.log(filter.id, isActive, selectedFilters[filter.id]?.value, selectedFilters['new'], selectedFilters['online'])
  return <Pill className={''} onClick={(event) => {
    scrollWrapperLeftToElement(document.getElementById('filter-bar-wrapper')!, event.currentTarget, false);
    router.replace(pushToQueryParams(router, {
      ...selectedFilters,
      [filter.id]: {
        value: !selectedFilters[filter.id]?.value,
      },
    }), undefined, { shallow: true });
    setSelectedFilters((prev: any) => {
      return {
        ...prev,
        [filter.id]: {
          value: !prev[filter.id]?.value,
        },
      };
    });
  }} variant={isActive ? 'active' : 'default'}>
    <span>{filter.name}</span>
    <X className={cn('transitionAll200 overflow-hidden h-4', {
      'w-4 opacity-1 ml-2': isActive,
      '!w-0 opacity-0 !ml-0': !isActive,
    })} />
  </Pill>;
}

function SelectableFilter({ filter, selectedFilters, setSelectedFilters }: SelectableFilterProps) {
  const selectedValues = selectedFilters[filter.id]?.options || [];
  const isActive = selectedValues?.length;
  const [localSelection, setLocalSelection] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    setLocalSelection(selectedFilters[filter.id]?.options || []);
  }, [filter.id, selectedFilters]);
  return <Popover>
    <PopoverTrigger className={'outline-none'}>
      <Pill onClick={(event) => {
        scrollWrapperLeftToElement(document.getElementById('filter-bar-wrapper')!, event.currentTarget, false);
        setLocalSelection(selectedFilters[filter.id]?.options || []);
      }} variant={isActive ? 'active' : 'default'}>
        <Badge className={cn('text-xs transitionAll200 overflow-hidden', {
          'mr-2 px-2 opacity-100': isActive,
          'px-0 mr-0 opacity-0 w-0': !isActive,
        })}>{selectedValues.length}</Badge>
        <span className={'!ml-0'}>{filter.name}</span>
        <ChevronDownIcon className={'w-4 h-4'} />
      </Pill>
    </PopoverTrigger>
    <PopoverContent>
      {
        filter.options?.map((option: string, index: number) => {
          const isSelected = localSelection.includes(option);
          return <div className={'flex capitalize cursor-pointer items-center gap-2 py-1 md:py-0'} key={index}
                      onClick={() => {
                        if (isSelected) {
                          setLocalSelection((prev) => prev.filter((item) => item !== option));
                        } else {
                          setLocalSelection((prev) => [...prev, option]);
                        }
                      }}>
            <Checkbox checked={isSelected} />
            <span>{option}</span>
          </div>;
        })
      }
      <div className={'flex items-center justify-between'}>
        <PopoverClose className={'mt-2'}>
          <Button variant={'link'} onClick={() => {
            router.replace(pushToQueryParams(router, {
              ...selectedFilters,
              [filter.id]: {
                options: [],
              },
            }), undefined, { shallow: true });
            setSelectedFilters((prev: any) => {
              return {
                ...prev,
                [filter.id]: {
                  options: [],
                },
              };
            });
          }} size={'sm'}>
            Clear
          </Button>
        </PopoverClose>
        <PopoverClose className={'mt-2'}>
          <Button onClick={() => {
            router.replace(pushToQueryParams(router, {
              ...selectedFilters,
              [filter.id]: {
                options: localSelection,
              },
            }), undefined, { shallow: true });
            setSelectedFilters((prev: any) => {
              return {
                ...prev,
                [filter.id]: {
                  options: localSelection,
                },
              };
            });
          }} size={'sm'}>
            Apply
          </Button>
        </PopoverClose>

      </div>
    </PopoverContent>
  </Popover>;
}

export default function FiltersBar() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({});
  const router = useRouter();
  useEffect(() => {
    const _setF: SelectedFiltersState = {};
    const _filters = queryStringToJson(router.asPath.split('?')[1] || '');
    for (let i in _filters) {
      if (FiltersJSON.find((f) => f.id === i)?.options?.length) {
        _setF[i as FilterId] = {
          options: _filters[i].split(','),
        };
      } else {
        _setF[i as FilterId] = {
          value: true,
        };
      }
    }
    setSelectedFilters(_setF);
  }, [router.asPath]);
  const resetFilters = Object.keys(extractFilters(router.query)).length > 0;
  return (
    <div className={'overflow-x-auto scrollbar-hide bg-white container'} id={'filter-bar-wrapper'}>
      <div className={'flex flex-nowrap gap-3 bg-white py-2 md:py-3 select-none items-center'}>
        {
          FiltersJSON.map((filter, index) => {
            if (filter.options?.length) {
              return <SelectableFilter key={index} filter={filter} selectedFilters={selectedFilters}
                                       setSelectedFilters={setSelectedFilters} />;
            }
            return <ToggleFilter key={index} filter={filter} selectedFilters={selectedFilters}
                                 setSelectedFilters={setSelectedFilters} />;
          })
        }
        {resetFilters && <div className={'border-l'}><Button onClick={() => {
          scrollWrapperLeftToElement(document.getElementById('filter-bar-wrapper')!, null, false);
          router.replace(pushToQueryParams(router, {}), undefined, { shallow: true });
          setSelectedFilters({});
        }} variant={'link'}>Reset Filters</Button></div>}
      </div>
    </div>
  );
}
