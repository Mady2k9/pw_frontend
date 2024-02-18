import { Navbar } from '@/components/common/Layout/Navbar';
import { Footer } from '@/components/common/Layout/Footer';
import { ReactNode } from 'react';
import { ISeoTags, ITopMenuItem } from '@/api/interfaces/page';
import SEO from '@/widgets/SEO';
import { cn } from '@/lib/utils';
import { useGlobal } from '@/contexts/global';

interface LayoutProps {
  children: ReactNode;
  headerData?: ITopMenuItem[];
  seoTags?: ISeoTags;
  className?: string;
}

export function Layout({ children, className, seoTags, headerData }: LayoutProps) {
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
      <Footer />
    </main>
  );

}
