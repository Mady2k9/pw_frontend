import BatchDescriptionCardWrapper from '@/widgets/BatchDescription/BatchDescriptionCardWrapper';
import { IOrientationVideo } from '@/api/interfaces/batch';
import styles from './BatchDetailsInclusion.module.css';
import AlakhImage from '@/assets/icons/Alakh.webp';
import { Image } from '@/components/ui/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import batchEventTracker from '@/lib/BatchEventTracker/BatchEventTracker';
import { useRouter } from 'next/router';

export default function BatchDetailsInclusion({ description, orientationVideo, batch_name, batch_price, batch_id }: {
  description: string,
  orientationVideo?: IOrientationVideo,
  batch_name:string,
  batch_price:{
  amount: number,
  discount: number,
  tax: number,
  total: number
  },
  batch_id: string;
}) {
  const router= useRouter();
const getClassAndExam = router.asPath.split('/')
const handleOrientationVideoGAEvent = () =>{
  batchEventTracker.PwOrientationVideoClick(batch_name, batch_price.amount, batch_price.total, batch_id,(getClassAndExam[2]? getClassAndExam[2] :""), (getClassAndExam[3]?getClassAndExam[3].split('?')[0] : ''))
}
  return <BatchDescriptionCardWrapper title={'This batch includes'}>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    {
      orientationVideo && orientationVideo.introSection?.introVideoUrl &&
      <div className={styles.orientationVideoWrapper} onClick={handleOrientationVideoGAEvent}>
        <div className={'flex-1'}>
          <h2 className={'text-lg font-semibold'}>{orientationVideo?.introSection?.customTitle}</h2>
          <p className={'text-sm text-lighter font-medium'}>
            Know important details and get oriented with your batch teachers.
            Click here to watch the video
          </p>
        </div>
        <div className="flex flex-col items-center justify-center whitespace-nowrap ">
          <div className="relative w-[65px] h-[70px] items-center flex ">
            <Image
              src={`${AlakhImage.src}`}
              alt={'alakh-image'}
              className={
                'h-full w-full bg-center bg-contain bg-no-repeat opacity-50 md:block hidden'
              }
            />
            {orientationVideo?.isIntroSectionEnabled && (
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="absolute md:bottom-[-10px] md:right-[-10px] right-0  h-[48px] w-[48px] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <circle cx="23.9988" cy="23.3992" r="13.2" fill="white" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79883 24.0008C4.79883 13.3969 13.395 4.80078 23.9988 4.80078C34.6027 4.80078 43.1988 13.3969 43.1988 24.0008C43.1988 34.6046 34.6027 43.2008 23.9988 43.2008C13.395 43.2008 4.79883 34.6046 4.79883 24.0008ZM20.1363 17.0209C20.7142 16.7054 21.4183 16.7306 21.9722 17.0867L30.3722 22.4867C30.8874 22.8179 31.1988 23.3883 31.1988 24.0008C31.1988 24.6133 30.8874 25.1837 30.3722 25.5149L21.9722 30.9149C21.4183 31.271 20.7142 31.2962 20.1363 30.9807C19.5584 30.6651 19.1988 30.0592 19.1988 29.4008V18.6008C19.1988 17.9423 19.5584 17.3364 20.1363 17.0209Z"
                        fill="#1B2124"
                      />
                    </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className=" aspect-video w-[700px] rounded-lg max-w-[90vw] p-0 bg-black border-none ">
                  <iframe src={orientationVideo.introSection?.introVideoUrl}
                          className={'w-full h-full rounded-lg overflow-hidden'}
                          title="  Know important details and get oriented with your batch teachers. Click here to watch the video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media;"></iframe>
                </DialogContent>
              </Dialog>
            )}
          </div>

          <div className="text-[14px] leading-[20px] font-[500] opacity-50 md:block hidden">
            Orientation Video
          </div>
          <div className="text-[10px] leading-[16px] font-[500] opacity-50 md:block hidden">
            Click to watch
          </div>
        </div>
      </div>
    }
  </BatchDescriptionCardWrapper>;
}
