import { ReactNode } from 'react';
import { IFooterData, ISeoSchema, ISeoTags, ITopMenuItem } from '@/api/interfaces/page';
import SEO from '@/widgets/SEO';
import { Navbar } from '@/components/common/Layout/Navbar';

interface LayoutProps {
  children: ReactNode;
  headerData?: ITopMenuItem[];
  footerData?: IFooterData[];
  seoTags?: ISeoTags;
  seoSchema?: ISeoSchema[];
  className?: string;
  page_source: string;
  noIndex?: boolean;
}

export function Layout({
                         children,
                         className,
                         seoTags,
                         headerData,
                         footerData,
                         seoSchema,
                         page_source,
                         noIndex,
                       }: LayoutProps) {
  return (
    <main className={className || ''}>
      {seoTags && <SEO
        seoSchema={seoSchema}
        robots={noIndex ? 'noindex, nofollow' : 'index, follow'}
        title={seoTags?.pageMetaTags?.metaTitle}
        description={seoTags?.pageMetaTags?.metaDescription}
        keyword={seoTags?.pageMetaTags?.metaKeywords?.join(',')}
        canonical={seoTags?.canonicalLink}
      />}
      <Navbar items={headerData} page_source={page_source} />
      <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'} />
      {children}
      {/*<Footer  />*/}
      {/*{*/}
      {/*  footerData && <Footer showFreeLearning={true} footerData={footerData} />*/}
      {/*}*/}
    </main>
  );

}
