import React, { memo } from 'react';
import StudyResourcesCard from '../../Molecules/StudyResourceCard/StudyResourcesCard';
import Style from './StudyResources.module.css';
import { studyresourcesProps } from './StudyResourceType.d';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
const color = ['#F1FAFF', '#FFF9EE', '#E8FFF6'];
const hoverColor = ['#DAF2FF', '#FFEFD2', '#D3FFEE'];
const StudyResource = ({
  resourceData,
}: {
  resourceData: studyresourcesProps;
}) => {
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedStudyResourceData = resourceData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  return (
    <div className="mx-auto xl:max-w-6xl w-full py-6 xl:py-10">
      <TransitionWrapper>
        <div
          className={`${Style.scrollBarNone} flex md:justify-between overflow-y-hidden gap-4 overflow-x-auto px-4`}
        >
          {sortedStudyResourceData?.map((data, key) => (
            <StudyResourcesCard
              key={key}
              mainTitle={data?.title}
              discription={data?.description}
              StudyResourcesCardImage={data?.dwebImage}
              hoverColor={hoverColor[key]}
              bgColor={color[key]}
              redirectionUrl={data?.redirectionUrl}
              mwebImage={data?.mwebImage}
              dwebImage={data?.dwebImage}
            />
          ))}
        </div>
      </TransitionWrapper>
    </div>
  );
};
export default memo(StudyResource);
