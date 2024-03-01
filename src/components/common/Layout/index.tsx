import { Navbar } from '@/components/common/Layout/Navbar';
import { ReactNode } from 'react';
import { IFooterData, ISeoSchema, ISeoTags, ITopMenuItem } from '@/api/interfaces/page';
import SEO from '@/widgets/SEO';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  headerData?: ITopMenuItem[];
  footerData?: IFooterData[];
  seoTags?: ISeoTags;
  seoSchema?: ISeoSchema[];
  className?: string;
  page_source: string;
}

export function Layout({
                         children,
                         className,
                         seoTags,
                         headerData,
                         footerData,
                         seoSchema,
                         page_source,
                       }: LayoutProps) {
  return (
    <main className={className || ''}>
      {seoTags && <SEO
        seoSchema={seoSchema}
        title={seoTags?.pageMetaTags?.metaTitle}
        description={seoTags?.pageMetaTags?.metaDescription}
        keyword={seoTags?.pageMetaTags?.metaKeywords?.join(',')}
        canonical={seoTags?.canonicalLink}
      />}
      <Navbar items={headerData} page_source={page_source} />
      <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'} />
      {children}
      {/*<Footer  />*/}
      {
        footerData && <Footer showFreeLearning={true} footerData={footerData} />
      }
    </main>
  );

}
