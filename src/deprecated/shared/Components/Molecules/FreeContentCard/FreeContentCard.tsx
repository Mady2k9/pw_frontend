import Image from '../../Atoms/Image/Image';
import Placeholder from '@/assets/Images/placeholder-batch.webp';

import clock from '../../../../assets/Images/clock.webp';
import { useEffect, useRef } from 'react';
import eventTracker from '../../EventTracker/eventTracker';
import {
  checkIfLectureIsLive,
  checkIfLectureIsPast,
  checkIfLectureIsUpcoming,
  formatDateAndTime,
} from '@/deprecated/shared/utility';
import { useRouter } from 'next/router';

const FreeContentCard = ({
  PAGE_SOURCE,
  content,
}: {
  content: any;
  PAGE_SOURCE: string;
}) => {
  const router = useRouter();
  // const [showVideoPopup, setShowVideoPopup] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        videoContainerRef.current &&
        videoContainerRef?.current?.contains(event.target as Node)
      ) {
        // setShowVideoPopup(false);
        document.body.style.overflow = 'auto';
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleShowVideo = () => {
    eventTracker.authPageVisit('free_content', PAGE_SOURCE);
    console.log('content', content)
    const redirect_url = `${window.location.origin}/watch/?batchSlug=${content?.batchId}&batchSubjectId=${content?.batchSubjectId}&subjectSlug=${content?.batchSubjectId}&topicSlug=all&scheduleId=${content?._id}&isUnderMaintenance=false`;
    window.open(
      `${
        process.env.NEXT_PUBLIC_PP_HOME_BASE_URL
      }study/auth?encoded_redirection_url=${btoa(redirect_url)}`,
      '_parent'
    );
  //  window.open(`${window.location.origin}/watch/?batchSlug=${content?.batchId}&batchSubjectId=${content?.batchSubjectId}&subjectSlug=${content?.batchSubjectId}&topicSlug=all&scheduleId=${content?._id}&isUnderMaintenance=false`
  //  )
  // https://pw.live/watch?batchSlug=batch-page-testing-normal-203046&batchSubjectId=65c25a608af2a10e22dcbcb1&subjectSlug=65c25a608af2a10e22dcbcb1&topicSlug=all&scheduleId=65c515b6d57051cbdca2fc05&isUnderMaintenance=false
  // https://www.pw.live/watch/?batchSlug=65a3ae75d209550018ba168f&batchSubjectId=65a3b57a3d06750018ae50f1&subjectSlug=65a3b57a3d06750018ae50f1&topicSlug=all&scheduleId=65b8af8e5d1276001848e7ce&isUnderMaintenance=false
  //   window.open(
  //     `https://www.pw.live/watch/?batchSlug=${content?.batchId}&batchSubjectId=${content?.batchSubjectId}&subjectSlug=${content?.batchSubjectId}&topicSlug=all&scheduleId=${content?._id}&isUnderMaintenance=false`
  //  );
  };
  return (
    <>
      <div
        className="w-[240px] pb-[14px] rounded-[6px] flex flex-col p-[8px] cursor-pointer"
        style={{ boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.08)' }}
        onClick={handleShowVideo}
      >
        <Image
          bgImagetitle={`${content?.videoDetails?.image || Placeholder.src}`}
          className={
            'bg-center rounded-md bg-contain bg-no-repeat min-w-[224px] min-h-[126px] w-[224px] h-[126px]'
          }
        />
        <div className=" flex flex-row items-center justify-between my-[8px]">
          <div>
            {checkIfLectureIsLive(content) && (
              <div className="text-[10px] leaading-[18px] font-[500] bg-[#C94A54] text-white px-[8px] py-[3px] rounded-[2px]">
                {' '}
                LIVE{' '}
              </div>
            )}
            {checkIfLectureIsUpcoming(content) && (
              <div className="text-[10px] leaading-[18px] font-[500] bg-[#C94A54] text-white px-[8px] py-[3px] rounded-[2px]">
                {' '}
                Upcoming{' '}
              </div>
            )}
            {checkIfLectureIsPast(content) && (
              <div className="text-[10px] leaading-[18px] font-[500] bg-[#C94A54] text-white px-[8px] py-[3px] rounded-[2px]">
                {' '}
                Ended{' '}
              </div>
            )}
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <Image
              bgImagetitle={`${clock.src}`}
              className={'bg-center bg-contain bg-no-repeat w-[16px] h-[16px]'}
            />
            <div className="text-[12px] font-[500] leading-[18px] text-[#757575]">
              {formatDateAndTime(content.startTime)}
            </div>
          </div>
        </div>
        <div className="text-[14px] font-[700] line-clamp-2 leading-[22px] text-[#1B2124]">
          {content.topic}
        </div>
      </div>
    </>
  );
};

export default FreeContentCard;
