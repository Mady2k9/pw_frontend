import { PageTitleBar } from '@/widgets/PageTitleBar';
import { PageTabItemProps, PageTabs } from '@/widgets/PageTabs';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import TestSeriesShortList from '@/widgets/TestSeriesList/TestSeriesShortList';
import { useRouter } from 'next/router';
import ResultsSection from '@/widgets/ResultsSection';
import FAQ from '@/widgets/FAQ';
import DownloadAppBanner from '@/widgets/DownloadAppBanner';
import { slugToString, stringToSlug } from '@/lib/utils';
import { ICohortOptions, IPageData } from '@/api/interfaces/page';
import { BatchLoadingGrid } from '@/widgets/BatchList/BatchLoadingGrid';
import TestCohortSlider from './TestCohortSlider';
import HtmlContentWidget from '../HtmlContentWidget/HtmlContentWidget';

const cohortToCohortTabs = ({ courseKey, cohortOptions }: {
  courseKey: string,
  cohortKey?: string,
  cohortOptions?: ICohortOptions[]
}) => {
  const urlParts = ['', 'test-series', courseKey];
  const items = [{
    title: 'All Tests series',
    link: urlParts.join('/'),
    key: 'all',
  }];
  if (cohortOptions?.length) {
    cohortOptions.forEach((option) => {
      items.push({
        title: option.option,
        link: `${urlParts.join('/')}/${stringToSlug(option.option)}`,
        key: stringToSlug(option.option).toLowerCase(),
      });
    });
  }
  return items;
};
const getBreadcrumbs = ({ cohortKey, courseKey }: {
  courseKey: string,
  cohortKey?: string,
}) => {
  const items: { label: string, link: string }[] = [{
    label: `${slugToString(courseKey).toUpperCase()} Test Series`,
    link: `/test-series/${stringToSlug(courseKey)}`,
  }];
  if (cohortKey) {
    items.push({
      label: `${slugToString(cohortKey)} ${stringToSlug(courseKey).toUpperCase()} Test Series`,
      link: `/test-series/${stringToSlug(courseKey)}/${stringToSlug(cohortKey)}`,
    });
  }
  return items;
};

function getWidgets(props: IPageData) {
  const result: ReactElement[] = [];
  props.widgetOrder?.forEach((widget) => {
    if (widget === 'RESULTS') {
      const resultData = props.widgetJson['RESULTS'];
      result.push(<ResultsSection hideCategories={resultData.sectionProps.length < 2  ?  true : false } results={resultData.sectionProps}
                                  title={resultData.sectionTitle}
                                  description={resultData.sectionSubTitle} />);
    } else if (widget === 'APP_DOWNLOAD') {
      const downloadData = props.widgetJson['APP_DOWNLOAD'];
      result.push(<DownloadAppBanner config={downloadData} />);
    }
  });
  return result;
}

export default function TestSeriesListPage(props: IPageData & { params: any }) {
  const router = useRouter();
  const { courseKey, cohortKey } = router.query;
  const items = cohortToCohortTabs({
    courseKey: courseKey as string,
    cohortKey: cohortKey as string,
    cohortOptions: props.options,
  });
  const [activeTab, setActiveTab] = useState<string>(props.params.cohortKey || 'all');
  useEffect(() => {
    if (router.query.cohortKey) {
      setActiveTab(router.query.cohortKey as string);
    }
  }, [router.query]);
  const Widgets = useMemo(() => {
    return getWidgets(props);
  }, [props]);
  const activeCohort = useMemo(() => {
    return props.options?.find((option: ICohortOptions) => (stringToSlug(option.option) === activeTab));
  }, [activeTab, props.options]);
  const sectionContents: 'ALL' | 'COHORT' | 'LOADING' = (!router.query.cohortKey || (router.query.cohortKey && activeTab === 'all')) ? 'ALL' : (props.options && cohortKey && activeCohort ? 'COHORT' : 'LOADING');
  return <>
    <PageTitleBar
      breadcrumbs={{
        items: getBreadcrumbs({
          courseKey: courseKey as string,
          cohortKey: cohortKey as string,
        }),
      }}
      description={props.description}
      title={<div className={'flex flex-wrap'}>
        {
          cohortKey &&
          <span className={'capitalize whitespace-nowrap mr-1.5'}>{slugToString(cohortKey as string)}</span>
        }
        <span
          className={'text-primary whitespace-nowrap mr-1.5'}>{props.title}</span>
        <span>
          Test Series
        </span>
      </div>} />
    {
      props.options && <PageTabs activeItem={activeTab} items={items} handleClick={(e, item) => {
        setActiveTab(item);
      }} />
    }
    {
      sectionContents === 'ALL' &&
      <div className={'mt-4 md:mt-6 space-y-8'}>
        {
          props.options?.map((cohortOption, index) => {
            if (!props.testCats?.[cohortOption.cohortId]) {
              return <></>;
            }
            return <TestCohortSlider key={index}
                                     cohort={cohortOption}
                                     title={`${cohortOption.option} ${slugToString(courseKey as string).toUpperCase()} Courses`}
                                     testSeries={props.testCats[cohortOption.cohortId] || []}
                                     showMoreLink={`/test-series/${courseKey}/${stringToSlug(cohortOption.option as string)}`} />;
          })
        }
      </div>
    }
    {
      sectionContents === 'COHORT' &&
      <div className={' overflow-visible mt-4 md:mt-6 space-y-8'}>
        <TestSeriesShortList testSeries={props.testCats[activeCohort!.cohortId as any]} cohort={activeCohort!} />
      </div>
    }
    {
      sectionContents === 'LOADING' && <div className={'container'}>
        <BatchLoadingGrid />
      </div>
    }
     <div className={'my-4 md:my-8 container'}>
      {
        Widgets.find((WidgetView: any) => WidgetView.type.name =='ResultsSection') || <></>
      }
    </div>
    {
      props?.content && <div className={'container mt-4 md:mt-6'}>
        <HtmlContentWidget content={props?.content} />
      </div>
    }
    <div className={'container'}>
      {
        props.faqs?.length > 0 && <FAQ items={props.faqs} />
      }
    </div>
    <div className={'my-4 md:my-8 container'}>
      {
        Widgets.find((WidgetView: any) => WidgetView.type.name =='DownloadAppBanner') || <></>
      }
    </div>
  </>;
}

