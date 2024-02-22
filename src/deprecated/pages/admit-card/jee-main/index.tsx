import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import LandingPage from '@/deprecated/shared/Admitcard/components/LandingPage';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
import React, { useEffect, useState } from 'react';
import NotificationWrapper from '@/deprecated/shared/Admitcard/components/common/NotificationWrapper';

const Home = ({ headerData, footerData }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLoggedIn(true);
    } else setLoggedIn(false);
  }, []);
  return (
    <div>
      <NotificationWrapper />
      <Header headerData={headerData} showLogin={!loggedIn}></Header>
      <LandingPage></LandingPage>
      <Footer footerData={footerData} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  let headerData;
  let footerData;

  try {
    const result = await Promise.all([FetchHeader(), FetchFooter()]);
    headerData = result[0];
    footerData = result[1];
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
