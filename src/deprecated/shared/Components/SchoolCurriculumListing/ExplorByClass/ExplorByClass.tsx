import React from 'react';
import ExplorByClassCard from './ExplorByClassCard/ExplorByClassCard';
import classData from '../../../../jsonFiles/schoolsAllclassData.json';
import Image from '../../Atoms/Image/Image';
import RotateImage from '../../../../assets/Images/Vector-2.webp';
import AnimationsStyle from './Animation.module.css';

function ExplorByClass() {
  return (
    <div className="w-full relative">
      <div className="mx-auto xl:max-w-6xl w-full xl:px-0  px-3 pt-[21px] ">
        <div
          className="font-bold md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-[#1B2124] "
          id="exploreclass"
        >
          Explore by Class
        </div>
        <ExplorByClassCard classData={classData} />
      </div>
      <img
        src={`${RotateImage.src}`}
        alt="spin"
        className={`md:w-[183px] md:h-[183px] w-[100px] h-[100px] bg-bottom bg-cover bg-no-repeat my-[13px] absolute md:bottom-[0] md:left-[-70px] hidden xl:block ${AnimationsStyle.animatespinforwardreverse}`}
      />
      <div className="absolute right-0 top-0 w-[183px] h-[300px] overflow-hidden">
        <img
          src={`${RotateImage.src}`}
          alt="spin"
          className={`md:w-[183px] md:h-[183px] w-[100px] h-[100px] bg-bottom bg-cover bg-no-repeat my-[13px] absolute top-[0px] right-[-60px] hidden xl:block ${AnimationsStyle.animatespinforwardreverse}`}
        />
      </div>
    </div>
  );
}

export default ExplorByClass;
