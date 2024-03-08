import { ReactElement, ReactNode } from 'react';
import bgImage from '@/assets/background-images/course-hero-bg-web.webp';
import bgMWebImage from '@/assets/background-images/course-hero-bg-Mweb.webp';
import bgInverted from '@/assets/background-images/description-bg-image.webp';
import { Breadcrumbs, BreadcrumbsProps } from '@/components/ui/breadcrumbs';
import { cn } from '@/lib/utils';
import HtmlContentWidget from '../HtmlContentWidget/HtmlContentWidget';

interface PageTitleBarProps {
  floatingCard?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  breadcrumbs?: BreadcrumbsProps;
  inverted?: boolean;
  containerClass?: string;
  noBgImage?: boolean;
  descriptionContent?: string; // This should be html Content
  descriptionElement?: ReactElement; // This should be html Content
}

export function PageTitleBar({
                               breadcrumbs,
                               descriptionContent,
                               inverted,
                               descriptionElement,
                               containerClass,
                               floatingCard,
                               description,
                               noBgImage,
                               title,
                             }: PageTitleBarProps) {
  if (typeof title === 'string') {
    title = <>{title}</>;
  }
  return (
    <>
      {
        floatingCard &&
        <div className={'w-full h-0 hidden lg:flex justify-end container sticky z-[10] top-[100px] right-0'}>
          <div className={'w-full md:w-[360px]'}>
            {floatingCard}
          </div>
        </div>
      }
      <div className="relative">
        {
          inverted ? <div
            className={'absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat z-[-1]'}
            style={{ backgroundImage: `url(${bgInverted.src})` }} /> : <>
          {!noBgImage && <> 
            <div
              className={'absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat hidden md:block z-[-1]'}
              style={{ backgroundImage: `url(${bgImage.src})` }} />
            <div
              className={'absolute left-0 right-0 top-0 bottom-0 md:hidden  bg-cover bg-center bg-no-repeat z-[-1]'}
              style={{ backgroundImage: `url(${bgMWebImage.src})` }} />
          </>}
          </>
        }
        <div
          className={cn('container  relative py-4 md:pt-6 md:pb-[10px] space-y-2 md:space-y-4', containerClass, {
            'lg:pr-[400px]': !!floatingCard,
          })}>
          {
            breadcrumbs && <Breadcrumbs inverted={inverted} {...breadcrumbs} />
          }
          {title &&
            <h1 className={cn('text-2xl text-start md:text-[40px] font-bold leading-[36px] md:leading-[50px]', {
              'text-white': inverted,
            })}>{title}</h1>}
          {
            description &&
            <p className={cn('font-medium text-start text-base text-light', {
              'text-white': inverted,
            })}>{description}</p>
          }
          {
            descriptionContent && <HtmlContentWidget content={descriptionContent} />
          }
          {
            descriptionElement && descriptionElement
          }
        </div>
      </div>
    </>
  );
}
