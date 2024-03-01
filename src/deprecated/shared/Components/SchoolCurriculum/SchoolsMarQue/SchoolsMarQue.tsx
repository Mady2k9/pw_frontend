import React from 'react'
import Marquee from 'react-fast-marquee';
// import SchoolsNameData from '../../../../jsonFiles/SchoolsName.json'
import {AssetsSchoolsNameData} from './SchoolsNamejson'
import SchoolsMarQuecard from './SchoolsMarQuecard';

function SchoolsMarQue() {
  return (
    <div className='bg-[#FFF0E7]'>
          <div className="my-5 2xl:max-w-6xl m-auto pt-10 ">
      <div className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center ">
      Trusted by Schools Nationwide      </div>

      </div>

      <Marquee pauseOnHover>
        <div className="flex  w-full my-5 md:my-6 xl:my-8 gap-10">
          {AssetsSchoolsNameData.SchoolsNameData?.map((data, key) => (
            <SchoolsMarQuecard             
              key={data.heading}
              mainTitle={data.heading}
              SubscriberValue={data.image}
        
            />
          ))}
        </div>
      </Marquee>
     
    </div>
  )
}

export default SchoolsMarQue;


