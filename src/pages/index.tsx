import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/common/Layout';
import { WidgetEnum } from '@/deprecated/shared/Components/Enums/WidgetEnum';
import { MainBanner } from '@/widgets/MainBanner';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';


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
    </Layout>
  );
}

export default Home;
