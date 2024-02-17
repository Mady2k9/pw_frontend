import {Pill} from "@/components/ui/pill";
import {useState} from "react";
import {MainBanner} from "@/widgets/MainBanner";

interface ResultsSectionProps {
    title?: string;
    description?: string;
    results: any[];
    hideCategories?: boolean;
}

export default function ResultsSection({title, hideCategories, description, results}: ResultsSectionProps) {
    const Categories = results?.map((result) => {
        return result.exam;
    })
    const [activePill, setActivePill] = useState<string>(Categories?.[0]);
    if (!results.length) {
        return <></>
    }
    const images = results.find((result) => {
        return result.exam === activePill
    })?.imageOption || [];
    return (
        <div className={'container py-4  md:py-8'}>
            {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
            {description &&
                <p className={'text-center text-sm md:text-lg font-medium text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
            {!hideCategories && <div className={'w-full overflow-x-auto scrollbar-hide py-1 my-4'}>
                <div className={'flex flex-nowrap justify-start md:justify-center gap-3'}>
                    {
                        Categories.map((category, index) => (
                            <Pill onClick={() => setActivePill(category)} key={index}
                                  variant={category === activePill ? 'active' : 'default'}>
                                <span>{category}</span>
                            </Pill>
                        ))
                    }
                </div>
            </div>}
            <div className={'rounded-md overflow-hidden'}>
                <MainBanner
                    items={images.map((banner: { dWebImage: string, mWebImage: string, redirectionUrl: string }) => {
                        return {
                            image: banner.dWebImage,
                            mWebImage: banner.mWebImage,
                            alt: title || `${activePill} Results`,
                            link: banner.redirectionUrl
                        }
                    })}/>
            </div>
        </div>
    )
}
