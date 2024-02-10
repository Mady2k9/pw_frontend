import {ReactNode} from "react";
import bgImage from '@/assets/background-images/course-hero-bg-web.webp';
import bgMWebImage from '@/assets/background-images/course-hero-bg-Mweb.webp';
import {Breadcrumbs, BreadcrumbsProps} from "@/components/ui/breadcrumbs";

interface PageTitleBarProps {
    title?: string | ReactNode;
    description?: string | ReactNode;
    breadcrumbs?: BreadcrumbsProps
}

export function PageTitleBar({breadcrumbs, description, title}: PageTitleBarProps) {
    if (typeof title === 'string') {
        title = <>{title}</>
    }
    return (
        <div className="relative">
            <div
                className={'absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat hidden md:block z-[-1]'}
                style={{backgroundImage: `url(${bgImage.src})`}}/>
            <div className={'absolute left-0 right-0 top-0 bottom-0 md:hidden  bg-cover bg-center bg-no-repeat z-[-1]'}
                 style={{backgroundImage: `url(${bgMWebImage.src})`}}/>
            <div className={'container py-4 md:py-7 space-y-2'}>
                {
                    breadcrumbs && <Breadcrumbs {...breadcrumbs} />
                }
                {title &&
                    <h1 className={'text-2xl text-center md:text-start md:text-[40px] font-bold leading-[50px]'}>{title}</h1>}
                {
                    description &&
                    <p className={'font-medium text-sm text-center md:text-start md:text-lg text-light'}>{description}</p>
                }
            </div>
        </div>
    )
}
