import {IBatch} from "@/api/interfaces/batch";
import { ITestSeries } from "./test-series";

export interface IPageData {
    description: string;
    tabs: any[];
    updatedBy: string;
    seoSchema: ISeoSchema[];
    widgetOrder: string[];
    content: string;
    faqs: IFaq[];
    batches: IBatches;
    header: any[];
    title: string;
    footer: any[];
    options: ICohortOptions[];
    seoTags: ISeoTags;
    widgetJson: IWidgetJson;
    testCats : Record<string, any[]>
}

export interface ISeoSchema {
    content: IContent | IContent[] | any;
    type: string;
    status: boolean;
}

export interface IContent {
    "@context"?: string;
    "@type": string;
    itemListElement?: IItemListElement[];
    mainEntity?: IMainEntity;
    name?: string;
    url?: string;
    logo?: string;
    sameAs?: string;
}

export interface IItemListElement {
    "@type": string;
    position: number;
    item?: IItem | string;
    name?: string;
}

export interface IItem {
    "@type": string;
    url: string;
    name: string;
    description?: string;
    provider?: IProvider;
}

export interface IProvider {
    "@type": string;
    name: string;
    sameAs: string;
}

export interface IMainEntity {
    "@type": string;
    acceptedAnswer?: IAcceptedAnswer;
}

export interface IAcceptedAnswer {
    "@type": string;
}

export interface IFaq {
    question: string;
    answer: string;
    title: string;
    description: string;
}

export interface IBatches {
    [key: string]: IBatch[];
}
export interface ITest {
    [key: string]: ITestSeries[];
}


export interface ICohortOptions {
    cohortId: string;
    option: string;
}

export interface ISeoTags {
    canonicalLink: string;
    pageMetaTags: IPageMetaTags;
}

export interface IPageMetaTags {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    ogImageUrl: string;
}

export interface IWidgetJson {
    APP_DOWNLOAD: IWidget;
    RESULTS: IWidget;
    TEST_SERIES: IWidget;
    EXAM_CATEGORIES: IWidget;
    CAROUSEL: IWidget;
    HERO_SECTION: IWidget;
    STATS: IWidget;
    TEST_PASS: IWidget;
}

export interface CtaViewAll {
    altText: string;
    text: string;
    textColor: string;
}
export interface IWidget {
    cta: CtaViewAll;
    _id: string;
    sectionTitle: string;
    sectionSubTitle: string;
    sectionProps: any; // This could be further detailed based on the structure of `sectionProps`
    data: any; // This could be further detailed based on the structure of `sectionProps`
}

export interface ITopMenuItem {
    _id: string;
    status: boolean;
    menuTitle: string;
    menuItems: INestedMenuItem[];
    displayOrder?: number;
    menuIcon?: string;
    menuRedirectionUrl?: string;
}

export interface INestedMenuItem {
    menuTitle: string;
    menuItems?: INestedMenuItem[]; // Optional for further nesting
    menuIcon?: string;
    menuRedirectionUrl?: string;
}

export interface IFooterData {
    _id: string;
    status: boolean;
    section: number;
    menuItems: IMenuItem[];
}

export interface IMenuItem {
    menuTitle: string;
    menuItems?: ISubMenuItem[]; // Optional because the last section contains descriptions instead of menuItems
    id?: string; // Optional because not all menuItems have an id field
    description?: string; // Optional for sections with descriptions instead of nested menuItems
    redirectionUrl?: string; // Optional for items that directly redirect
}

export interface ISubMenuItem {
    menuTitle: string;
    redirectionUrl: string;
}
