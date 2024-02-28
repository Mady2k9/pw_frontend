import item from '../../jsonFiles/faq.json';
import AboutRealTest from '@/deprecated/shared/Components/PwRealTest/AboutRealTest/AboutRealTest';
import FAQ from '@/deprecated/shared/Components/PwRealTest/FAQ/FAQ';
import HeroSection from '@/deprecated/shared/Components/PwRealTest/HeroSection/HeroSection';
import ShareWith from '@/deprecated/shared/Components/PwRealTest/ShareWith/ShareWith';
import TestBenefits from '@/deprecated/shared/Components/PwRealTest/TestBenefits/TestBenefits';
import BannerSection from '@/deprecated/shared/Components/PwRealTest/BannerSection/BannerSection';
import TestSchedule from '@/deprecated/shared/Components/PwRealTest/TestSchedule/TestSchedule';
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
const Home = ({ headerData }: { headerData: any }) => {
  return (
    <>
       <Header headerData={headerData} showLogin />
      <div className="bg-[#F8F8F8]">
        <HeroSection />
        <AboutRealTest />
        <TestSchedule />
        <TestBenefits />
        <BannerSection />
        <FAQ items={item.data} />
        <ShareWith />
      </div>
    </>
  );
};

export default Home;

