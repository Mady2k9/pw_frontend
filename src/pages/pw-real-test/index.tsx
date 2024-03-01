import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import PwRealTestPage from '@/deprecated/pages/pw-real-test';
const PwRealTest = ({ headerData }: { headerData: any }) => {
  return (
    <PwRealTestPage headerData={headerData} />
  );
};
export default PwRealTest;
export async function getServerSideProps() {
  let headerData;
  try {
    const result = await Promise.all([    
      FetchHeader(),     
    ]);
    headerData = result[0]; 
  } catch (error) {
  }
  return {
    props: {   
      headerData: headerData?.data || {}, 
    },
  };
}

