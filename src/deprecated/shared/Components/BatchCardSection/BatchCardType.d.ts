export interface BatchCardData {
  originalCost: string;
  updatedCost: string;
  name: string;
  byName: string; // usedFor
  banner: string;
  markedAsNew: boolean;
  slug: string;
  startDate: string;
  endDate: string;
  language: string;
  seoSlug: string;
  isPathshala: boolean;
  config: {
    isVidyapeeth: boolean;
  };
  previewImage: {
    baseUrl: string;
    key: string;
    name: string;
    _id: string;
  };
  meta: {
    key: string;
  }[];
  fee: {
    amount: number;
    discount: number;
    total: number;
  };
}

export interface BatchCardContainer {
  mainHeading: string;
  viewAllUrl?: string;
  BatchData: BatchCardData[];
}
