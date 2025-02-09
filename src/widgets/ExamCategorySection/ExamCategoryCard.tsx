import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Pill } from '@/components/ui/pill';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Image } from '@/components/ui/image';
import testSeriesEventTracker from '@/lib/TestSeriesEventTracker/TestSeriesEventTracker';
import classNames from 'classnames';

interface ExamProps {
  slug: string;
  name: string;
}

export interface ExamCategoryProps {
  name: string;
  actionName?: string;
  actionColor?: string;
  slug: string;
  icon?: string;
  iconBackgroundColor?: string;
  color?: string;
  exams: ExamProps[];
  displayOrder:number;
}

export default function ExamCategoryCard({
                                           name,
                                           slug,
                                           icon,
                                           actionColor,
                                           color,
                                           iconBackgroundColor,
                                           exams,
                                           actionName,
                                         }: ExamCategoryProps) {
  const ExamsToDisplay = useMemo(() => exams.slice(0, exams.length > 4 ? 3 : 4), [exams]);
  const showMoreExams = useMemo(() => exams.length > 4, [exams]);
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(100);
  const handleGAEvents = (className='All') =>{
    testSeriesEventTracker.testListingVisit('Exam_cards', name, className)
  }
  return (
    <div
      className={'overflow-hidden flex group mb-auto border border-zinc-100 card-shadow animationFromBottom cursor-default hover:border-stroke-medium transitionAll200 rounded p-4'}>
      <div className={'flex flex-col flex-1 gap-4'}>
        <h2 className={'text-lg md:text-xl font-bold line-clamp-1 text-headings'}>{name}</h2>
        <div className={cn('w-full transitionAll200 overflow-y-hidden scrollbar-hide')}
             style={{ maxHeight: `${height}px`, height: `${height}px` }}>
          <div className={'flex flex-wrap'} id={slug}>
            {
              (showMore ? exams : ExamsToDisplay).map((exam, index) => (
                <Link href={exam.slug || '#'} key={index} onClick={() => handleGAEvents(exam.name)}>
                  <Pill
                    className={'mr-2 mb-2 animationFromBottom md:text-[14px] text-[12px] !slide-in-from-bottom-2 hover:border-stroke-medium fade-in text-light'}><span>{exam.name}</span></Pill>
                </Link>
              ))
            }
            {
              showMoreExams &&
              <Pill onClick={() => {
                setTimeout(() => {
                  setHeight(typeof window !== 'undefined' && document.getElementById(slug) ? document.getElementById(slug)?.offsetHeight! : 90);
                }, 100);
                setShowMore(!showMore);
              }}
                    className={'mr-2 mb-2  md:text-[12px] text-[14px] animationFromBottom !slide-in-from-bottom-2 hover:border-stroke-medium fade-in text-light'}><span>{!showMore ? 'More' : 'Less'}</span>
                <ChevronDownIcon
                  className={cn('h-3 w-3 transitionAll200', {
                    'rotate-180': showMore,
                  })} /></Pill>
            }
          </div>
        </div>
        <Link href={slug || '#'} className={'flex cursor-pointer items-center group/item'} onClick={() => handleGAEvents()}>
                    <span className={'group-hover/item:!text-primary group-hover/item:underline  text-sm md:text-[16px]  font-medium transitionAll200 '}
                          style={actionColor ? { color: actionColor } : {}}>
                        {actionName}
                    </span>
          <div
            className={'bg-zinc-100 ml-4 rounded-2xl px-3 py-1.5 group-hover/item:bg-primary transitionAll200'}>
            <ArrowRightIcon className={'w-5 h-5 group-hover/item:!stroke-white transitionAll200'}
                            style={actionColor ? { stroke: actionColor } : {}} />
          </div>
        </Link>
      </div>
      <div className={'relative w-[90px] md:w-[100px] flex flex-col items-end justify-center'}>
        <div className={'absolute -z-[1] left-0  -top-5 -bottom-5 aspect-square'}
             style={{ borderRadius: '50%', backgroundColor: (iconBackgroundColor || '#444444') }} />
        {
          icon && <Image src={icon} className={'w-[40px] md:w-[60px] group-hover:scale-110 transitionAll200'} alt={'icon'} />
        }
      </div>
    </div>
  );
}
