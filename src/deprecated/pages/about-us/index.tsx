import Header from '@/deprecated/shared/Components/Molecules/Header/header';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import Mission from '@/deprecated/shared/Components/Components/Mission/Mission';
import Vision from '@/deprecated/shared/Components/Components/Vision/Vision';
import OurPresence from '@/deprecated/shared/Components/Components/OurPresence/OurPresence';
import Founders from '@/deprecated/shared/Components/Components/Founders/Founders';
import GreatPlaceWork from '@/deprecated/shared/Components/Components/GreatPlaceWorkSection/GreatPlaceWork';
import DownloadAppSection from '@/deprecated/shared/Components/Molecules/DownloadAppSection/DownloadAppSection';
import { useEffect, useRef, useState } from 'react';
import Drawer from '@/deprecated/shared/Components/Components/Drawer/Drawer';
const AboutUsPage = ({
  headerData,
  footerData,
  HomePageData,
}: {
  headerData: any;
  footerData: any;
  HomePageData: any;
}) => {
  const greatPlaceRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setIsInViewport(true));
      }
    });
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) setIsOpen(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (greatPlaceRef.current) {
      observer.observe(greatPlaceRef.current);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></Drawer>
      <Header headerData={headerData} showLogin showAboutUs={isOpen} />
      <Mission />
      <Vision />
      <Founders />
      <OurPresence />
      <div ref={greatPlaceRef}>
        <GreatPlaceWork isInViewport={isInViewport} />
      </div>
      <DownloadAppSection
        downloadAppData={HomePageData?.data?.widgetJson?.APP_DOWNLOAD}
      />
      <Footer footerData={footerData} showFreeLearning={false} />
    </>
  );
};

export default AboutUsPage;
