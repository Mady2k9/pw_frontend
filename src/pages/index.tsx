import HomePage from '@/deprecated/pages';
import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { GetStaticProps } from 'next';

export const getStaticProps = (async (context) => {
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
  console.log('HomePageData', HomePageData);
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

    },
  };
}) satisfies GetStaticProps<{

}>;

function Home(props: any) {
  return (
    <div>
      Hello pw.live
    </div>
  );
}

export default Home;
