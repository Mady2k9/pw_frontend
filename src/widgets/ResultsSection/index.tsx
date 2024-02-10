import {Pill} from "@/components/ui/pill";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import {Carousel} from "@/components/ui/carousel";
import {MainBanner} from "@/widgets/MainBanner";

interface ResultsSectionProps {
    title?: string;
    description?: string;
}

const banners = [
    {
        "mwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/961cb3ae-c1df-405b-9382-9a14f986675b.webp",
        "dwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/5a4c751c-5f04-42f5-b58b-61f17b89641a.webp",
        "redirectionUrl": "https://www.pw.live",
        "displayOrder": 2,
        "altTag": "22"
    },
    {
        "displayOrder": 3,
        "mwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/7c37ac3c-2a8d-4bde-b377-199e7c13b436.png",
        "dwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/252c4326-f89b-44cb-9ff0-894ffd3cad91.png",
        "redirectionUrl": "https://www.pw.live",
        "altTag": "33"
    }
];
const Categories = ['IIT JEE', 'NEET', 'UPSC', 'GATE', 'CAT', 'SSC', 'BANK PO'];
export default function ResultsSection({title, description}: ResultsSectionProps) {
    const [activePill, setActivePill] = useState<string>(Categories[0]);
    return (
        <div className={'container py-4  md:py-8'}>
            {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
            {description &&
                <p className={'text-center text-sm md:text-lg text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
            <div className={'w-full overflow-x-auto scrollbar-hide py-1 my-4'}>
                <div className={'flex flex-nowrap gap-3'}>
                    {
                        Categories.map((category, index) => (
                            <Pill onClick={() => setActivePill(category)} key={index}
                                  variant={category === activePill ? 'active' : 'default'}>
                                <span>{category}</span>
                            </Pill>
                        ))
                    }
                </div>
            </div>
            <MainBanner items={banners.map((banner) => {
                return {
                    image: banner.dwebImage,
                    mWebImage: banner.mwebImage,
                    alt: banner.altTag,
                    link: banner.redirectionUrl
                }
            })}/>
        </div>
    )
}
