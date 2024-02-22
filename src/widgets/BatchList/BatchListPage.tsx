import { PageTitleBar } from '@/widgets/PageTitleBar';
import { PageTabs } from '@/widgets/PageTabs';
import BatchCohortSlider from '@/widgets/BatchList/BatchCohortSlider';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import FiltersBar from '@/widgets/FiltersBar';
import { useRouter } from 'next/router';
import { ICohortOptions, IPageData } from '@/api/interfaces/page';
import { slugToString, stringToSlug } from '@/lib/utils';
import FAQ from '@/widgets/FAQ';
import ResultsSection from '@/widgets/ResultsSection';
import DownloadAppBanner from '@/widgets/DownloadAppBanner';
import BatchGridList from '@/widgets/BatchList/BatchGridList';
import { BatchLoadingGrid } from '@/widgets/BatchList/BatchLoadingGrid';
import { IBatch } from '@/api/interfaces/batch';

const cohortToCohortTabs = ({ courseKey, cohortOptions }: {
  courseKey: string,
  cohortKey?: string,
  cohortOptions?: ICohortOptions[]
}) => {
  const urlParts = ['', 'batches', courseKey];
  const items = [{
    title: 'All Batches',
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
    label: `${slugToString(courseKey).toUpperCase()} Courses`,
    link: `/batches/${stringToSlug(courseKey)}`,
  }];
  if (cohortKey) {
    items.push({
      label: `${slugToString(cohortKey)} ${stringToSlug(courseKey).toUpperCase()} Courses`,
      link: `/batches/${stringToSlug(courseKey)}/${stringToSlug(cohortKey)}`,
    });
  }
  return items;
};

function getWidgets(props: IPageData) {
  const result: ReactElement[] = [];
  props.widgetOrder.forEach((widget) => {
    if (widget === 'RESULTS') {
      const resultData = props.widgetJson['RESULTS'];
      result.push(<ResultsSection hideCategories={true} results={resultData.sectionProps}
                                  title={resultData.sectionTitle}
                                  description={resultData.sectionSubTitle} />);
    } else if (widget === 'APP_DOWNLOAD') {
      const downloadData = props.widgetJson['APP_DOWNLOAD'];
      result.push(<DownloadAppBanner config={downloadData} />);
    }
  });
  return result;
}

export default function BatchListPage(props: IPageData & { params: any, filteredBatches?: IBatch[] }) {
  const PAGE_SOURCE='Listing page';
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
    return props.options.find((option) => (stringToSlug(option.option) === activeTab));
  }, [activeTab, props.options]);
  const batchSection: 'ALL' | 'COHORT' | 'LOADING' = (!router.query.cohortKey || (router.query.cohortKey && activeTab === 'all')) ? 'ALL' : (props.options && cohortKey && activeCohort ? 'COHORT' : 'LOADING');
  return <div className={'flex flex-col'}>
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
          Courses
        </span>
      </div>} />
    {
      props.options && <PageTabs activeItem={activeTab} items={items} handleClick={(e, item) => {
        setActiveTab(item);
      }} />
    }
    {
      (router.query.cohortKey || activeTab !== 'all') &&
      <div className={'sticky left-0 bg-white right-0 top-[112px] !-mt-0 md:top-[136px] z-[2] border-b'}>
        <FiltersBar />
      </div>
    }
    {
      batchSection === 'ALL' &&
      <div className={'mt-4 md:mt-6 space-y-8'}>
        {
          props.options?.map((cohortOption, index) => {
            if (!props.batches[cohortOption.cohortId]) {
              return <></>;
            }
            return <BatchCohortSlider key={index}
                                      cohort={cohortOption}
                                      title={`${cohortOption.option} ${slugToString(courseKey as string).toUpperCase()} Courses`}
                                      batches={props.batches[cohortOption.cohortId] || []}
                                      showMoreLink={`/batches/${courseKey}/${stringToSlug(cohortOption.option as string)}`}
                                      page_source={PAGE_SOURCE} />;
          })
        }
      </div>
    }
    {
      batchSection === 'COHORT' &&
      <div className={' overflow-visible mt-4 md:mt-6 space-y-8'}>
        <BatchGridList cohort={activeCohort!}
                       filteredBatches={props.filteredBatches?.length ? props.filteredBatches : undefined}
                       batches={props.batches[activeCohort!.cohortId] || []}
                       page_source={PAGE_SOURCE} />
      </div>
    }
    {
      batchSection === 'LOADING' && <BatchLoadingGrid />
    }
    <div className={'mt-4 md:mt-8 container'}>
      {
        Widgets.map((WidgetView: any, index) => {
          return <div key={index}>
            {
              WidgetView
            }
          </div>;
        })
      }
    </div>
    {
      props?.content && <div className={'container'} dangerouslySetInnerHTML={{ __html: props?.content }} />
    }
    {
      props.faqs?.length > 0 && <div className={'container'}>
        <FAQ items={props.faqs} pageSource={PAGE_SOURCE} />
      </div>
    }

  </div>;
}
