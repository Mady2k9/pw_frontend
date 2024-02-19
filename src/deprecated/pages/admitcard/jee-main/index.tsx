import LandingPage from '@/deprecated/shared/Admitcard/components/LandingPage';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
import React, { useEffect, useState } from 'react';
import NotificationWrapper from '../../../shared/Admitcard/components/common/NotificationWrapper';

const JEEMainAdmitCardPage = ({ headerData, footerData }: any) => {
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

export default JEEMainAdmitCardPage;
