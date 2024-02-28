import item from '../../jsonFiles/faq.json';
import AboutRealTest from '@/deprecated/shared/Components/PwRealTest/AboutRealTest/AboutRealTest';
import FAQ from '@/deprecated/shared/Components/PwRealTest/FAQ/FAQ';
import HeroSection from '@/deprecated/shared/Components/PwRealTest/HeroSection/HeroSection';
import ShareWith from '@/deprecated/shared/Components/PwRealTest/ShareWith/ShareWith';
import TestBenefits from '@/deprecated/shared/Components/PwRealTest/TestBenefits/TestBenefits';
import BannerSection from '@/deprecated/shared/Components/PwRealTest/BannerSection/BannerSection';
import TestSchedule from '@/deprecated/shared/Components/PwRealTest/TestSchedule/TestSchedule';
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
const data=[        
      {
          title: "Is the PW REAL TEST Free or Paid?",
          description:
            "PW REAL Test is a paid exam conducted in the same manner as that of NTA. Price: 249/- (Students enrolled in Paid Batches of PW, Online or Offline) Price: 499/- (Students not enrolled in any of the Paid Batches of PW, Online or Offline)"
        },
        {
          title: "I am unable to find my login credentials, where will I get them?",
          description:
            "Login credentials to your portal will be shared over mail by realtest@pw.live post your registration. In case you are unable to find the mail please check your SPAM."
        },
        {
          title: "Where can I see my Admit Card, Results and Application Form? ",
          description:
          "You can find all these details by logging in to your PW REAL Test Portal using the credentials shared on your mail"
        },
          
        {
          title: "How will I get my center for the Exam?",
          description:
          "The center for your examination will be provided to you through your Admit Card. Don’t forget to carry a printout of your admit card at the center mentioned on the Admit Card.  You can download your admit card from the REAL Test Portal."
        },
        {
          title: "I cannot find my Exam center written on the Admit Card.",
          description:
          "A co-ordinator number will be provided to you on your admit card. In case you face any challenge while locating the center, feel free to reach out to your center coordinator."
        },
        {
          title: "Is the PW REAL Test exactly the same as Actual NEET Exam?",
          description:"While the PW REAL Test aims at providing the same experience as that of the NEET examination, there may be some differences, students should refer to the official websites for exact information related to NEET 2024."
                                }         
      ]

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
        <FAQ items={data} />
        <ShareWith />
      </div>
    </>
  );
};

export default Home;

