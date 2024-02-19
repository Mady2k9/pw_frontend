import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import AboutUsPage from '@/deprecated/pages/about-us';

export async function getServerSideProps() {
  let headerData;
  let footerData;
  let HomePageData;
  try {
    const result = await Promise.all([
      FetchHeader(),
      FetchFooter(),
      FetchHomePage(),
    ]);
    headerData = result[0];
    footerData = result[1];
    HomePageData = result[2];
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      headerData: headerData?.data || {},
      footerData: footerData || {},
      HomePageData: HomePageData || {},
    },
  };
}

function AboutUs(props: any) {
  return (
    <AboutUsPage {...props}/>
  );
}
export default AboutUs;
