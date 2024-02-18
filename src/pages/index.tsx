import { MainBanner } from '@/widgets/MainBanner';
import { FetchHeader } from '@/api/older-api-methods';
import { getHeaderData } from '@/api/page-apis';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Layout } from '@/components/common/Layout';
import ExamCategorySection from '@/widgets/ExamCategorySection';

const banners = [
  {
    'mwebImage': 'https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/961cb3ae-c1df-405b-9382-9a14f986675b.webp',
    'dwebImage': 'https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/5a4c751c-5f04-42f5-b58b-61f17b89641a.webp',
    'redirectionUrl': 'https://www.pw.live',
    'displayOrder': 2,
    'altTag': '22',
  },
  {
    'displayOrder': 3,
    'mwebImage': 'https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/7c37ac3c-2a8d-4bde-b377-199e7c13b436.png',
    'dwebImage': 'https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/252c4326-f89b-44cb-9ff0-894ffd3cad91.png',
    'redirectionUrl': 'https://www.pw.live',
    'altTag': '33',
  },
];
export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout headerData={props.headerData.data}>
    <MainBanner stretched={true} items={banners.map((banner) => {
      return {
        image: banner.dwebImage,
        mWebImage: banner.mwebImage,
        alt: banner.altTag,
        link: banner.redirectionUrl,
      };
    })} />
    <div className={'flex flex-col gap-4 md:gap-6'}>
      <ExamCategorySection title={'Unlock Success with PW Test Series'}
                           categories={[{
                             slug: 'iit-jee',
                             name: 'IIT JEE',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }, {
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }, {
                             slug: 'neet',
                             name: 'NEET',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }, {
                             slug: 'iit-jee',
                             name: 'IIT JEE',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }, {
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }, {
                             slug: 'neet',
                             name: 'NEET',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }, {
                             slug: 'neet',
                             name: 'NEET',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }, {
                             slug: 'iit-jee',
                             name: 'IIT JEE',
                             exploreActionText: 'Explore Tests',
                             exams: [{
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }, {
                               slug: '11',
                               name: 'Class 11',
                             }, {
                               slug: '12',
                               name: 'Class 12',
                             }, {
                               slug: 'dropper',
                               name: 'Dropper',
                             }],
                           }]}
                           description={'Unlock the doors to Physics Wallah\'s cutting-edge test engine, a powerful tool that propels you forward on your journey to realizing your dreams and aspirations.'} />
    </div>
  </Layout>
    ;
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const headerData = await getHeaderData();
  // let HomePageData;
  // let headerData;
  // let footerData;
  //
  // try {
  //     const result = await Promise.all([
  //         FetchHomePage(),
  //         FetchHeader(),
  //         FetchFooter(),
  //     ]);
  //     HomePageData = result[0];
  //     headerData = result[1];
  //     footerData = result[2];
  // } catch (error) {
  //     // console.log(error);
  // }
  return {
    props: {
      headerData,
    },
  };
}
