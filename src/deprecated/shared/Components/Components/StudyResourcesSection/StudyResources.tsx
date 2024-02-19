import React, { memo } from 'react';
import StudyResourcesCard from '../../Molecules/StudyResourceCard/StudyResourcesCard';
import Style from './StudyResources.module.css';
import { studyresourcesProps } from './StudyResourceType.d';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
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
              hoverColor={data?.cardHoverColor}
              bgColor={data?.cardColor}
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
