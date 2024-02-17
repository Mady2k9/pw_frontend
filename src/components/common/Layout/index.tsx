import {Navbar} from "@/components/common/Layout/Navbar";
import {Footer} from "@/components/common/Layout/Footer";
import {ReactNode} from "react";
import {ISeoTags, ITopMenuItem} from "@/api/interfaces/page";
import SEO from "@/widgets/SEO";

interface LayoutProps {
    children: ReactNode;
    headerData?: ITopMenuItem[];
    seoTags?: ISeoTags
}

export function Layout({children, seoTags, headerData}: LayoutProps) {
    return (
        <main className={''}>
            {seoTags && <SEO
                title={seoTags?.pageMetaTags?.metaTitle}
                description={seoTags?.pageMetaTags?.metaDescription}
                keyword={seoTags?.pageMetaTags?.metaKeywords?.join(',')}
                canonical={seoTags?.canonicalLink}
            />}
            <Navbar items={headerData}/>
            <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'}/>
            {children}
            <Footer/>
        </main>
    );

}
