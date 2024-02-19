import { useEffect, useState } from 'react';
import Image from '../Atoms/Image/Image';
import Input from '../Atoms/Input/Input';
import FilterTabBox from './FilterTabBox';
import RightDownIcon from '../../../assets/Images/Right-Icon-Chip2.webp';
import { useRouter } from 'next/router';

const FILTERCOMPONENTS = {
  ONLINE: 'Online',
  OFFLINE: 'Offline',
  PRICING: 'Pricing',
  LANGUAGE: 'Languauge',
  NEWLY_LAUNCHED: 'Newly Launched',
};
const filter = [
  {
    name: 'Online',
    key: FILTERCOMPONENTS.ONLINE,
    filterbox: [],
    state: false,
    dropBox: false,
    selectedSubFilter: [],
  },
  {
    name: 'Offline',
    key: FILTERCOMPONENTS.OFFLINE,
    filterbox: [],
    dropBox: false,
    state: false,
    selectedSubFilter: [],
  },
  {
    name: 'Pricing',
    key: FILTERCOMPONENTS.PRICING,
    dropBox: true,
    state: [],
    filterbox: ['Free', 'Paid'],
    selectedSubFilter: [],
  },
  {
    name: 'Language',
    key: FILTERCOMPONENTS.LANGUAGE,
    dropBox: true,
    stete: [],
    filterbox: ['English', 'Hindi', 'Gujrati'],
    selectedSubFilter: [],
  },
  {
    name: 'Newly Launched',
    key: FILTERCOMPONENTS.NEWLY_LAUNCHED,
    filterbox: [],
    dropBox: false,
    state: false,
    selectedSubFilter: [],
  },
];
const FilterTab = ({
  // filters,
  showSearch,
}: {
  filters: any;
  showSearch?: boolean;
}) => {
  const [applidFilters, setAppliedFilters] = useState<any>([]);
  const [pricingBox, setPricingBox] = useState({
    filterbox: ['Free', 'Paid'],
    selectedSubFilter: [],
    status: false,
  });
  const [languageBox, setLanguaugeBox] = useState({
    filterbox: ['English', 'Hindi', 'Gujrati'],
    selectedSubFilter: [],
    status: false,
  });
  const router = useRouter();
  const handleAppliedFilter = (filter: any) => {
    if (filter.key === FILTERCOMPONENTS.PRICING) {
      setPricingBox({
        ...pricingBox,
        status: !pricingBox.status,
      });
      setLanguaugeBox({ ...languageBox, status: false });
    } else if (filter.key === FILTERCOMPONENTS.LANGUAGE) {
      setLanguaugeBox({
        ...languageBox,
        status: !languageBox.status,
      });
      setPricingBox({ ...pricingBox, status: false });
    } else if (applidFilters?.includes(filter.key)) {
      const newAppliedFilter = applidFilters?.filter(
        (element: string) => element !== filter.key
      );
      setAppliedFilters(newAppliedFilter);
    } else {
      setAppliedFilters([...applidFilters, filter.key]);
    }
  };
  const handleRouting = () => {
    let queryParams = '';
    if (applidFilters.includes(FILTERCOMPONENTS.ONLINE))
      queryParams = queryParams + 'online=true&';
    if (applidFilters.includes(FILTERCOMPONENTS.OFFLINE))
      queryParams = queryParams + 'offline=true&';
    if (pricingBox.selectedSubFilter.length > 0) {
      const subfilter = pricingBox.selectedSubFilter.join('%2C');
      queryParams = queryParams + 'price=' + subfilter + '&';
    }
    if (languageBox.selectedSubFilter.length > 0) {
      const subfilter = languageBox.selectedSubFilter.join('%2C');
      queryParams = queryParams + 'language=' + subfilter + '&';
    }
    if (applidFilters.includes(FILTERCOMPONENTS.NEWLY_LAUNCHED))
      queryParams = queryParams + 'new=true&';
    const baseUrl = router.asPath.split('?')[0];
    router.push({
      pathname: baseUrl,
      query: queryParams.slice(0, -1),
    });
    [0];
  };
  const handleResetButton = () => {
    setAppliedFilters([]);
    const baseUrl = router.asPath.split('?')[0];
    router.push({
      pathname: baseUrl,
    });
  };
  useEffect(() => {
    if (applidFilters.length > 0 || pricingBox.status || languageBox.status)
      handleRouting();
  }, [applidFilters, pricingBox, languageBox]);

  return (
    <>
      <div className=" max-w-6xl mx-auto justify-between relative flex md:flex-row flex-col md:py-3 py-2 bg-white">
        <div className=" md:justify-between  justify-center  slideBarRemove overflow-x-scroll items-center ">
          <div className="flex flex-row items-center  px-4 md:px-0 gap-2.5 sm:gap-4">
            {filter?.map((filter: any, index: number) => (
              <div
                key={index}
                className={`cursor-pointer rounded-[28px] border-[1px] ${
                  applidFilters?.includes(filter.key) ||
                  filter.selectedSubFilter.length > 0
                    ? 'border-black bg-[#F8F8F8]'
                    : ''
                } `}
              >
                <div
                  onClick={() => handleAppliedFilter(filter)}
                  className="my-[10px] flex flex-row items-center justify-center gap-2 mx-[20px] text-[14px] leading-[20px] font-[500] whitespace-nowrap  px[2px]"
                >
                  {filter.name}
                  {filter?.filterbox?.length > 0 &&
                  !applidFilters?.includes(filter.key) ? (
                    <Image
                      bgImagetitle={RightDownIcon.src}
                      className={'w-5 h-5 bg-no-repeat bg-cover bg-center'}
                    />
                  ) : (
                    ''
                  )}
                  {applidFilters?.includes(filter.key) && (
                    <div className="text-[12px] "> &#x2715; </div>
                  )}
                </div>
                {filter.key === FILTERCOMPONENTS.PRICING &&
                  pricingBox.status && (
                    <FilterTabBox
                      showBox={pricingBox}
                      setShowBox={setPricingBox}
                    />
                  )}
                {filter.key === FILTERCOMPONENTS.LANGUAGE &&
                  languageBox.status && (
                    <FilterTabBox
                      showBox={languageBox}
                      setShowBox={setLanguaugeBox}
                    />
                  )}
              </div>
            ))}
            <hr className=" h-8 border-[0.8px] border-[#D9DCE1]" />
            <div
              onClick={handleResetButton}
              className="text-[#1B2124] text-sm font-semibold min-w-[80px] cursor-pointer"
            >
              Reset Filters
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="w-[328px] xl:w-[300px] max-h-[40px] border-[1px] border-[#D9DCE1] m-auto py-2.5 px-4 sm:py-3 sm:px-3 rounded-md flex items-center gap-2.5 sm:gap-2">
            <Image
              bgImagetitle={'/search.webp'}
              className={'h-[18px] w-[18px] bg-center bg-contain bg-no-repeat '}
            />
            <Input
              className="border-0 focus:outline-none"
              placeholder="Search for your batch"
              type={'text'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FilterTab;
