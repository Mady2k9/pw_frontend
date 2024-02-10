import {MainBanner} from "@/widgets/MainBanner";

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
export default function Home() {
    return <div className={''}>
        <MainBanner stretched={true} items={banners.map((banner) => {
            return {
                image: banner.dwebImage,
                mWebImage: banner.mwebImage,
                alt: banner.altTag,
                link: banner.redirectionUrl
            }
        })}/>
    </div>;
}
