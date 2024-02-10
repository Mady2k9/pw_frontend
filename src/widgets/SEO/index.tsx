import Head from 'next/head';
import { FC, Fragment, ReactNode, useMemo } from 'react';

import config from './default-seo-meta';
import {App_Envs_Enum} from "@/lib/constants";

interface OgImage {
    url: string;
    width: string;
    height?: string;
    alt?: string;
}

interface SEOProps {
    title?: string;
    description?: string;
    keyword?: string;
    canonical?: string;
    icon?: string;
    viewport?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImageUrl?: string;
    twitterImageHeight?: string;
    twitterImageWidth?: string;
    robots?: string;
    openGraph?: {
        title?: string;
        type?: string;
        locale?: string;
        description?: string;
        site_name?: string;
        url?: string;
        images?: OgImage[];
    };
    children?: ReactNode;
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
    return (
        <Fragment key={`og:image:${index}`}>
            <meta key={`og:image:url:${index}`} property="og:image" content={url} />
            <meta
                key={`og:image:width:${index}`}
                property="og:image:width"
                content={width}
            />
            <meta
                key={`og:image:height:${index}`}
                property="og:image:height"
                content={height}
            />
            <meta
                key={`og:image:alt:${index}`}
                property="og:image:alt"
                content={alt}
            />
        </Fragment>
    );
};

// common properties are rendered in common Head Component while configurable properties are rendered in SEO component
// we can configure props for SEO component in specific pages and include additional elements like meta tags through children

const SEO: FC<SEOProps> = ({
                               title,
                               description,
                               keyword,
                               canonical,
                               icon,
                               viewport,
                               twitterTitle,
                               twitterDescription,
                               twitterImageUrl,
                               twitterImageHeight,
                               twitterImageWidth,
                               openGraph,
                               robots,
                               children,
                           }) => {
    /**
     * @see https://nextjs.org/docs/api-reference/next/head
     *
     * meta or any other elements need to be contained as direct children of the Head element,
     * or wrapped into maximum one level of <React.Fragment> or arrays
     * otherwise the tags won't be correctly picked up on client-side navigations.
     *
     * The `key` property makes the tag is only rendered once,
     */

    const pageTitle = useMemo(() => {
        return title
            ? `${config.titleTemplate.replace(/%s/g, title)}`
            : config.title;
    }, [title]);

    return (
        <Head>
            <title key="title">{pageTitle}</title>
            <meta
                key="description"
                name="description"
                content={description || config.description}
            />
            <meta key="keywords" name="keywords" content={keyword} />
            <link key="canonical" rel="canonical" href={canonical} />
            <link rel="icon" type="image/x-icon" href={icon} />
            <meta name="viewport" content={viewport} />

            <meta
                key="og:type"
                property="og:type"
                content={openGraph?.type ?? config.openGraph.type}
            />
            <meta
                key="og:title"
                property="og:title"
                content={
                    openGraph?.title ?? title ?? config.openGraph.title ?? config.title
                }
            />
            <meta
                key="og:description"
                property="og:description"
                content={
                    openGraph?.description ??
                    description ??
                    config.openGraph.description ??
                    config.description
                }
            />
            <meta
                key="og:site_name"
                property="og:site_name"
                content={openGraph?.site_name ?? config.openGraph.site_name}
            />
            <meta
                key="og:url"
                property="og:url"
                content={openGraph?.url ?? config.openGraph.url}
            ></meta>
            {openGraph?.locale && (
                <meta key="og:locale" property="og:locale" content={openGraph.locale} />
            )}
            {openGraph?.images?.length
                ? openGraph.images.map((img, index) => ogImage(img, index))
                : ogImage(config.openGraph.images[0], 0)}
            {config.twitter.card && (
                <meta
                    key="twitter:card"
                    name="twitter:card"
                    content={config.twitter.card}
                />
            )}
            {config.twitter.site && (
                <meta
                    key="twitter:site"
                    name="twitter:site"
                    content={config.twitter.site}
                />
            )}
            {config.twitter.creator && (
                <meta
                    key="twitter:creator"
                    name="twitter:creator"
                    content={config.twitter.creator}
                />
            )}
            <meta name="twitter:title" content={twitterTitle} />
            <meta name="twitter:description" content={twitterDescription} />
            <meta name="twitter:image:src" content={twitterImageUrl} />
            <meta property="twitter:image:height" content={twitterImageHeight} />
            <meta property="twitter:image:width" content={twitterImageWidth} />

            {/* below ensures that all pages in staging and dev environments are not indexed or crawled */}
            {[App_Envs_Enum.Development, App_Envs_Enum.Staging].includes(
                process.env.NEXT_PUBLIC_NODE_ENV as App_Envs_Enum
            ) ? (
                <>
                    <meta
                        key="robots"
                        name="robots"
                        content={robots ?? 'noindex,nofollow'}
                    />
                </>
            ) : (
                <>
                    <meta key="robots" name="robots" content={robots ?? 'index,follow'} />
                    <meta
                        key="googlebot"
                        name="googlebot"
                        content={robots ?? 'index,follow'}
                    ></meta>
                </>
            )}
            {children}
        </Head>
    );
};

export default SEO;
