import React from 'react';
import SchoolCrDownloadPdf from '../SchoolCrDownloadPdf/SchoolCrDownloadPdf';
import CatalogueBg from '../../../../assets/Images/Schools/Catalogue.webp';
import CatalogueBgMweb from '../../../../assets/Images/Schools/Testamonial2.webp';

function ExploreOurCatalogue() {
  return (
    <div className="mx-auto xl:max-w-6xl w-full  xl:px-0 px-3 md:mt-12 md:mb-28 mb-20">
      <div
        style={{
          backgroundImage: `url(${CatalogueBg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
          boxShadow: '0px 4px 0px 0px #000',
        }}
        className="bg-center  bg-cover bg-no-repeat rounded-lg sm:block hidden"
      >
        <div className=" flex flex-col p-10 gap-6 items-center">
          <div className="font-bold md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-[#FFF] text-center ">
            Explore Our Catalogue
          </div>
          <div className="text-[16px] leading-[24px] font-medium text-center text-white max-w-[721px]">
          Click on the Link to find names of the books, features, number of pages, digital offerings, ISBN, MRP and other relevant details.
          </div>
          <SchoolCrDownloadPdf />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${CatalogueBgMweb.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
          boxShadow: '0px 4px 0px 0px #000',
        }}
        className="bg-center  bg-cover bg-no-repeat rounded-lg sm:hidden block w-full h-[400px]"
      >
        <div className=" flex flex-col p-10 gap-6 items-center">
          <div className="font-bold md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-[#FFF] text-center pt-[20px] ">
            Explore Our Catalogue
          </div>
          <div className="text-[16px] leading-[24px] font-medium text-center text-white max-w-[721px]">
          Click on the Link to find names of the books, features, number of pages, digital offerings, ISBN, MRP and other relevant details.
          </div>
          <SchoolCrDownloadPdf />
        </div>
      </div>
    </div>
  );
}

export default ExploreOurCatalogue;
