import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/common/Layout';
import { WidgetEnum } from '@/deprecated/shared/Components/Enums/WidgetEnum';
import { MainBanner } from '@/widgets/MainBanner';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import HeroSection from '@/deprecated/shared/Components/Components/HeroSection/HeroSection';
import HeroFeatureSection from '@/deprecated/shared/Components/Components/HeroFeatureSection/HeroFeatureSection';
import ExamCategorySection from '@/widgets/ExamCategorySection';
import ExplorePwCenter from '@/deprecated/shared/Components/Components/ExplorePwCenter/ExplorePwCenter';
import ComponentWrapper from '@/deprecated/shared/Components/Molecules/ComponentWrapper/ComponentWrapper';
import StatsSection from '@/deprecated/shared/Components/Components/StatsSection/StatsSection';
import ResultsSection from '@/widgets/ResultsSection';
import DownloadAppSection from '@/deprecated/shared/Components/Molecules/DownloadAppSection/DownloadAppSection';
import TestinomialSections from '@/deprecated/shared/Components/Components/TestimonialsSection/TestinomialSections';
import StudyResources from '@/deprecated/shared/Components/Components/StudyResourcesSection/StudyResources';
import YouTubeCardSection from '@/deprecated/shared/Components/Components/YouTubeCardSection/YouTubeCardSection';
import PhoneIcon from '@/deprecated/shared/Components/Molecules/PhoneIcon/PhoneIcon';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { verifyToken } from '@/deprecated/common/Hooks/UseAuth';
import eventTracker from '@/deprecated/shared/Components/EventTracker/eventTracker';
import { ExamCategoryProps } from '@/widgets/ExamCategorySection/ExamCategoryCard';
import { IWidgetJson } from '@/api/interfaces/page';


export async function getServerSideProps() {
  let HomePageData;
  let headerData;
  let footerData;

  try {
    const result = await Promise.all([
      FetchHomePage(),
      FetchHeader(),
      FetchFooter(),
    ]);
    HomePageData = result[0];
    headerData = result[1];
    footerData = result[2];
  } catch (error) {
    // console.log(error);
  }
  // if (!headerData?.data || !footerData?.data) {
  //   console.log('Redirecting to home page');
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/',
  //     },
  //     props: {},
  //   };
  // }
  return {
    props: {
      HomePageData: HomePageData || {},
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
function Home(props: any) {
  const pageData = useMemo(()=>{
    return props?.HomePageData?.data?.widgetJson
  },[props?.HomePageData?.data?.widgetJson]);
  const router = useRouter();
  useEffect(() => {
    verifyToken().then((resp) => {
      if (resp == 200) router.push('/study');
    });
  }, [router]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const marketingCampaigns = {} as any;
    const setMarketingAttribute = (paramName: string) => {
      const paramValue = queryParams.get(paramName);
      if (paramValue) {
        marketingCampaigns[paramName] = paramValue;
      }
    };
    setMarketingAttribute('utm_source');
    setMarketingAttribute('utm_medium');
    setMarketingAttribute('utm_campaign');
    setMarketingAttribute('utm_term');
    setMarketingAttribute('utm_content');
    setMarketingAttribute('gclid');
    setMarketingAttribute('fbclid');
    setMarketingAttribute('igshid');
    if (Object.keys(marketingCampaigns).length > 0) {
      const jsonMarketingCampaign = JSON.stringify(marketingCampaigns);
      localStorage.setItem('campaignParam', btoa(jsonMarketingCampaign));
    }
  });

  useEffect(() => {
    eventTracker.pwLandingPage();
  }, []);

  const widgetData = useMemo(() => {
    const x = pageData?.[WidgetEnum.EXAM_CATEGORIES];
    const categories: ExamCategoryProps[] = [];
    x?.sectionProps?.map((category: IWidgetJson) => {
      const categoryData: any = category;
      categories.push({
        name: categoryData['categoryName'],
        icon: categoryData['icon'],
        color: categoryData?.cta?.['backGroundColor'],
        slug: categoryData?.cta?.['ctaRedirectionUrl'],
        actionName: categoryData?.cta?.['text'],
        actionColor: categoryData?.cta?.['textColor'],
        exams: categoryData?.options?.map((option: any) => {
          return {
            slug: option.redirectionUrl,
            name: option.className,
          };
        }) || [],
        displayOrder: 0
      });
    });
    return {
      ...x,
      categories: categories,
    };
  }, [pageData]);
  return (
    <Layout headerData={props.headerData} page_source={'HOME'}>
      {
        pageData?.[WidgetEnum?.CAROUSEL] && (
          <MainBanner stretched={true}
                      leftIcon={<ChevronLeftIcon className={'h-16 w-16 stroke-white'} />}
                      rightIcon={<ChevronRightIcon className={'h-16 w-16 stroke-white'} />}
                      autoplayInterval={5000}
                      items={pageData?.[WidgetEnum?.CAROUSEL]?.sectionProps.map((banner: any) => {
                        return {
                          image: banner.dwebImage,
                          mWebImage: banner.mwebImage,
                          alt: banner.altTag,
                          link: banner.redirectionUrl,
                        };
                      })} />
        )
      }
      {/*{pageData?.[WidgetEnum?.HERO_SECTION] && (*/}
      {/*  <HeroSection HeroSectionData={pageData?.[WidgetEnum?.HERO_SECTION]} />*/}
      {/*)}*/}

      {/*<HeroFeatureSection*/}
      {/*  heroFeatureData={pageData?.[WidgetEnum?.HERO_SECTION]}*/}
      {/*/>*/}

      {
        widgetData && <ExamCategorySection title={widgetData?.sectionTitle || ''}
                                           ctaText={widgetData?.cta?.text}
                                           ctaAltText={widgetData?.cta?.altText}
                                           ctaColor={widgetData?.cta?.textColor}
                                           description={widgetData?.sectionSubTitle}
                                           categories={widgetData?.categories} />
      }

      {pageData?.[WidgetEnum.VIDYAPEETH] && (
        <ExplorePwCenter
          explorePWCenterData={pageData?.[WidgetEnum.VIDYAPEETH]}
        />
      )}
      <ComponentWrapper
        title={pageData?.[WidgetEnum.STATS].sectionTitle}
        subTitle={pageData?.[WidgetEnum.STATS].sectionSubTitle}
      >
        <StatsSection statsData={pageData?.[WidgetEnum.STATS]} />
      </ComponentWrapper>

      <div className={'container'}>
        {pageData?.[WidgetEnum.RESULTS] && (
          <ResultsSection hideCategories={false} results={pageData?.[WidgetEnum.RESULTS].sectionProps}
                          title={pageData?.[WidgetEnum.RESULTS].sectionTitle}
                          description={pageData?.[WidgetEnum.RESULTS].sectionSubTitle} />
        )}
      </div>

      <DownloadAppSection />

      {pageData?.[WidgetEnum.TESTIMONIALS] && (
        <TestinomialSections
          testinomialData={pageData?.[WidgetEnum.TESTIMONIALS]}
        />
      )}
      <ComponentWrapper
        title={pageData?.[WidgetEnum.STUDY_RESOURCE].sectionTitle}
        subTitle={pageData?.[WidgetEnum.STUDY_RESOURCE].sectionSubTitle}
      >
        <StudyResources resourceData={pageData?.[WidgetEnum.STUDY_RESOURCE]} />
      </ComponentWrapper>

      {pageData?.[WidgetEnum.YOUTUBE_STATS] && (
        <YouTubeCardSection
          youtubeData={pageData?.[WidgetEnum.YOUTUBE_STATS]}
        />
      )}
      <PhoneIcon />
      {
        props.footerData && <Footer footerData={props.footerData} showFreeLearning />
      }
    </Layout>
  );
}

export default Home;
