import { ReactNode } from 'react';
import { IFooterData, ISeoSchema, ISeoTags, ITopMenuItem } from '@/api/interfaces/page';
import SEO from '@/widgets/SEO';
import { Navbar } from '@/components/common/Layout/Navbar';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import formatDate from '@/lib/date.utils';

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
        openGraph={{
          title: seoTags?.pageMetaTags?.metaTitle,
          type: 'website',
          locale: 'en_IN',
          description: seoTags?.pageMetaTags?.metaDescription,
          site_name: 'PW Live',
          url: seoTags?.canonicalLink,
          images: [{
            url: seoTags?.pageMetaTags?.ogImageUrl || 'https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/baea2846-ed40-4951-8683-84bd031d350a.png',
            width: '40',
            height: '40',
            alt: seoTags?.pageMetaTags?.metaTitle,
          }],
        }}
      />}
      <Navbar items={headerData} page_source={page_source} />
      <div key={'navbar-placeholder'} className={'h-[60px] md:h-navbar'} />
      {children}
      {
        footerData && <Footer showFreeLearning={true} footerData={footerData} />
      }
    </main>
  );

}
