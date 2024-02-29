import HomePage from '@/deprecated/pages';
import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';

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
  if (!headerData?.data || !footerData?.data) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  return {
    props: {
      HomePageData: HomePageData || {},
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
function Home(props: any) {
  return (
    <HomePage {...props}/>
  );
}
export default Home;
