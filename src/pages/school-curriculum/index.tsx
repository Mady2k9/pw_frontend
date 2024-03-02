import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
import SchoolCurriculumPage from '@/deprecated/pages/school-curriculum';

function SchoolCurriculum(props: any) {
  return (
    <>
      <SchoolCurriculumPage footerData={props.footerData}/>
    </>
  );
}

export default SchoolCurriculum;

export async function getServerSideProps() {
  let footerData;

  try {
    const result = await Promise.all([
      FetchFooter(),
    ]);
    footerData = result[0];
  } catch (error) {
    // console.log(error);
  }
  return {
    props: {
      footerData: footerData || {},
    },
  };
}
