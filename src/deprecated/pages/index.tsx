import { verifyToken } from '@/deprecated/common/Hooks/UseAuth';
import { useRouter } from 'next/router';
import HeroSection from '@/deprecated/shared/Components/Components/HeroSection/HeroSection';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import SEO from '@/deprecated/shared/Components/SEO/seo';
// import ExamCategorySection from '@/deprecated/shared/Components/Components/ExamCategorySection/ExamCategorySection';
import ExplorePwCenter from '@/deprecated/shared/Components/Components/ExplorePwCenter/ExplorePwCenter';
//import AcademicResults from '@/deprecated/shared/Components/Molecules/AcademicResults/AcademicResults';
import TestinomialSections from '@/deprecated/shared/Components/Components/TestimonialsSection/TestinomialSections';
import DownloadAppSection from '@/deprecated/shared/Components/Molecules/DownloadAppSection/DownloadAppSection';
import YouTubeCardSection from '@/deprecated/shared/Components/Components/YouTubeCardSection/YouTubeCardSection';
import PhoneIcon from '@/deprecated/shared/Components/Molecules/PhoneIcon/PhoneIcon';
import StatsSection from '@/deprecated/shared/Components/Components/StatsSection/StatsSection';
import StudyResources from '@/deprecated/shared/Components/Components/StudyResourcesSection/StudyResources';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
import { WidgetEnum } from '@/deprecated/shared/Components/Enums/WidgetEnum';
import eventTracker from '@/deprecated/shared/Components/EventTracker/eventTracker';
import { useEffect, useMemo } from 'react';
import ComponentWrapper from '@/deprecated/shared/Components/Molecules/ComponentWrapper/ComponentWrapper';
import HeroFeatureSection from '@/deprecated/shared/Components/Components/HeroFeatureSection/HeroFeatureSection';
// import { ExamCategoryProps } from '@/widgets/ExamCategorySection/ExamCategoryCard';
import { IWidgetJson } from '@/api/interfaces/page';
import ExamCategorySection from '@/widgets/ExamCategorySection';
import { ExamCategoryProps } from '@/widgets/ExamCategorySection/ExamCategoryCard';
import ResultsSection from '@/widgets/ResultsSection';
import { Carousel } from '@/components/ui/carousel';
import { MainBanner } from '@/widgets/MainBanner';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function HomePage({
                                   HomePageData,
                                   headerData,
                                   footerData,
                                 }: {
  HomePageData: any;
  headerData: any;
  footerData: any;
}) {
  const pageData = HomePageData?.data?.widgetJson;
  const seoData = HomePageData?.data?.seoTags;
  const router = useRouter();
  useEffect(() => {
    verifyToken().then((resp) => {
      if (resp == 200) router.push('/study');
    });
    // const baseUrl: any = window.location;
    // if (!baseUrl.endsWith('admitcard/jee-main'))
  }, [router]);
  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const scrollHeight =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   const percentage = (scrollPosition / scrollHeight) * 100;

  //   if (percentage.toFixed(1) === '25.0') {
  //     eventTracker.pwPageScroll('25', window.location.href);
  //   } else if (percentage.toFixed(1) === '50.0') {
  //     eventTracker.pwPageScroll('50', window.location.href);
  //   } else if (percentage.toFixed(1) === '75.0') {
  //     eventTracker.pwPageScroll('75', window.location.href);
  //   } else if (percentage.toFixed(1) === '90.0') {
  //     eventTracker.pwPageScroll('90', window.location.href);
  //   }
  // };
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
      });
    });
    return {
      ...x,
      categories: categories,
    };
  }, [pageData]);
  return (
    <>
      <SEO
        title={seoData?.pageMetaTags?.metaTitle}
        description={seoData?.pageMetaTags?.metaDescription}
        keyword={seoData?.pageMetaTags?.metaKeywords}
        canonical={seoData?.canonicalLink}
        viewport="width=device-width, initial-scale=1"
        icon="/favicon.ico"
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        openGraph={{
          title:
            'Physicswallah Live Courses for JEE, NEET & Class 6,7,8,9,10,11,12 | NCERT Solutions',
          locale: 'en_US',
          description:
            'Physics Wallah is India\'s top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.',
          site_name: 'PW',
          url: 'https://www.pw.live/',
          images: [
            {
              url: 'https://www.pw.live/img/entrancei.jpg',
              width: '560',
              height: '292',
              alt: 'Physics Wallah is India\'s top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.',
            },
          ],
        }}
        twitterTitle="Physicswallah Live Courses for JEE, NEET & Class 6,7,8,9,10,11,12 | NCERT Solutions"
        twitterDescription="Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams."
        twitterImageUrl="https://www.pw.live/img/entrancei.jpg"
        twitterImageHeight="560"
        twitterImageWidth="292"
      />
      <Header headerData={headerData} showLogin />
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
        )}

      {/*{pageData?.[WidgetEnum?.HERO_SECTION] && (*/}
      {/*  <HeroSection HeroSectionData={pageData?.[WidgetEnum?.HERO_SECTION]} />*/}
      {/*)}*/}

      {/*<HeroFeatureSection*/}
      {/*  heroFeatureData={pageData?.[WidgetEnum?.HERO_SECTION]}*/}
      {/*/>*/}

      {/*{*/}
      {/*  widgetData && <ExamCategorySection title={widgetData?.sectionTitle || ''}*/}
      {/*                                     ctaText={widgetData?.cta?.text}*/}
      {/*                                     ctaAltText={widgetData?.cta?.altText}*/}
      {/*                                     ctaColor={widgetData?.cta?.textColor}*/}
      {/*                                     description={widgetData?.sectionSubTitle}*/}
      {/*                                     categories={widgetData?.categories} />*/}
      {/*}*/}

      {/*{pageData?.[WidgetEnum.VIDYAPEETH] && (*/}
      {/*  <ExplorePwCenter*/}
      {/*    explorePWCenterData={pageData?.[WidgetEnum.VIDYAPEETH]}*/}
      {/*  />*/}
      {/*)}*/}
      {/*<ComponentWrapper*/}
      {/*  title={pageData?.[WidgetEnum.STATS].sectionTitle}*/}
      {/*  subTitle={pageData?.[WidgetEnum.STATS].sectionSubTitle}*/}
      {/*>*/}
      {/*  <StatsSection statsData={pageData?.[WidgetEnum.STATS]} />*/}
      {/*</ComponentWrapper>*/}

      {/*<div className={'container'}>*/}
      {/*  {pageData?.[WidgetEnum.RESULTS] && (*/}
      {/*    <ResultsSection hideCategories={false} results={pageData?.[WidgetEnum.RESULTS].sectionProps}*/}
      {/*                    title={pageData?.[WidgetEnum.RESULTS].sectionTitle}*/}
      {/*                    description={pageData?.[WidgetEnum.RESULTS].sectionSubTitle} />*/}
      {/*  )}*/}
      {/*</div>*/}

      {/*<DownloadAppSection />*/}

      {/*{pageData?.[WidgetEnum.TESTIMONIALS] && (*/}
      {/*  <TestinomialSections*/}
      {/*    testinomialData={pageData?.[WidgetEnum.TESTIMONIALS]}*/}
      {/*  />*/}
      {/*)}*/}
      {/*<ComponentWrapper*/}
      {/*  title={pageData?.[WidgetEnum.STUDY_RESOURCE].sectionTitle}*/}
      {/*  subTitle={pageData?.[WidgetEnum.STUDY_RESOURCE].sectionSubTitle}*/}
      {/*>*/}
      {/*  <StudyResources resourceData={pageData?.[WidgetEnum.STUDY_RESOURCE]} />*/}
      {/*</ComponentWrapper>*/}

      {/*{pageData?.[WidgetEnum.YOUTUBE_STATS] && (*/}
      {/*  <YouTubeCardSection*/}
      {/*    youtubeData={pageData?.[WidgetEnum.YOUTUBE_STATS]}*/}
      {/*  />*/}
      {/*)}*/}
      {/*<PhoneIcon />*/}
      <Footer footerData={footerData} showFreeLearning />
    </>
  );
}

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
  return {
    props: {
      HomePageData: HomePageData || {},
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
