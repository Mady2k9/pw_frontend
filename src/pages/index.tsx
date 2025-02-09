import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { Layout } from '@/components/common/Layout';
import { WidgetEnum } from '@/deprecated/shared/Components/Enums/WidgetEnum';
import { MainBanner } from '@/widgets/MainBanner';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
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
import HomePage from '@/deprecated/pages';


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
  const pageData = props?.HomePageData?.data?.widgetJson;
  const widgetData = useMemo(() => {
    const x = pageData?.[WidgetEnum.EXAM_CATEGORIES];
    const categories: ExamCategoryProps[] = [];
    x?.sectionProps?.map((category: IWidgetJson) => {
      const categoryData: any = category;
      categories.push({
        name: categoryData['categoryName'],
        icon: categoryData['icon'],
        color: categoryData?.cta?.['backGroundColor'],
        iconBackgroundColor: categoryData['iconBackgroundColor'],
        slug: categoryData?.cta?.['ctaRedirectionUrl'],
        actionName: categoryData?.cta?.['text'],
        actionColor: categoryData?.cta?.['textColor'],
        exams: categoryData?.options?.map((option: any) => {
          return {
            slug: option.redirectionUrl,
            name: option.className,
          };
        }) || [],
        displayOrder: 0,
      });
    });
    return {
      ...x,
      categories: categories,
    };
  }, [pageData]);
  return (
    <Layout headerData={props.headerData} footerData={props.footerData} seoTags={props.HomePageData?.data?.seoTags}
            page_source={'HOME'}>
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
          <ResultsSection hideCategories={false}
                          results={pageData?.[WidgetEnum.RESULTS].sectionProps}
                          title={pageData?.[WidgetEnum.RESULTS].sectionTitle}
                          description={pageData?.[WidgetEnum.RESULTS].sectionSubTitle} />
        )}
      </div>
    </Layout>
  );
}

export default Home;
