import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import JEEMainAdmitCardPage from '@/deprecated/pages/admit-card/jee-main';

const JEEMainAdmitCard = (props: any) => {
  return (
    <JEEMainAdmitCardPage {...props}/>
  );
};

export default JEEMainAdmitCard;

export async function getServerSideProps() {
  let headerData;
  let footerData;

  try {
    const result = await Promise.all([FetchHeader(), FetchFooter()]);
    headerData = result[0];
    footerData = result[1];
  } catch (error) {
    // console.log(error);
  }
  return {
    props: {
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
