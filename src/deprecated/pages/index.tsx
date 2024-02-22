import { verifyToken } from '@/deprecated/common/Hooks/UseAuth';
import { useRouter } from 'next/router';
import HeroSection from '@/deprecated/shared/Components/Components/HeroSection/HeroSection';
import Carousel from '@/deprecated/shared/Components/Molecules/Caraousel/Caraousel';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import SEO from '@/deprecated/shared/Components/SEO/seo';
import ExamCategorySection from '@/deprecated/shared/Components/Components/ExamCategorySection/ExamCategorySection';
import ExplorePwCenter from '@/deprecated/shared/Components/Components/ExplorePwCenter/ExplorePwCenter';
import AcademicResults from '@/deprecated/shared/Components/Molecules/AcademicResults/AcademicResults';
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
import { useEffect } from 'react';
import Head from 'next/head';
import SoftwareAppSchema from '@/deprecated/schema/SoftwareAppSchema';
import OrganisationAppSchema from '@/deprecated/schema/OrganisationAppSchema';
import ComponentWrapper from '@/deprecated/shared/Components/Molecules/ComponentWrapper/ComponentWrapper';
import HeroFeatureSection from '@/deprecated/shared/Components/Components/HeroFeatureSection/HeroFeatureSection';
import GoogleTagManager from '@/deprecated/analytics/GoogleTagManager';
import GTM from '@/deprecated/analytics/GTM';

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
    // handleScroll();
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={OrganisationAppSchema()}
          key="OrganisationAppSchema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={SoftwareAppSchema()}
          key="SoftwareAppSchema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={GoogleTagManager()}
          key="GoogleTagManager"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={GTM()}
          key="GTM"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="//cdnt.netcoresmartech.com/smartechclient.js"/>

      </Head>
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
            "Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.",
          site_name: 'PW',
          url: 'https://www.pw.live/',
          images: [
            {
              url: 'https://www.pw.live/img/entrancei.jpg',
              width: '560',
              height: '292',
              alt: "Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.",
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
      {pageData?.[WidgetEnum?.CAROUSEL] && (
        <Carousel
          carouselData={pageData?.[WidgetEnum?.CAROUSEL]?.sectionProps}
          containerClass="mx-auto"
          mwebImageClassName={'bg-cover w-full h-full'}
          dwebImageClassName={'bg-cover w-full h-full'}
          setIntervalTime={5000}
          showSecondaryArrow
        />
      )}

      {pageData?.[WidgetEnum?.HERO_SECTION] && (
        <HeroSection HeroSectionData={pageData?.[WidgetEnum?.HERO_SECTION]} />
      )}

      <HeroFeatureSection
        heroFeatureData={pageData?.[WidgetEnum?.HERO_SECTION]}
      />

      <ComponentWrapper
        title={pageData?.[WidgetEnum.EXAM_CATEGORIES].sectionTitle}
        subTitle={pageData?.[WidgetEnum.EXAM_CATEGORIES].sectionSubTitle}
      >
        <ExamCategorySection
          examCategoryData={pageData?.[WidgetEnum.EXAM_CATEGORIES]}
        />
      </ComponentWrapper>
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
      <ComponentWrapper
        title={pageData?.[WidgetEnum.RESULTS].sectionTitle}
        subTitle={pageData?.[WidgetEnum.RESULTS].sectionSubTitle}
        classname="px-0"
      >
        <AcademicResults
          academicResultData={pageData?.[WidgetEnum.RESULTS]}
          showClassesScrollData
        />
      </ComponentWrapper>

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
