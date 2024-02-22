import React from 'react'
import { Image } from '@/components/ui/image';

interface SchoolsMarQuecardProps {
    mainTitle: string;
    SubscriberValue: string;
  }
  const SchoolsMarQuecard: React.FC<SchoolsMarQuecardProps> = ({
    mainTitle,
    SubscriberValue
  }) => {
  return (
    <div>
        
    <Image src= {SubscriberValue} alt='Schoolsimage'        
     className={' w-[80px] bg-center bg-no-repeat bg-cover mx-auto'}/>    
        <div className="font-[600]  text-[#1B2124]  text-[14px] leading-[20px] text-center pb-[8px] w-[140px]">
        {mainTitle}
        </div>
  </div>
);
}

export default SchoolsMarQuecard;


