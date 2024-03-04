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
          title: "What is the Full Form of PW REAL Test?",
          description: "Physics Wallah Right Evaluation and Assessment for Learning Test."},
        {
          title: "What is PW REAL TEST?",
          description:
            "The PW REAL Test for NEET is a crucial practice round mirroring the actual NEET exam, covering Physics, Chemistry, and Biology. Scheduled for 7th April, it aims to simulate the NEET experience, enhancing readiness and confidence. It's a key tool for better preparation and success in the NEET exam. Good luck!"
        },
        {
          title: "Who can participate in the PW Real Test?",
          description:
          "The test is available to all NEET students appearing for the NEET exam in 2024."
        },
          
        {
          title: "What features does PW Real Test offer?",
          description:
          "PW Real Test provides an exam experience similar to NTA, along with additional features such as Admit card, log-in credentials and more."
        },
        {
          title: "Is the PW REAL TEST Free or Paid?",
          description:
                     "PW REAL Test is a paid exam conducted in the same manner as that of NTA. Price: 299/- (Students enrolled in Paid Batches of PW, Online or Offline)Price: 499/- (Students not enrolled in any of the Paid Batches of PW, Online or Offline)"

       },
        {
          title: "Is the PW Real Test conducted the same as the actual NEET exam ?",
          description:"While the PW REAL Test aims at providing the same experience as that of the NEET examination, there may be some differences, students should refer to the official websites for exact information related to NEET 2024."
        },         
        {
          title: "How will I get my center for the Exam?",
          description:"The center for your examination will be provided to you through your Email Id . Don't forget to carry a printout of your admit card at the center mentioned on the Admit Card. You can download your admit card from the REAL Test Portal (realtest.pw.live)."
        },
        {
          title: "I cannot find my Exam center written on the Admit Card.",
          description:"A co-ordinator number will be provided to you on your admit card. In case you face any challenge while locating the center, feel free to Contact us on +91-7019243492 also you can reach out to your center coordinator."
        },
        {
          title: "Where can I get support or any issues related to the PW Real Test?",
          description:"For support and assistance, refer to the official help center or contact the designated support channels provided by PW Real Test Also, feel free to Contact us on +91-7019243492."
        
        },
        {
          title: "Are there any eligibility criteria to participate in the PW Real Test?",
          description:"PW Real Test is open to all students, but it's advisable to review any specific eligibility criteria mentioned in the official documentation."
        
        },
        {
          title: "Is there any technical support available during the PW Real Test?",
          description:"Check for information on available technical support, including helpline numbers or email contacts, to address any technical issues during the test."
        
        },
        {
          title: "What payment methods are accepted for PW Real Test registration?",
          description:"Details about accepted payment methods for PW Real Test registration can be obtained from the official payment portal or registration platform."
        
        },
        {
          title: "How Can I get my Id and password to login PW Real Test",
          description:"To access your account, you can find your login credentials, including your username and password, in the mail that have been received after successful registration."
        
        },
        {
          title: "I did not receive any notification about PW real test",
          description:"You will receive a real test notification for your PW on your registered WhatsApp number."
        
        },
        {
          title: "What is the registration opening date of the PW Real Test ? ",
          description:"The Registration opening date is 4th March 2024"
        
        },
        {
          title: "What is the last date of registration ?",
          description:"The last date of registration is 17th March 2024"
        
        },
        {
          title: "When will the admit card be released?",
          description:"The admit card will be released on March 31st 2024"
        
        },
        {
          title: "When will the PW Real test be conducted?",
          description:"The PW real test is scheduled to take place on April 7th, 2024."
        
        },
        {
          title: "Will the PW REAL Test provide a real exam experience?",
          description:"Gain hands-on experience of the complete NEET exam process, from registration to results, to ensure thorough preparation for NEET 2024."
        
        },
        {
          title: "Where can I find the registration or login link for the PW REAL Test?",
          description:"Here is the Registration and login link of PW REAL Test https://realtest.pw.live/"
        
        },
        {
          title: "I am unable to find my login credentials, where will I get them?",
          description:"Login credentials to your portal will be shared over mail by noreply@realtest.pw.live post your registration. In case you are unable to find the mail please check your SPAM."
        
        },
        {
          title: "Is it possible for students to reschedule their PW REAL Test date?",
          description:"No, It is not possible."       
        },
        {
          title: "How does the PW REAL Test benefit students?",
          description:"NTA Styled Test: It’s like a NEET before NEET so that students can get an actual hands on experience of how the exam is going to be like  Pen-Paper Exam Practice: Students preparing online can get an experience of the offline papers so that they are well prepared for the final NEET exam. Compete with students Nationwide: Get a chance to showcase your caliber and potential among students participating from PAN India "       
        },
        {
          title: "When will the PW Real test results be announced?",
          description:"The result will be announced on April 21st 2024."       
        },
        {
          title: "What is the mode of examination ?",
          description:"The examination will be conducted in offline mode."       
        },
        {
          title: "If I missed the exam, will I get the refund ?",
          description:"There is no refund policy, once the payment is done, you will not get any refund"       
        },
        {
          title: "Where can I find the transaction details?",
          description:"Invoice will be shared on your email after successful transaction. Please forget to check your SPAM if it is not found in your inbox."       
        },
        {
          title: "Where we will get the coupon code",
          description:"The coupon code will only be provided to paid users of Physics Wallah. It will be shared via registered WhatsApp number, text message, or email."       
        },
        

      ]

const Home = ({ headerData }: { headerData: any }) => {
  return (
    <>  
      <div className="bg-[#F8F8F8]">
      <Header headerData={headerData} showLogin />
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

