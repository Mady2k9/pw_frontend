import { PageTitleBar } from '@/widgets/PageTitleBar';
import CommonItemCard from '@/widgets/CommonItemCard';
import { PageTabs } from '@/widgets/PageTabs';
import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import FAQ from '@/widgets/FAQ';
import { imageToImageUrl, slugToString, stringToSlug } from '@/lib/utils';
import { IBatch } from '@/api/interfaces/batch';
import { useRouter } from 'next/router';
import { Layout } from '@/components/common/Layout';
import BatchMetaDescription from '@/widgets/BatchDescription/BatchMetaDescription';
import batchDetailsServerSideProps from '@/lib/batch-details-server-side-props';
import { IPageData } from '@/api/interfaces/page';
import BatchOtherDetails from '@/widgets/BatchDescription/BatchOtherDetails';
import BatchDetailsInclusion from '@/widgets/BatchDescription/BatchDetailsInclusion';
import BatchDetailsSchedule from '@/widgets/BatchDescription/BatchDetailsSchedule';
import { scrollToElement } from '@/lib/dom.utils';
import BatchDetailsKnowYourTeachers from '@/widgets/BatchDescription/BatchDetailsKnowYourTeachers';
import BatchDetailsFreeContent from '@/widgets/BatchDescription/BatchDetailsFreeContent';
import ResultsSection from '@/widgets/ResultsSection';
import DownloadAppBanner from '@/widgets/DownloadAppBanner';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return batchDetailsServerSideProps(context);
}

const getBreadcrumbs = ({ cohortKey, courseKey, batchDetails }: {
  courseKey: string,
  cohortKey?: string,
  batchDetails: IBatch
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
    if (batchDetails) {
      items.push({
        label: `${batchDetails.name}`,
        link: `${batchDetails.seoSlug}`,
      });
    }
  }

  return items;
};
const getWidgets = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const items: {
    title: string,
    link: string,
    key: string,
    widget: ReactElement
  }[] = [];
  if (props?.pageData) {
    props.pageData.tabs.forEach((tab) => {
      if (tab === 'Other Details' && props.batch.description.length) {
        items.push({
          title: tab,
          link: `#${stringToSlug(tab)}`,
          key: stringToSlug(tab),
          widget: <div id={`${stringToSlug(tab)}`}>
            <BatchOtherDetails description={props.batch.description} />
          </div>,
        });
      } else if (tab === 'Inclusions' && props.batch?.shortDescription.length) {
        items.push({
          title: tab,
          link: `#${stringToSlug(tab)}`,
          key: stringToSlug(tab),
          widget: <div id={`${stringToSlug(tab)}`}>
            <BatchDetailsInclusion description={props.batch?.shortDescription}
                                   orientationVideo={props.batch.orientationVideo} />
          </div>,
        });
      } else if (tab === 'Batch Schedule' && props.batch?.subjects.length) {
        items.push({
          title: tab,
          link: `#${stringToSlug(tab)}`,
          key: stringToSlug(tab),
          widget: <div id={`${stringToSlug(tab)}`}>
            <BatchDetailsSchedule subjects={props.batch?.subjects} />
          </div>,
        });
      } else if (tab === 'Teachers' && props.batch?.teacherData?.length) {
        items.push({
          title: tab,
          link: `#${stringToSlug(tab)}`,
          key: stringToSlug(tab),
          widget: <div id={`${stringToSlug(tab)}`}>
            <BatchDetailsKnowYourTeachers teachers={props.batch.teacherData} />
          </div>,
        });
      } else if (tab === 'Free Content' && props.batch?.freeContent?.length) {
        items.push({
          title: tab,
          link: `#${stringToSlug(tab)}`,
          key: stringToSlug(tab),
          widget: <div id={`${stringToSlug(tab)}`}>
            <BatchDetailsFreeContent overviewUrl={`/study/batches/${props.batch.slug}/batch-overview`}
                                     items={props.batch.freeContent} />
          </div>,
        });
      } else {
        console.log(tab);
      }
    });
  }

  return items;
};
const getExternalWidgets = (props: IPageData) => {
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
};

export default function BatchDescription(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const Widgets = useMemo(() => {
    return getWidgets(props);
  }, [props]);
  const ExternalWidgets = useMemo(() => {
    return getExternalWidgets(props.pageData!);
  }, [props]);
  const [activeTab, setActiveTab] = useState<string>(Widgets[0]?.key);

  useEffect(() => {
    let visibleElements: Record<string, IntersectionObserverEntry> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleElements[id] = entry;
          } else {
            delete visibleElements[id];
          }
          const visibleEntries = Object.values(visibleElements);
          if (visibleEntries.length > 0) {
            const topMostElement = visibleEntries.reduce((prev, current) => {
              return (prev.target.getBoundingClientRect().top > current.target.getBoundingClientRect().top) ? prev : current;
            });
            setActiveTab(topMostElement.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '120px 0px -120px 0px ',
        threshold: 0.1,
      },
    );

    Widgets.forEach((tab) => {
      const slug = tab.key;
      const element = document.getElementById(slug);
      if (element) observer.observe(element);
    });

    return () => {
      Widgets.forEach((tab) => {
        const slug = tab.key;
        const element = document.getElementById(slug);
        if (element) observer.unobserve(element);
      });
    };
  }, [Widgets]); // Rerun when tabs change

  const router = useRouter();
  const { courseKey, cohortKey } = router.query;

  const BatchCard = useMemo(() => {
    if (!props.batch) {
      return <></>;
    }
    return <CommonItemCard exploreLink={props.batch.seoSlug}
                           buyNowLink={`/study/batches/${props.batch.slug}/batch-overview`}
                           isOnline={!props.batch.isPathshala && !props.batch.config?.isVidyapeeth}
                           usedFor={props.batch.byName}
                           meta={props.batch.meta}
                           startDate={props.batch.startDate}
                           endDate={props.batch.endDate}
                           language={props.batch.language}
                           isNew={props.batch.markedAsNew}
                           whatsappLink={props.batch.seoSlug}
                           thumbnail={imageToImageUrl(props.batch.previewImage) || ''}
                           title={props.batch.name} />;
  }, [props]);
  if (!props.pageData) {
    return <></>;
  }

  return <Layout seoTags={props.pageData.seoTags} headerData={props.headerData}>
    <PageTitleBar
      inverted={true} title={props.batch.name}
      floatingCard={BatchCard}
      breadcrumbs={{
        items: getBreadcrumbs({
          courseKey: courseKey as string,
          cohortKey: cohortKey as string,
          batchDetails: props.batch,
        }),
        inverted: true,
      }}
      descriptionElement={<BatchMetaDescription batch={props.batch} />}
      description={props.batch?.oneLineDescription} />
    <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={Widgets}
              handleClick={(e, item) => {
                e.preventDefault();
                scrollToElement(document.getElementById(item)!, true);
              }} />
    <div className={'lg:pr-[400px] container py-4 md:py-6 flex flex-col space-y-4 md:space-y-0'}>
      <div className={'lg:hidden mx-auto mb-4 md:mb-6 lg:mb-0 min-w-[320px]       '}>
        {BatchCard}
      </div>
      <div className={'flex flex-col space-y-4 md:space-y-6'}>
        {
          Widgets.map((widget, index) => {
            return <div className={'flex flex-col space-y-4 md:space-y-6 ' + index} key={index}>
              {widget.widget}
            </div>;
          })
        }
        {
          ExternalWidgets.map((WidgetView: any, index) => {
            return <div key={index}>
              {
                WidgetView
              }
            </div>
          })
        }
        {props.pageData.faqs?.length > 0 && <FAQ items={props.pageData.faqs} />}
      </div>

    </div>
  </Layout>;
}
