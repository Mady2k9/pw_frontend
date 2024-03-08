import { PageTitleBar } from '@/widgets/PageTitleBar';
import { MainBanner } from '@/widgets/MainBanner';
import ExamCategorySection from '@/widgets/ExamCategorySection';
import ResultsSection from '@/widgets/ResultsSection';
import FeaturesSection from '@/widgets/FeaturesSection';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { IPageData, IWidgetJson } from '@/api/interfaces/page';
import { Layout } from '@/components/common/Layout';
import { useRouter } from 'next/router';
import testSeriesHomePageServerSideProps from '@/lib/test-series-home-page-server-side-props';
import { ReactNode, useMemo } from 'react';
import { ExamCategoryProps } from '@/widgets/ExamCategorySection/ExamCategoryCard';
import DownloadAppBanner from '@/widgets/DownloadAppBanner';
import FAQ from '@/widgets/FAQ';
import TestPassCard from '@/widgets/TestPassCard';
import TestPassShortList from '@/widgets/TestSeriesList/TestPassShortList';
import HtmlContentWidget from '@/widgets/HtmlContentWidget/HtmlContentWidget';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return testSeriesHomePageServerSideProps(context);
}

const getWidgets = (pageData: IPageData) => {
  const widgets: {
    widget: ReactNode;
  }[] = [];
  pageData?.widgetOrder?.map((widget) => {
    switch (widget) {
      case 'CAROUSEL':
        widgets.push({
          widget: (
            <MainBanner
              stretched={true}
              leftIcon={<ChevronLeftIcon className={'h-16 w-16 stroke-white'} />}
              rightIcon={<ChevronRightIcon className={'h-16 w-16 stroke-white'} />}
              items={pageData.widgetJson['CAROUSEL']?.sectionProps?.map(
                (banner: any) => {
                  return {
                    image: banner.dwebImage,
                    mWebImage: banner.mwebImage,
                    alt: banner.altTag,
                    link: banner.redirectionUrl,
                    displayOrder: banner.displayOrder,
                  };
                }
              )}
            />
          ),
        });
        break;
      case 'TEST_PASS':
        const testPassData = pageData?.widgetJson[widget];
        widgets.push({
          widget: (
            <TestPassShortList
              title={testPassData?.sectionTitle}
              description={testPassData?.sectionSubTitle}
              items={testPassData?.sectionProps || []}
            />
          ),
        });
        break;
      case 'TEST_SERIES':
        const data = pageData?.widgetJson[widget];
        widgets.push({
          widget: (
            <FeaturesSection
              title={data?.sectionTitle}
              description={data?.sectionSubTitle}
              features={
                data?.sectionProps?.map((section: any) => {
                  return {
                    icon: section.icon,
                    title: section.title,
                    description: section.subTitle,
                  };
                }) || []
              }
            />
          ),
        });
        break;
      case 'EXAM_CATEGORIES':
        const widgetData = pageData?.widgetJson[widget];
        const categories: ExamCategoryProps[] = [];
        widgetData?.sectionProps?.map((category: IWidgetJson) => {
          const categoryData: any = category;
          categories.push({
            name: categoryData['categoryName'],
            icon: categoryData['icon'],
            iconBackgroundColor: categoryData['iconBackgroundColor'],
            color: categoryData?.cta?.['backGroundColor'],
            slug: categoryData?.cta?.['ctaRedirectionUrl'],
            actionName: categoryData?.cta?.['text'],
            actionColor: categoryData?.cta?.['textColor'],
            displayOrder: categoryData.displayOrder,
            exams:
              categoryData?.options?.map((option: any) => {
                return {
                  slug: option.redirectionUrl,
                  name: option.className,
                };
              }) || [],
          });
        });
        widgets.push({
          widget: (
            <ExamCategorySection
              title={widgetData?.sectionTitle}
              description={widgetData?.sectionSubTitle}
              ctaAltText={widgetData?.cta?.altText}
              ctaText={widgetData?.cta?.text}
              ctaColor={widgetData?.cta.textColor}
              categories={categories}
            />
          ),
        });
        break;
    }
  });
  return widgets;
};

export default function TestSeriesPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const Widgets = useMemo(() => {
    return getWidgets(props.pageData!);
  }, [props.pageData]);
  if (!props.pageData) {
    return router.replace('');
  }
  return (
    <Layout
      noIndex={true}
      footerData={props.footerData}
      seoTags={props.pageData!.seoTags}
      headerData={props.headerData}
      page_source={'TEST_SERIES'}
    >
      <PageTitleBar
        breadcrumbs={{
          items: [
            {
              label: 'Test Series',
              link: '/test-series',
            },
          ],
        }}
        noBgImage
      />
      <div className={'flex flex-col gap-8 md:gap-10'}>
        {Widgets.map((widget, index) => {
          return widget.widget;
        })}
      </div>
      {props.pageData?.widgetJson['RESULTS'] && (
        <div className={'container my-2 xl:mb-10'}>
          <ResultsSection
            results={props.pageData?.widgetJson['RESULTS']?.sectionProps}
            title={'Academic Excellence : Results'}
            description={
              'Giving wings to a millions dreams, a million more to go'
            }
          />
        </div>
      )}
      {props.pageData?.content && (
        <div className={'container my-6 xl:my-10'}>
            <HtmlContentWidget content={props?.pageData.content} />
        </div>
      )}
      {props.pageData?.faqs && (
        <div className={'container my-6 xl:my-10'}>
          <FAQ items={props.pageData?.faqs} />
        </div>
      )}
      {props.pageData?.widgetJson['APP_DOWNLOAD'] && (
        <div className={'container pt-6 xl:pt-10 xl:mb-20 mb-10'}>
          <DownloadAppBanner
            config={props.pageData?.widgetJson['APP_DOWNLOAD']}
          />
        </div>
      )}
    </Layout>
  );
}
