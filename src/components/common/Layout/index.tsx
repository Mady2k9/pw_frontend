import { Navbar } from '@/components/common/Layout/Navbar';
import { ReactNode } from 'react';
import { IFooterData, ISeoTags, ITopMenuItem } from '@/api/interfaces/page';
import SEO from '@/widgets/SEO';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';

interface LayoutProps {
  children: ReactNode;
  headerData?: ITopMenuItem[];
  footerData?: IFooterData[];
  seoTags?: ISeoTags;
  className?: string;
}

export function Layout({ children, className, seoTags, headerData, footerData }: LayoutProps) {
  return (
    <main className={className || ''}>
      {seoTags && <SEO
        title={seoTags?.pageMetaTags?.metaTitle}
        description={seoTags?.pageMetaTags?.metaDescription}
        keyword={seoTags?.pageMetaTags?.metaKeywords?.join(',')}
        canonical={seoTags?.canonicalLink}
      />}
      <Navbar items={headerData} />
      <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'} />
      {children}
      {/*<Footer  />*/}
      <Footer footerData={footerData}/>
    </main>
  );

}
