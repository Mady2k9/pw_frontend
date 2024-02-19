import React, { memo } from 'react';
import Text from '../Atoms/Text/Text';
import FeatureCard from './FeatureCard';

export interface featureProps {
  featureData: {
    sectionTitle: string;
    sectionSubtitile: string;
    sectionProps: {
      description: string;
      title: string;
      dwebImage: string;
      mwebImage: string;
      bgColor: string;
    }[];
  };
}
const color = [
  '#FFF9E8',
  '#F3F5FF',
  '#FFF1EF',
  '#FFF6EE',
  '#F4FBFF',
  '#ECEFFF',
];
const TestSeriesFeature: React.FC<featureProps> = ({ featureData }) => {
  return (
    <div>
      <div className="mx-auto xl:max-w-6xl w-full xl:px-0  px-3 py-6 xl:py-10">
        <div className="text-center gap-2">
          <Text
            style={
              'font-[700] text-[#1B2124] xl:text-[32px] xl:leading-[48px] md:text-2xl text-[20px] leading-[30px]'
            }
            title={featureData.sectionTitle}
          />
          <Text
            style={'text-sm font-medium xl:mb-8 md:mb-6 mb-4  text-[#3D3D3D]'}
            title={featureData.sectionSubtitile}
          />
        </div>
        <div
          className={` flex flex-wrap  justify-center lg:gap-6 sm:gap-4 gap-3 my-3`}
        >
          {featureData.sectionProps.map((data, key) => (
            <FeatureCard
              key={data.title}
              mainTitle={data.title}
              discription={data.description}
              FeatureImage={data.dwebImage}
              bgColor={color[key]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(TestSeriesFeature);
