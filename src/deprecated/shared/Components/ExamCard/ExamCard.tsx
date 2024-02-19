import React from 'react';
import Button from '../Atoms/Button/Button';
import Text from '../Atoms/Text/Text';
import ExamBatchPrice from './ExamBatchPrice';
import ExamCardcardInfo from './ExamCardcardInfo';
export interface ExamCardProps {
  color: string[];
}
const ExamCard: React.FC<ExamCardProps> = ({ color }) => {
  return (
    <div className="w-full md:w-[360px]">
      <div className="flex flex-row bg-[white] border rounded-t-lg w-full md:w-[360px]">
        <div
          className="w-full  border rounded-t-lg"
          style={{ borderColor: `${color[3]}` }}
        >
          <div className="flex flex-row w-full justify-between px-4 pb-6 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <g clip-path="url(#clip0_2990_31926)">
                <rect width="26" height="26" rx="5" fill={color[0]} />
                <circle cx="21.3156" cy="5.72188" r="7.8" fill={color[1]} />
                <rect
                  y="15.6016"
                  width="13.52"
                  height="13.52"
                  fill={color[1]}
                />
              </g>
              <defs>
                <clipPath id="clip0_2990_31926">
                  <rect width="26" height="26" rx="5" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-col w-full mx-4">
              <Text
                style={'font-bold text-base text-[#3d3d3d]'}
                title={'SSC + Banking Pass '}
              />
              <ExamBatchPrice
                originalCost={'8500'}
                updatedCost={'2400'}
                discount={'10'}
              />
            </div>
            <Text
              style={
                'w-[100px] h-[28px] bg-gradient-to-r from-[#C58F27] to-[#EDB84F] rounded-md  font-semibold text-xs text-center pt-1'
              }
              title={'1 years'}
            />
          </div>
          <div className="border-dashed border-t-4 bg-slate-100 mx-4"></div>
          <div
            className=" bg-slate-100  p-4 flex flex-col gap-2 "
            style={{ backgroundColor: `${color[3]}` }}
          >
            <ExamCardcardInfo
              desImages={'academic-cap-1.webp'}
              title={'Exams Covered'}
              subTitle={':  CGL, CPO, CHSL, GD, MTS, JE, Stenographer'}
            />
            <ExamCardcardInfo
              desImages={'clipboard-document-list.webp'}
              title={'Exams Covered'}
              subTitle={':  CGL, CPO, CHSL, GD, MTS, JE, Stenographer'}
            />
            <ExamCardcardInfo
              desImages={'chart-pie-1.webp'}
              title={'Exams Covered'}
              subTitle={':  CGL, CPO, CHSL, GD, MTS, JE, Stenographer'}
            />
            <ExamCardcardInfo
              desImages={'play-circle-1.webp'}
              title={'Exams Covered'}
              subTitle={':  CGL, CPO, CHSL, GD, MTS, JE, Stenographer'}
            />
            <Button
              className={
                'h-[56px] w-full px-[28px] py-[14px] bg-[#5A4BDA] text-white rounded-md mt-3'
              }
              title={'Get Pass'}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="12"
          // viewBox="0 0 300 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 12L0 0L360 0V12H354.136C353.232 9.66962 350.793 8 347.925 8C345.058 8 342.619 9.66962 341.715 12H336.575C335.671 9.66962 333.232 8 330.365 8C327.497 8 325.058 9.66962 324.154 12H319.017C318.113 9.66962 315.674 8 312.806 8C309.939 8 307.5 9.66962 306.596 12L301.456 12C300.552 9.66962 298.113 8 295.245 8C292.378 8 289.939 9.66962 289.035 12H283.896C282.992 9.66962 280.552 8 277.685 8C274.818 8 272.378 9.66962 271.474 12H266.333C265.429 9.66962 262.99 8 260.122 8C257.255 8 254.816 9.66962 253.912 12H248.773C247.869 9.66962 245.429 8 242.562 8C239.695 8 237.255 9.66962 236.351 12H231.212C230.308 9.66962 227.869 8 225.001 8C222.134 8 219.695 9.66962 218.791 12L213.65 12C212.746 9.66962 210.306 8 207.439 8C204.572 8 202.132 9.66962 201.228 12H196.089C195.185 9.66962 192.746 8 189.878 8C187.011 8 184.572 9.66962 183.668 12H178.528C177.624 9.66962 175.185 8 172.318 8C169.45 8 167.011 9.66962 166.107 12H160.966C160.062 9.66962 157.623 8 154.755 8C151.888 8 149.449 9.66962 148.545 12H143.405C142.501 9.66962 140.062 8 137.195 8C134.327 8 131.888 9.66962 130.984 12L125.845 12C124.941 9.66962 122.501 8 119.634 8C116.767 8 114.328 9.66962 113.424 12H108.282C107.378 9.66962 104.939 8 102.072 8C99.2045 8 96.7652 9.66962 95.8612 12H90.7217C89.8177 9.66962 87.3784 8 84.5111 8C81.6438 8 79.2045 9.66962 78.3005 12H73.1612C72.2572 9.66962 69.8179 8 66.9506 8C64.0832 8 61.6439 9.66962 60.7399 12H55.5987C54.6947 9.66962 52.2554 8 49.3881 8C46.5207 8 44.0814 9.66962 43.1774 12H38.0382C37.1341 9.66962 34.6948 8 31.8275 8C28.9602 8 26.5209 9.66962 25.6169 12H20.4776C19.5736 9.66962 17.1343 8 14.267 8C11.3996 8 8.96034 9.66962 8.05631 12H0Z"
            fill={color[2]}
          />
        </svg>
      </div>
    </div>
  );
};

export default ExamCard;
