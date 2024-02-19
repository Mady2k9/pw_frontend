import { useEffect, useState } from 'react';
import CenterInformations from './CenterInformations';
import mapData from '../../../../jsonFiles/map-data.json';
import centersData from '../../../../jsonFiles/map-center-data.json';
import MapColor from './MapColor';

type CenterData = {
  _id: string;
  centers: string[];
  state: string;
};
function OurPresence() {
  const getStateColor = (centersCount: number) => {
    if (centersCount >= 0 && centersCount <= 1) {
      return '#FBCD8F';
    } else if (centersCount > 1 && centersCount <= 2) {
      return '#FBCD8F';
    } else if (centersCount > 2 && centersCount <= 4) {
      return '#FFC000';
    } else if (centersCount > 4 && centersCount <= 10) {
      return '#FF8A00';
    } else if (centersCount > 10 && centersCount <= 20) {
      return '#FF6B00';
    } else if (centersCount > 20 && centersCount <= 50) {
      return '#FF6B00';
    } else {
      return '';
    }
  };
  const [centersCountByState, setCentersCountByState] = useState<{
    [key: string]: number;
  }>({});
  const [finalCentersData, setFinalCentersData] = useState<{
    [key: string]: string;
  }>({});

  const calculateCentersCountByState = (data: CenterData[]) => {
    const centersCount: { [key: string]: number } = {};
    centersData?.data.forEach((item) => {
      if (!centersCount[item.state]) {
        centersCount[item.state] = 0;
      }
      centersCount[item.state] += item.centers.length;
    });
    const keyData = Object.keys(centersCount);
    const finalCenters: { [key: string]: string } = {};
    keyData.forEach((item: string, index: number) => {
      finalCenters[item.replace(/ /g, '_').toLowerCase()] = getStateColor(
        centersCount[item]
      );
    });
    setFinalCentersData(finalCenters);
    console.log(finalCenters, 'value');
    //return finalCenters;
  };

  useEffect(() => {
    const centersCount = calculateCentersCountByState(
      centersData.data as CenterData[]
    );
    // setCentersCountByState(centersCount);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFF6E5] to-[white] relative ">
      <img
        src="/halfCirclrRight.webp"
        alt="halfCirclrRight.webp"
        className="absolute h-[765px] w-[130px] top-0 left-[21px] hidden lg:block"
      />
      <img
        src="/halfCirclrleft.webp"
        alt="/halfCirclrleft.webp"
        className="absolute h-[765px] w-[160px] right-[0px] top-0 hidden lg:block"
      />

      <div className="mx-auto xl:max-w-6xl w-full py-20 px-4 xl:px-0">
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="flex flex-col justify-center xl:w-[60%] w-[100%]">
            <div>
              <div className="font-[700] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-[#1B2124]">
                Our Presence
              </div>
              <div className="font-[500] xl:text-[18px] xl:leading-[28px] text-[14px] leading-[22px] text-[#3D3D3D]">
                Our footprint extends across more than 100 cities, with a
                widespread network of over 120 Vidyapeeth centers spanning the
                entire country.
              </div>
            </div>
            <div className="flex flex-col gap-[24px] mt-[32px] ">
              <div className="px-[32px] py-[10px] rounded-full bg-gradient-to-r from-[#FFE7B9] to-[#00000000] font-[600] md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] text-[#3D3D3D]">
                100+{' '}
                <span className="font-[500] text-[18px] leading-[28px] text-[#3D3D3D]">
                  Cities
                </span>
              </div>
              <div className="px-[32px] py-[10px] rounded-full bg-gradient-to-r from-[#FFE7B9] to-[#00000000] font-[600] md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] text-[#3D3D3D]">
                120+{' '}
                <span className="font-[500] text-[18px] leading-[28px] text-[#3D3D3D]">
                  Cities
                </span>
              </div>
              <div className="px-[32px] py-[10px] rounded-full bg-gradient-to-r from-[#FFE7B9] to-[#00000000] font-[600] md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] text-[#3D3D3D]">
                13+{' '}
                <span className="font-[500] text-[18px] leading-[28px] text-[#3D3D3D]">
                  Exam Categories
                </span>
              </div>
            </div>
          </div>
          <div className="relative py-[20px]">
            <MapColor stateColors={finalCentersData} />
            <div className="flex flex-col gap-2 absolute xl:bottom-[0px] xl:right-[0px] bottom-[-55px] right-[0px] z-[10] ">
              {mapData.officeLocations?.map((office, index) => (
                <div key={index}>
                  <CenterInformations
                    color={office.color}
                    details={office.details}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurPresence;
