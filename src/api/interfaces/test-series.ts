
export interface ITestSeries {
    _id: string;
    sectionTitle: string;
    sectionSubTitle: string;
    sectionProps: ISectionProp[];
}

export interface ISectionProp {
    categoryName: string;
    redirectionUrl: string;
    displayOrder: number;
    icon: string;
    options: IOption[];
}

export interface IOption {
    className: string;
    redirectionUrl: string;
}

export interface ITestPass {
    _id: string;
    sectionTitle: string;
    sectionSubTitle: string;
    data: ITestPassData[];
}

export interface ITestPassData {
    _id: string;
    title: string;
    meta: IOffering[];
    slug: string;
    planTitle: string;
    discount: number;
    price: number;
    postDiscountPrice: number;
}

export interface IOffering {
    icon: string;
    text: string; // This could be an HTML string
}

export interface IPlanInfo {
    title: string;
    price: number;
    discount: number;
}
export interface ITestSeriesImageId {
    _id: string;
    name: string;
    baseUrl: string;
    key: string;
}

export interface ITestSeriesMetaIcon {
    _id?: string;
    name?: string;
    baseUrl: string;
    key: string;
}

export interface ITestSeriesMeta {
    type?: string;
    text: string;
    icon?: ITestSeriesMetaIcon;
}

export interface ITestSeriesLabel {
    name: string;
}

export interface ITestSeriesCategory {
    categoryModeId: string | null;
    modeType: 'Online' | 'Offline' | null | undefined;
    categoryId: string;
    title: string;
    label: ITestSeriesLabel[];
    imageId: ITestSeriesImageId;
    discount: number;
    price: number;
    currency: string;
    postDiscountPrice: number;
    meta: ITestSeriesMeta[];
    slug: string;
}
