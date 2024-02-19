import Footer from '../Molecules/Footer/footer';
import BatchCardSectionAllCourses from '../BatchCardSection/BatchCardSectionAllCourses';
import CourseHeroSection from '../CourseHeroSection/CourseHeroSection';
import { useEffect, useMemo, useRef, useState } from 'react';
import DescriptionContent from '../DescriptionContent/DescriptionContent';
import Header from '../Molecules/Header/header';
import FAQ from '../Molecules/Faq/FAQ';
import AcademicResults from '../Molecules/AcademicResults/AcademicResults';
import CohortTab from '../CohortTab/CohortTab.';
import BatchCardSectionForExams from '../BatchCardSection/BatchCardSectionForExams';
import DownloadAppSection from '../Molecules/DownloadAppSection/DownloadAppSection';
import { useRouter } from 'next/router';
import SEO from '../SEO/seo';
import {
  fetchFilteredBatchNotForAll,
  queryStringToJson,
} from '@/deprecated/common/fetcher-service/fetcherBatchListing/FetchBatchNotForAll';
import Shimmer from '@/deprecated/shared/Components/ShimmerEffect/Shimmer';

const ListingPage = ({
  params,
  cohortId,
}: {
  params: any;
  cohortId?: string;
}) => {
  const PAGE_SOURCE = 'Listing page';
  const router = useRouter();
  const CohortTabRef = useRef<HTMLDivElement>(null);
  const cohortKey = (router.query.cohort || '') as string;
  const batchKey = (router.query.batch || '') as string;
  const [clientFiltersData, setClientFiltersData] = useState<any>(
    params.clientFiltersData
  );
  const [selectedCohort, setSelectedcohort] = useState(-1);
  const [showShimmerEffect, setShowShimmerEffect] = useState(false);
  const [cohortTabPosition, setCohortTabPosition] = useState<boolean | null>(
    null
  );
  const [isInViewport, setIsInViewport] = useState(false);
  const infiniteScrollRef = useRef(null);
  useEffect(() => {
    if (params.cohortObject) {
      const _p = queryStringToJson(router.asPath?.split('?')[1]);
      for (const i in _p) {
        if (i !== 'cohortIds' && _p[i]) {
          setShowShimmerEffect(true);
        }
      }
      if (
        router.asPath?.split('?')?.[1] &&
        router.asPath?.split('?')[1].length > 0
      ) {
        fetchFilteredBatchNotForAll(
          queryStringToJson(router.asPath?.split('?')[1]),
          params.cohortObject?.cohortId
        )
          .then((d) => {
            setClientFiltersData(d?.data);
          })
          .finally(() => {
            setShowShimmerEffect(false);
          });
      }
    }
  }, [router.asPath]);

  const [startVar, setStartVar] = useState(0);

  const loadMoreData = () => {
    const newStart = startVar + 6;
    setStartVar(newStart);
    const pageFilter = router.asPath?.split('?')[1];

    fetchFilteredBatchNotForAll(
      queryStringToJson(
        (pageFilter ? pageFilter : '') +
          (pageFilter ? `&start=` : `?start=`) +
          newStart +
          '&count=6'
      ),
      params.cohortObject?.cohortId
    )
      .then((d) => {
        setClientFiltersData(d?.data);
      })
      .finally(() => {
        setShowShimmerEffect(false);
      });
  };
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setIsInViewport(true));
      } else {
        setIsInViewport(false);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (infiniteScrollRef.current) {
      observer.observe(infiniteScrollRef.current);
    }
    if (isInViewport) {
      loadMoreData();
    }
    return () => {
      observer.disconnect();
    };
  }, [isInViewport]);

  const handleCohortTab = (entries: Array<any>) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (!entry.isIntersecting && !cohortTabPosition) {
        setCohortTabPosition(true);
      } else if (cohortTabPosition) {
        setCohortTabPosition(false);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleCohortTab);
    if (CohortTabRef.current) {
      observer.observe(CohortTabRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const option = cohortKey;
    if (option) {
      const cohort = batchListingData?.options?.filter(
        (tab: any) =>
          tab?.option?.replace(' ', '-').toLowerCase() === option.toLowerCase()
      );
      const index = batchListingData?.options?.findIndex(
        (tab: { option: string }) => tab.option === cohort?.[0]?.option
      );
      handleSelectedCohort(index + 1, cohort[0]);
    } else {
      handleSelectedCohort(0, 'All Batches');
    }
  }, []);

  const handleSelectedCohort = (key: number, cohort: any) => {
    setSelectedcohort(key);
  };
  const batchListingData = params?.batchlistingAll?.data;
  const batchListingNotForAll = params?.batchNotForAll?.data;
  const [paginateBatchData, setPaginateBatchData] = useState<any>([]);

  const renderBatches = () => {
    let cohort = batchListingData?.options?.[selectedCohort - 1];
    if (!cohort) {
      cohort = batchListingData?.options?.find(
        (tab: any) =>
          tab?.option?.replace(' ', '-').toLowerCase() ===
          (router.query.cohort as string)?.toLowerCase()
      );
    }
    const batches = batchListingNotForAll?.batches?.[cohort?.cohortId] || [];
    // setPaginateBatchData((prev: any) => [...prev, ...batches]);
    if (showShimmerEffect) {
      return (
        <div className={'p-4'}>
          <Shimmer
            shimmerHeight="h-[500px]"
            chontainerHeight="mx-auto max-w-6xl"
          />
        </div>
      );
    }
    // console.log(batches, clientFiltersData, 'abcderfcd');
    return (
      <BatchCardSectionForExams
        mainHeading={''}
        BatchData={clientFiltersData ? clientFiltersData : batches}
      />
    );
  };
  console.log(paginateBatchData, 'abcde');
  const tabData = useMemo(() => {
    if (!batchListingData?.options) {
      return [];
    }
    let filter = router.asPath.split('?')[1];
    if (filter) {
      filter = `?${filter}`;
    } else {
      filter = '';
    }
    const result = [
      {
        cohortId: null,
        option: 'All Batches',
        active: selectedCohort === 0,
        link: `/batches/${batchKey}` + filter,
      },
    ];
    if (batchListingData?.options) {
      batchListingData?.options?.forEach((o: any, index: number) => {
        return result.push({
          ...o,
          active: selectedCohort === index + 1,
          link:
            `/batches/${batchKey}/${o.option}`
              .toLowerCase()
              .replace(/ /g, '-') + filter,
        });
      });
    }

    return result;
  }, [
    batchKey,
    batchListingData?.options,
    cohortKey,
    router.asPath,
    selectedCohort,
  ]);
  return (
    <>
      <SEO
        title={batchListingData?.seoTags?.pageMetaTags?.metaTitle}
        description={batchListingData?.seoTags?.pageMetaTags?.metaDescription}
        keyword={batchListingData?.seoTags?.pageMetaTags?.metaKeywords}
        canonical={batchListingData?.seoTags?.canonicalLink}
        seoSchema={batchListingData?.seoSchema}
        openGraph={{
          title: batchListingData?.seoTags?.pageMetaTags?.metaTitle,
          description: batchListingData?.seoTags?.pageMetaTags?.metaDescription,
          site_name: 'PW',
          url: router?.asPath,
          images: [
            {
              url: 'https://www.pw.live/img/entrancei.jpg',
              width: '560',
              height: '292',
              alt: "Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.",
            },
          ],
        }}
        twitterTitle=""
        twitterDescription=""
        twitterImageUrl="https://www.pw.live/img/entrancei.jpg"
        twitterImageHeight="560"
        twitterImageWidth="292"
      />
      <Header headerData={params?.headerData} showLogin />
      <CourseHeroSection
        mainHeading={batchListingData?.title}
        description={batchListingData?.description}
        initialValue={'Courses'}
      />
      <div
        className={
          cohortTabPosition
            ? 'sticky top-[60px] sm:top-[80px] z-20 border-b-[1px] bg-white'
            : ''
        }
        ref={CohortTabRef}
      >
        <CohortTab
          selectedCohort={selectedCohort}
          handleSelectedCohort={handleSelectedCohort}
          tabData={tabData}
          cohortId={params.cohortObject?.cohortId}
          setSelectedcohort={setSelectedcohort}
        />
      </div>
      {
        <div className={''}>
          {!cohortKey ? (
            <>
              {batchListingData?.options?.map(
                (option: { option: string; cohortId: string | number }) => {
                  return (
                    <>
                      {/* {batchListingData ? ( */}
                      <BatchCardSectionAllCourses
                        key={option?.option}
                        mainHeading={
                          option?.option + ' ' + batchListingData.title
                        }
                        viewAllUrl={`/batches/${batchKey}/${option.option
                          ?.toLowerCase()
                          ?.replace(/ /g, '-')}`}
                        BatchData={batchListingData?.batches[option.cohortId]}
                      />
                    </>
                  );
                }
              )}
            </>
          ) : (
            <>{renderBatches()}</>
          )}
        </div>
      }
      <div ref={infiniteScrollRef}>
        {batchListingData?.widgetJson?.RESULTS && (
          <AcademicResults
            academicResultData={batchListingData?.widgetJson?.RESULTS}
          />
        )}
      </div>
      <DescriptionContent contentData={batchListingData?.content} />
      <FAQ
        page_source={PAGE_SOURCE}
        items={batchListingData?.faqs?.map((f: any) => {
          return {
            ...f,
            title: f.question,
            description: f.answer,
          };
        })}
        heading="Frequently Asked Questions"
      />
      {batchListingData?.widgetJson?.APP_DOWNLOAD && (
        <DownloadAppSection
          downloadAppData={batchListingData?.widgetJson?.APP_DOWNLOAD}
        />
      )}
      <Footer footerData={params?.footerData} showFreeLearning />
    </>
  );
};

export default ListingPage;
